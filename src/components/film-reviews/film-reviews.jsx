import React from "react";
// import Logo from "../logo/logo";
// import Copyright from "../copyright/copyright";
// import UserBlock from "../user-block/user-block.jsx";
// import CatalogLikeFilms from "../catalog-like-films/catalog-like-films";
// import BtnPlay from "../btn-play/btn-play";
// import BtnAddMyList from "../btn-add-my-list/btn-add-my-list";
// import LinkAddReview from "../link-add-review/link-add-review";
// import MovieNav from "../movie-nav/movie-nav.jsx";
// import MovieRating from "../movie-rating/movie-rating.jsx";
// import FilmDescription from "../film-description/film-description";
import PropTypes from "prop-types";
import FilmReview from "../film-review/film-review";


const FilmReviews = (props) => {
  const {likeFilms, reviews} = props;
  const remainder = reviews.length % 2;

  let columns1 = [];
  let columns2 = [];
  if (remainder > 0) {
    columns1 = reviews.slice(0, reviews.length % 2 + 1);
    columns2 = reviews.slice(reviews.length % 2 + 1, reviews.length);
  } else if (remainder === 0) {
    columns1 = reviews.slice(0, reviews.length % 2);
    columns2 = reviews.slice(reviews.length % 2, reviews.length);
  }

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {columns1.map((review) => {
          return <FilmReview review={review} key={review.id}/>;
        })}

      </div>
      <div className="movie-card__reviews-col">
        {columns2.map((review) => {
          return <FilmReview review={review} key={review.id}/>;
        })}
      </div>
    </div>


  );

};

FilmReviews.propTypes = {
  likeFilms: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default FilmReviews;
