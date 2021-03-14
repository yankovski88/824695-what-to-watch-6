import React from "react";
import GenresItem from "../item/genres-item";
import CatalogMainFilms from "../catalog-main-films/catalog-main-films";
import PropTypes from "prop-types";

const ListGenres = (props)=>{
  const {itemGenres, } = props; // mainFilms, updateData
  console.log(props)

  return (
    <>
      <ul className="catalog__genres-list">
      {itemGenres.map((itemGenre, index)=>{
        return (
          <GenresItem key={index} itemGenre={itemGenre}/>
        )
      })}
    </ul>
      {/*<CatalogMainFilms mainFilms={mainFilms} updateData={updateData}/>*/}
    </>
  )
}

ListGenres.propTypes = {
  mainFilms: PropTypes.array.isRequired,
  // updateData: PropTypes.func.isRequired,
  // itemGenres: PropTypes.array.isRequired,
};

export default ListGenres
