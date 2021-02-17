import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


const MovieNav = (props)=>{
  const {filmType} = props;
  debugger
  const [activeNav, setActiveNav] = React.useState({name: ``}); // filmType
  debugger
  // console.log(filmType);
  console.log(activeNav);

  const handleNavChange = (evt) => {
    const {value} = evt.target;
    console.log(evt.target);
    setActiveNav({name: value});
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={`movie-nav__item  ${activeNav.name === `Overview` ? `movie-nav__item--active` : ``}`} >
          <Link to="/film" className="movie-nav__link" name="overview" value="Overview"  onClick={handleNavChange}>Overview</Link>
        </li>
        <li className={`movie-nav__item  ${activeNav.name === `Overview` ? `movie-nav__item--active` : ``}`} >
          <Link to="/film/details" className="movie-nav__link " name="details" value="Details" onClick={handleNavChange}>Details</Link>
        </li>
        <li className={`movie-nav__item  ${activeNav.name === `Overview` ? `movie-nav__item--active` : ``}`} >
          <Link to="/film/reviews" className="movie-nav__link " name="reviews" value="Reviews" onClick={handleNavChange}>Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

MovieNav.propTypes = {
  filmType: PropTypes.object.isRequired,
};

export default MovieNav;
