import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const SmallCard = (props) => {
  const {posterImage, name, id, updateData, updateFilmActive} = props;

  return (
    <article className={`small-movie-card catalog__movies-card`} id={id}
      onClick={() => {
        updateData(id);
      }}
      onMouseEnter={()=>{
        updateFilmActive(id);
      }}
      onMouseLeave={() => {
        updateFilmActive({});
      }}
    >
      <div className="small-movie-card__image">
        <img src={posterImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

SmallCard.propTypes = {
  posterImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  updateData: PropTypes.func.isRequired,
  mainFilm: PropTypes.object.isRequired,
  updateFilmActive: PropTypes.func.isRequired,

};


export default SmallCard;
