import React from "react";
import PropTypes from "prop-types";
// import Logo from "../logo/logo.jsx";
// import UserBlock from "../user-block/user-block.jsx";
import BtnAddMyList from "../btn-add-my-list/btn-add-my-list";
import {connect} from "react-redux";
import {fetchPromo} from "../../store/api-actions";
import Header from "../header/header";
import BtnPlay from "../btn-play/btn-play";

const Card = (props) => {
  const {filmPromo, onLoadFilmPromo} = props;

  React.useEffect(()=>{
    if (Object.keys(filmPromo).length === 0) {
      onLoadFilmPromo();

    }
  }, [filmPromo]);

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={filmPromo.backgroundImage} alt={filmPromo.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

     <Header/>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={filmPromo.posterImage} alt={`${filmPromo.name} promo`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{filmPromo.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{filmPromo.genre}</span>
              <span className="movie-card__year">{filmPromo.released}</span>
            </p>

            <div className="movie-card__buttons">
              {/*anyFilm={filmPromo}*/}
              <BtnPlay />
              <BtnAddMyList />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

Card.propTypes = {
  filmPromo: PropTypes.object.isRequired,
  onLoadFilmPromo: PropTypes.func.isRequired,
};

const mapStateToProps = (state)=>({
  filmPromo: state.filmPromo,
});

const mapDispatchToProps = (dispatch)=>({
  onLoadFilmPromo() {
    dispatch(fetchPromo());
  }
});

export {Card};
export default connect(mapStateToProps, mapDispatchToProps)(Card);


