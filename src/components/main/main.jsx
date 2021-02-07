import React from "react";
import Card from "../card/card";
import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";
import Logo from "../logo/logo.jsx";
import Copyright from "../copyright/copyright.jsx";


// Теперь, используя props, добавим динамики в компоненты. Для этого в компоненте главной страницы приложения
// определите изменяемые данные — это будет название, жанр и дата выхода промо-фильма
// (того, что в шапке страницы). Получите их из props и вставьте в JSX компонента.

const Main = (props) => {
  const {films} = props;

  return <React.Fragment>
    <Card films = {films}/>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="#" className="catalog__genres-link">All genres</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Comedies</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Crime</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Documentary</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Dramas</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Horror</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Kids & Family</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Romance</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Sci-Fi</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Thrillers</a>
          </li>
        </ul>

        <div className="catalog__movies-list">

          {films.map((film)=>{
            return <SmallCard
              key = {film.id}
              videoLink = {film.videoLink}
              name = {film.name}
              posterImage = {film.posterImage}
            />;
          })}


        </div>

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
  films: PropTypes.array.isRequired,
};

export default Main;
