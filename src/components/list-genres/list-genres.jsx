import React from "react";
import GenresItem from "../item/genres-item";
import PropTypes from "prop-types";

const ListGenres = (props)=>{
  const {itemGenres} = props;
  return (
    <>
      <ul className="catalog__genres-list">
        {itemGenres.map((itemGenre, index)=>{
          return (
            <GenresItem key={index} itemGenre={itemGenre}/>
          );
        })}
      </ul>
    </>
  );
};

ListGenres.propTypes = {
  // updateData: PropTypes.func.isRequired,
  itemGenres: PropTypes.array.isRequired,
};

export default ListGenres;
