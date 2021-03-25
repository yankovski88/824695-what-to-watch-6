import React from "react";
import PropTypes from "prop-types";

const FilmDescription = (props)=>{
  const {film} = props;
console.log(film)
  return (
    <div className="movie-card__text">
      {/*<p>{film.description}</p>*/}

      {/*<p className="movie-card__director"><strong>Director: {film.director}</strong></p>*/}

      {/*<p className="movie-card__starring"><strong>Starring:&nbsp;*/}
      {/*  {*/}
      {/*    film.starring.map((item, index)=>{*/}
      {/*      return `${item}${index + 1 === film.starring.length ? `` : `, `}`;*/}
      {/*    })*/}
      {/*  } and other</strong></p>*/}
    </div>
  );
};

FilmDescription.propTypes = {
  film: PropTypes.object.isRequired
};

export default FilmDescription;
