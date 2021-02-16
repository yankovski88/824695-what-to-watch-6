import React from "react";
import PropTypes from "prop-types";
import FilmReview from "../film-review/film-review";


const FilmReviews = (props) => {
  const {reviews} = props;
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
  reviews: PropTypes.array.isRequired,
};

export default FilmReviews;
