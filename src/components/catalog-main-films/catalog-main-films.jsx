import React from "react";
import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";
import {connect} from 'react-redux';


const CatalogMainFilms = (props)=>{
  const {updateData, films} = props;
  console.log(props)
  // let startFilms;
  // if(films.length > 8){
  //   startFilms = films.slice(0, 8)
  // }
  // console.log(startFilms)
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
  // mainFilms: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired
};


const mapStateToProps = (state)=>({
  countFilm: state.countFilm,
  films: state.films
});

export {CatalogMainFilms};
// здесь ничего не передаем значит диспачь не нужен
export default connect(mapStateToProps, null)(CatalogMainFilms); // connect подружит наш компонент с провайдером
