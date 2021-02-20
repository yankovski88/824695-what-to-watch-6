import React from "react";
import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";
import {getFilm} from "../../utils/utils";


const CatalogLikeFilms = (props)=>{
  const {likeFilms, updateData} = props;
  const [filmActive, setFilmActive] = React.useState(``);

  const updateFilmActive = (value) => {
    setFilmActive(value);
  };

  getFilm(filmActive, likeFilms);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__movies-list">
        {likeFilms.map((likeFilm)=> {
          return <SmallCard
            likeFilm={likeFilm}
            key={likeFilm.id}
            videoLink = {likeFilm.videoLink}
            name = {likeFilm.name}
            posterImage = {likeFilm.posterImage}
            id = {likeFilm.id}
            updateData={updateData}
            updateFilmActive={updateFilmActive}

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
