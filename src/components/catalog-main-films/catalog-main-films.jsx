import React from "react";
import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";
// import {getFilm} from "../../utils/utils.js";

const CatalogMainFilms = (props)=>{
  const {mainFilms, updateData} = props;
  // const [filmActive, setFilmActive] = React.useState(``);

  // const updateFilmActive = (value) => {
  //   setFilmActive(value);
  // };

  // getFilm(filmActive, mainFilms);

  return (
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
          mainFilms = {mainFilms}
          // updateFilmActive={updateFilmActive}
        />;
      })}
    </div>
  );
};

CatalogMainFilms.propTypes = {
  mainFilms: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default CatalogMainFilms;
