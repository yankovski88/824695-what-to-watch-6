import React from "react";
import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";
import {connect} from 'react-redux';


const CatalogMainFilms = (props)=>{
  const {updateData, films} = props;

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
        />;
      })}
    </div>
  );
};

CatalogMainFilms.propTypes = {
  mainFilms: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired
};


const mapStateToProps = (state)=>({
  films: state.films
});

export {CatalogMainFilms};
export default connect(mapStateToProps, null)(CatalogMainFilms); // connect подружит наш компонент с провайдером
