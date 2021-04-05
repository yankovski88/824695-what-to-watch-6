import React from "react";
import {Link} from "react-router-dom";
import {moviePropTypes} from "../../prop-types";

const LinkAddReview = (props)=>{
  const {filmById} = props;

  return (
    <Link to={`/films/${filmById.id}/add-review`} className="btn movie-card__button">Add review</Link>
  );
};

LinkAddReview.propTypes = {
  filmById: moviePropTypes,
};

export default LinkAddReview;
