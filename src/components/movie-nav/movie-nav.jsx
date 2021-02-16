import React from "react";
import {Link} from "react-router-dom";

const MovieNav = ()=>{
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className="movie-nav__item movie-nav__item--active">
          <Link to="/film" className="movie-nav__link">Overview</Link>
        </li>
        <li className="movie-nav__item ">
          <Link to="/film/details" className="movie-nav__link ">Details</Link>
        </li>
        <li className="movie-nav__item">
          <Link to="/film/reviews" className="movie-nav__link ">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MovieNav;
