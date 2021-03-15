import React from "react";
import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getActiveFilms} from "../../utils/utils";


const CatalogMainFilms = (props) => {
  const {updateData, films, countShowFilm} = props;

  const activeFilms = getActiveFilms(films, countShowFilm);

  return (
    <div className="catalog__movies-list">
      {activeFilms.map((mainFilm) => {
        return <SmallCard
          mainFilm={mainFilm}
          key={mainFilm.id}
          videoLink={mainFilm.videoLink}
          name={mainFilm.name}
          posterImage={mainFilm.posterImage}
          id={mainFilm.id}
          updateData={updateData}
        />;
      })}
    </div>
  );
};

CatalogMainFilms.propTypes = {
  updateData: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired
};


const mapStateToProps = (state) => ({
  countShowFilm: state.countShowFilm,
  films: state.films
});

export {CatalogMainFilms};
// здесь ничего не передаем значит диспачь не нужен
export default connect(mapStateToProps, null)(CatalogMainFilms); // connect подружит наш компонент с провайдером
