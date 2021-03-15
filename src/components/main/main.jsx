import React from "react";
import Card from "../card/card";
import PropTypes from "prop-types";
import Logo from "../logo/logo.jsx";
import Copyright from "../copyright/copyright.jsx";
import CatalogMainFilms from "../catalog-main-films/catalog-main-films";
import ListGenres from "../list-genres/list-genres";
import BtnShowMore from "../btn-show-more/btn-show-more";
import {connect} from "react-redux";


const Main = (props) => {
  const {mainFilms, updateData, itemGenres, films, countShowFilm} = props;

  return <React.Fragment>
    <Card mainFilms = {mainFilms}/>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <ListGenres itemGenres={itemGenres} updateData={updateData}/>
        <CatalogMainFilms updateData={updateData}/>

        {films.length > countShowFilm ? <BtnShowMore /> : ``}
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
  itemGenres: PropTypes.array.isRequired,
  films: PropTypes.array.isRequired,
  countShowFilm: PropTypes.number.isRequired,
};

const mapStateToProps = (state)=>({
  countShowFilm: state.countShowFilm,
  films: state.films,
});

export {Main};
export default connect(mapStateToProps, null)(Main);
