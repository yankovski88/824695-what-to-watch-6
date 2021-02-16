import React from "react";
import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";


const CatalogLikeFilms = (props)=>{
  const {likeFilms} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__movies-list">
        {likeFilms.map((likeFilm)=> {
          return <SmallCard
            key={likeFilm.id}
            videoLink = {likeFilm.videoLink}
            name = {likeFilm.name}
            posterImage = {likeFilm.posterImage}
            id = {likeFilm.posterImage}
          />;
        })}
      </div>
    </section>
  );
};

CatalogLikeFilms.propTypes = {
  likeFilms: PropTypes.array.isRequired
};

export default CatalogLikeFilms;
