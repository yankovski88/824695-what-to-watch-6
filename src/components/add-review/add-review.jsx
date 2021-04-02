import React from "react";
import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.jsx";
import Breadcrumbs from "../breadcrumbs/breadcrumbs.jsx";
import AddReviewForm from "../add-review-form/add-review-form";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchFilmById, fetchPostComment} from "../../store/api-actions";
import {useParams} from "react-router-dom";
// import {AuthorizationStatus} from "../../constants/constants";


const AddReview = (props) => {
  const {film, filmById, isFilmFound, loadFilmById, postCommentItem} = props; // authorizationStatus
  const {name, posterImage} = filmById;
  let {id} = useParams();
console.log(id)

  const handleGetRatingComment = (rating, comment)=>{
    postCommentItem(id, rating, comment);
  };


  // React.useEffect(()=>{
  //   if(authorizationStatus === AuthorizationStatus.AUTH){
  //     loadFilmById(id)
  //   }
  //   loadFilmById(film.id); // тогда вызываем функцию которая делает запрос на сервер, отдает данные в dispatch, а тот меняет store
  //
  // },[isFilmFound])

  React.useEffect(()=>{
    if (!isFilmFound) {
      loadFilmById(id);
    }
    loadFilmById(film.id); // тогда вызываем функцию которая делает запрос на сервер, отдает данные в dispatch, а тот меняет store

  }, [isFilmFound]);

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={filmById.backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>
          <Breadcrumbs film={filmById}/>
          <UserBlock/>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width="218"
            height="327"/>
        </div>
      </div>

      <AddReviewForm onSubmit={handleGetRatingComment}/>
    </section>

  );
};

AddReview.propTypes = {
  film: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired,
  filmById: PropTypes.object.isRequired,
  isFilmFound: PropTypes.bool.isRequired,
  postCommentItem: PropTypes.func.isRequired,
  loadFilmById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isFilmFound: state.isFilmFound,
  filmById: state.filmById,
  // authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilmById(id) {
    dispatch(fetchFilmById(id));
  },
  postCommentItem(id, rating, comment) {
    dispatch(fetchPostComment(id, rating, comment));
  }
});

export {AddReview};

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
