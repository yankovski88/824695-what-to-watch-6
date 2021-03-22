import React from "react";
import Logo from "../logo/logo";
import Copyright from "../copyright/copyright";
import UserBlock from "../user-block/user-block.jsx";
import CatalogLikeFilms from "../catalog-like-films/catalog-like-films";
import BtnPlay from "../btn-play/btn-play";
import BtnAddMyList from "../btn-add-my-list/btn-add-my-list";
// import LinkAddReview from "../link-add-review/link-add-review";
import MovieNav from "../movie-nav/movie-nav.jsx";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
// import {useHistory, useParams} from "react-router-dom";
import filmProp from "./film.prop";

const Film = (props) => {
  const {likeFilms, film, reviews, updateData} = props;

  // const params = useParams();
  // const history = useHistory();


  const {posterImage, name, genre, released} = film;
  const [nav] = React.useState({
    nav: `overview`,
  });

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo/>
            <UserBlock/>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <BtnPlay/>
                <BtnAddMyList/>
                <Link to={`/films/${film ? film.id : ``}/add-review`}
                  className="btn movie-card__button">Add review</Link>

                {/* <LinkAddReview film={film}/>*/}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218"
                height="327"/>
            </div>

            <div className="movie-card__desc">

              <MovieNav nav = {nav} film={film} reviews={reviews}/>

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <CatalogLikeFilms likeFilms={likeFilms} updateData={updateData}/>

        <footer className="page-footer">
          <Logo/>
          <Copyright/>
        </footer>
      </div>
    </>
  );
};

Film.propTypes = {
  film: filmProp,
  likeFilms: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  // film: PropTypes.object.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default Film;
