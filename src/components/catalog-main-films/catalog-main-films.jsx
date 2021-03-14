import React from "react";
import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";
// import {getFilm} from "../../utils/utils.js";
import {connect} from 'react-redux';
import {ActionType} from '../../store/action';
import {GenresItem} from "../item/genres-item";

const CatalogMainFilms = (props)=>{
  const {mainFilms, updateData, films} = props;
  console.log(props)
  // const [filmActive, setFilmActive] = React.useState(``);

  // const updateFilmActive = (value) => {
  //   setFilmActive(value);
  // };

  // getFilm(filmActive, mainFilms);

  return (
    <div className="catalog__movies-list">
      {films.map((mainFilm)=> {
        return <SmallCard
          mainFilm = {mainFilm}
          key = {mainFilm.id}
          videoLink = {mainFilm.videoLink}
          name = {mainFilm.name}
          posterImage = {mainFilm.posterImage}
          id = {mainFilm.id}
          updateData={updateData}
          // mainFilms = {mainFilms}
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


const mapStateToProps = (state)=>({
  films: state.films
})

export {CatalogMainFilms};
export default connect(mapStateToProps, null)(CatalogMainFilms); // connect подружит наш компонент с провайдером
