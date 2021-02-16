import React from "react";
import PropTypes from "prop-types";

const FilmReview = (props) => {
  const {review} = props;
  console.log(review);
  return (
    <div className="review" id={review.id}>
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author" id={review.user.id}>{review.name}</cite>
          <time className="review__date" dateTime={review.date}>{review.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
};


FilmReview.propTypes = {
  review: PropTypes.object.isRequired,
};

export default FilmReview;
