import React from "react";
import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";


const CatalogMainFilms = (props)=>{
  const {mainFilms, updateData} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__movies-list">
        {mainFilms.map((mainFilm)=> {
          return <SmallCard
            mainFilm = {mainFilm}
            key = {mainFilm.id}
            videoLink = {mainFilm.videoLink}
            name = {mainFilm.name}
            posterImage = {mainFilm.posterImage}
            id = {mainFilm.id}
            updateData={updateData}
          />;
        })}
      </div>
    </section>
  );
};

CatalogMainFilms.propTypes = {
  mainFilms: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default CatalogMainFilms;
