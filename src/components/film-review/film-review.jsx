import React from "react";
import moment from "moment";
import {reviewPropTypes} from "../../prop-types";

const FilmReview = (props) => {
  const {review} = props;

  return (
    <div className="review" id={review.id}>
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author" id={review.user.id}>{review.user.name}</cite>
          <time className="review__date" dateTime={review.date}>{moment(review.date).format(`MMMM DD, YYYY`)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating.toFixed(1)}</div>
    </div>
  );
};


FilmReview.propTypes = {
  review: reviewPropTypes,
};

export default FilmReview;
