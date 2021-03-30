import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


const Breadcrumbs = (props) => {
  const {film} = props;
  const {name} = film;
  return (
    <nav className="breadcrumbs" >
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/film" className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};


Breadcrumbs.propTypes = {
  film: PropTypes.object.isRequired,
};

export default Breadcrumbs;


