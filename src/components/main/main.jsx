import React from "react";
import Card from "../card/card";
import PropTypes from "prop-types";
import Logo from "../logo/logo.jsx";
import Copyright from "../copyright/copyright.jsx";
import CatalogMainFilms from "../catalog-main-films/catalog-main-films";
import ListGenres from "../list-genres/list-genres";
import {mainFilms} from "../../store/reducer";
import {ActionCreator} from "../../store/action";

import {connect} from 'react-redux';
import {ActionType} from "../../store/action";


const Main = (props) => {
  const {mainFilms, updateData, itemGenres, } = props; // itemLinkGenres

  return <React.Fragment>
    <Card mainFilms = {mainFilms}/>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ListGenres itemGenres={itemGenres} mainFilms={mainFilms} updateData={updateData}/>


        {/*<ul className="catalog__genres-list">*/}
        {/*  <li className="catalog__genres-item catalog__genres-item--active">*/}
        {/*    <a href="#" className="catalog__genres-link">All genres</a>*/}
        {/*  </li>*/}
        {/*  <li className="catalog__genres-item">*/}
        {/*    <a href="#" className="catalog__genres-link">Comedies</a>*/}
        {/*  </li>*/}
        {/*  <li className="catalog__genres-item">*/}
        {/*    <a href="#" className="catalog__genres-link">Crime</a>*/}
        {/*  </li>*/}
        {/*  <li className="catalog__genres-item">*/}
        {/*    <a href="#" className="catalog__genres-link">Documentary</a>*/}
        {/*  </li>*/}
        {/*  <li className="catalog__genres-item">*/}
        {/*    <a href="#" className="catalog__genres-link">Dramas</a>*/}
        {/*  </li>*/}
        {/*  <li className="catalog__genres-item">*/}
        {/*    <a href="#" className="catalog__genres-link">Horror</a>*/}
        {/*  </li>*/}
        {/*  <li className="catalog__genres-item">*/}
        {/*    <a href="#" className="catalog__genres-link">Kids & Family</a>*/}
        {/*  </li>*/}
        {/*  <li className="catalog__genres-item">*/}
        {/*    <a href="#" className="catalog__genres-link">Romance</a>*/}
        {/*  </li>*/}
        {/*  <li className="catalog__genres-item">*/}
        {/*    <a href="#" className="catalog__genres-link">Sci-Fi</a>*/}
        {/*  </li>*/}
        {/*  <li className="catalog__genres-item">*/}
        {/*    <a href="#" className="catalog__genres-link">Thrillers</a>*/}
        {/*  </li>*/}
        {/*</ul>*/}

        <CatalogMainFilms mainFilms={mainFilms} updateData={updateData}/>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
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
};

// // код который достает пропс с фильмами
// const mapStateToProps = (state)=>({
//   FILMS: state.mainFilms,
// })
//
// // код который получает диспач чтобы поменять пропсы
// const mapDispatchToProps = (dispatch)=>({
//   onUserAnswer(){
//     dispatch(ActionCreator.all())
//   }
// })

export default Main;
// export default connect(mapStateToProps, mapDispatchToProps)(Main)
