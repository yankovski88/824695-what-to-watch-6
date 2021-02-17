import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


const MovieNav = (props)=>{
  const {nav} = props;
  const [activeNav, setActiveNav] = React.useState(nav);


  const handleNavChange = (evt) => {
    const {name} = evt.target;
    setActiveNav({nav: name});
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={`movie-nav__item  ${activeNav.nav === `overview` ? `movie-nav__item--active` : ``}`} >
          <Link to="/film" className="movie-nav__link" name="overview"  onClick={handleNavChange}>Overview</Link>
        </li>
        <li className={`movie-nav__item  ${activeNav.nav === `details` ? `movie-nav__item--active` : ``}`} >
          <Link to="/film/details" className="movie-nav__link " name="details" onClick={handleNavChange}>Details</Link>
        </li>
        <li className={`movie-nav__item  ${activeNav.nav === `reviews` ? `movie-nav__item--active` : ``}`} >
          <Link to="/film/reviews" className="movie-nav__link " name="reviews" onClick={handleNavChange}>Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

MovieNav.propTypes = {
  nav: PropTypes.object.isRequired,
};

export default MovieNav;
