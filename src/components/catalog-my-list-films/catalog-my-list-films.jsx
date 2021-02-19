import React from "react";
import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";


const CatalogMyListFilms = (props)=>{
  const {myListFilms, updateData} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__movies-list">
        {myListFilms.map((myListFilm)=> {
          return <SmallCard
            key={myListFilm.id}
            videoLink = {myListFilm.videoLink}
            name = {myListFilm.name}
            posterImage = {myListFilm.posterImage}
            id={myListFilm.id}
            updateData={updateData}
          />;
        })}
      </div>
    </section>
  );
};

CatalogMyListFilms.propTypes = {
  myListFilms: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired,

};

export default CatalogMyListFilms;
