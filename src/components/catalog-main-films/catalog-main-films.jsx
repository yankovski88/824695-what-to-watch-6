import React from "react";

import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";


const CatalogMainFilms = (props)=>{
  const {mainFilms} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__movies-list">
        {mainFilms.map((mainFilm)=> {
          return <SmallCard
            key = {mainFilm.id}
            videoLink = {mainFilm.videoLink}
            name = {mainFilm.name}
            posterImage = {mainFilm.posterImage}
            id={mainFilm.id}
          />;
        })}
      </div>
    </section>
  );
};

CatalogMainFilms.propTypes = {
  mainFilms: PropTypes.array.isRequired
};

export default CatalogMainFilms;
