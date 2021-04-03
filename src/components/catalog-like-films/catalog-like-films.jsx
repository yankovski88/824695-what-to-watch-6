import React from "react";
import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";


const CatalogLikeFilms = (props)=>{
  const {updateData, likeFilms} = props;
  const activeFilms = likeFilms;

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__movies-list">
        {activeFilms.map((activeFilm)=> {
          return <SmallCard
            activeFilm={activeFilm}
            key={activeFilm.id}
            updateData={updateData}
          />;
        })}
      </div>
    </section>
  );
};

CatalogLikeFilms.propTypes = {
  likeFilms: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired,
};


export default CatalogLikeFilms;
