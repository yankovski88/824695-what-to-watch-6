import React from "react";
import Card from "../card/card";
import PropTypes from "prop-types";
import Logo from "../logo/logo.jsx";
import Copyright from "../copyright/copyright.jsx";
import CatalogMainFilms from "../catalog-main-films/catalog-main-films";
import ListGenres from "../list-genres/list-genres";
import BtnShowMore from "../btn-show-more/btn-show-more";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

// import {Fragment, useEffect, useState} from 'react';
import {fetchMoviesList} from '../../store/api-actions';
// import Spinner from '../spinner/spinner';


const Main = (props) => {
  const {mainFilms, updateData, films, countShowFilm, setGenre, isDataLoaded, onLoadData, genreFilms} = props; // itemGenres
let itemGenreFilms;
if(!genreFilms){
  itemGenreFilms = films
} else {
  itemGenreFilms = genreFilms
}


console.log(genreFilms)

  React.useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isDataLoaded) {
    return <h1>Loading...</h1>; // Spinner
  }



  return <React.Fragment>
    <Card mainFilms = {mainFilms}/>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <ListGenres films={films} updateData={updateData} setGenre={setGenre}/>
        <CatalogMainFilms updateData={updateData}/>
        {itemGenreFilms.length > countShowFilm ? <BtnShowMore /> : ``}
      </section>

      <footer className="page-footer">
        <Logo/>
        <Copyright/>
      </footer>
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  mainFilms: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired,
  // itemGenres: PropTypes.array.isRequired,
  films: PropTypes.array.isRequired,
  countShowFilm: PropTypes.number.isRequired,
  setGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state)=>({
  countShowFilm: state.countShowFilm, // взято из reduce
  selectedGenre: state.genre, // взято из reduce action.payload
  films: state.films, // взято из reduce
  genreFilms: state.genreFilms,
  isDataLoaded: state.isDataLoaded
});

// если передать setGenre на клик меню жанр, то в aaction в payload попадет название жанра
const mapDispatchToProps = (dispatch)=>({
  setGenre(genre) {
    dispatch(ActionCreator.setGenre(genre)); // genre это payload дополнитеьная инфа
  },
  onLoadData() {
    dispatch(fetchMoviesList());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
