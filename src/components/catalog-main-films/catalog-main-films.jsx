import React from "react";
import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getActiveFilms} from "../../utils/utils";
import {moviePropTypes} from "../../prop-types";


const CatalogMainFilms = (props) => {
  const {updateData, films, countShowFilm, genreFilms} = props;

  // код который решает на основе массива с жанром сколько показать фильмов
  let activeFilms;
  if (!genreFilms || genreFilms.length === 0) { // если жанры ни разу не каликались, то массив будет underfind
    activeFilms = getActiveFilms(films, countShowFilm); // значит передадим в него весь массив all genre
  } else if (genreFilms) {
    activeFilms = getActiveFilms(genreFilms, countShowFilm);
  }

  return (
    <div className="catalog__movies-list">
      {activeFilms.map((activeFilm) => {
        return <SmallCard
          key={activeFilm.id}
          activeFilm={activeFilm}
          updateData={updateData}
        />;
      })}
    </div>
  );
};

CatalogMainFilms.propTypes = {
  updateData: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(moviePropTypes).isRequired,
  genreFilms: PropTypes.arrayOf(moviePropTypes).isRequired,
  countShowFilm: PropTypes.number.isRequired,
};


const mapStateToProps = ({ALL_MOVIES}) => ({
  countShowFilm: ALL_MOVIES.countShowFilm,
  films: ALL_MOVIES.films,
  genreFilms: ALL_MOVIES.genreFilms,
});

export {CatalogMainFilms};
// здесь ничего не передаем значит диспачь не нужен
export default connect(mapStateToProps, null)(CatalogMainFilms); // connect подружит наш компонент с провайдером
