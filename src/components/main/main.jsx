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
  const {mainFilms, updateData, itemGenres, films, countFilm} = props;
  console.log(props)
const COUNT_MAIN_FILM = 8;

  return <React.Fragment>
    <Card mainFilms = {mainFilms}/>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {/* mainFilms={mainFilms}*/}
        <ListGenres itemGenres={itemGenres} updateData={updateData}/>
        <CatalogMainFilms updateData={updateData}/>

        {countFilm > 0 ? <BtnShowMore /> : ``}
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
};

const mapStateToProps = (state)=>({
  countFilm: state.countFilm,
  films: state.films,
})
// mapDispatchToProps
export  {Main};
export default connect(mapStateToProps, null)(Main)
