import React from "react";
import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.jsx";
import Breadcrumbs from "../breadcrumbs/breadcrumbs.jsx";
import AddReviewForm from "../add-review-form/add-review-form";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchFilmById, fetchPostComment} from "../../store/api-actions";
import {useParams} from "react-router-dom";
import Spinner from "../spinner/spinner";
import Logout from "../logout/logout";
import {moviePropTypes} from "../../prop-types";


const AddReview = (props) => {
  const {filmById, loadFilmById, postCommentItem, isFilmLoaded} = props;
  const {name, posterImage} = filmById;
  const {id} = useParams();

  const handleGetRatingComment = (rating, comment)=>{
    postCommentItem(id, rating, comment);
  };

  React.useEffect(()=>{
    if (id) {
      loadFilmById(id);
    }
  }, [id]);

  return (
    !isFilmLoaded ? <Spinner/> :
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
            <Logout/>
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
  filmById: moviePropTypes,
  postCommentItem: PropTypes.func.isRequired,
  loadFilmById: PropTypes.func.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ALL_MOVIES}) => ({
  filmById: ALL_MOVIES.filmById,
  isFilmLoaded: ALL_MOVIES.isFilmLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  loadFilmById(id) {
    dispatch(fetchFilmById(id));
  },
  postCommentItem(id, rating, comment) {
    dispatch(fetchPostComment(id, rating, comment));
  },
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
