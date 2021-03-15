import React from "react";
import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";
import {connect} from 'react-redux';


const CatalogMainFilms = (props)=>{
  const {updateData, films, countShowFilm} = props;
  console.log(props)
  const arr = [];

  if(films.length > 8){
for(let i = 0; i < countShowFilm; i++){
arr.push(films[i])
}
  } else {
    for (let item of films){
      arr.push(item)
    }

  }

  return (
    <div className="catalog__movies-list">
      {arr.map((mainFilm)=> {
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
  countShowFilm: state.countShowFilm,
  films: state.films
});

export {CatalogMainFilms};
// здесь ничего не передаем значит диспачь не нужен
export default connect(mapStateToProps, null)(CatalogMainFilms); // connect подружит наш компонент с провайдером
