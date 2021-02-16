import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const FilmReview = (props) => {
  const {review} = props;

  console.log(review);

  return (
    <div className="review" id={review.id}>
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author" id={review.user.id}>{review.user.name}</cite>
          <time className="review__date" dateTime={review.date}>{moment(review.date).format("MMMM DD, YYYY")}</time>
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
