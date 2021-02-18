import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const LinkAddReview = (props)=>{
  const {film} = {props};

  return (
    <Link to={`/films/${film ? film.id : ``}/add-review`} className="btn movie-card__button">Add review</Link>
  );
};

LinkAddReview.propTypes = {
  film: PropTypes.object.isRequired,
};

export default LinkAddReview;
