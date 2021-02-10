import React from "react";
import PropTypes from "prop-types";
import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.jsx";
import BtnAddMyList from "../btn-add-my-list/btn-add-my-list";

const Card = (props) => {
  const {mainFilms} = props;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo/>
        <UserBlock/>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{mainFilms[0].name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{mainFilms[0].genre}</span>
              <span className="movie-card__year">{mainFilms[0].released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>

              <BtnAddMyList />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

Card.propTypes = {
  mainFilms: PropTypes.array.isRequired,
};

export default Card;
