import React from "react";
import GenresItem from "../item/genres-item";
import PropTypes from "prop-types";

const ListGenres = (props)=>{
  const {itemGenres, setGenre} = props;
  return (
    <>
      <ul className="catalog__genres-list">
        {itemGenres.map((itemGenre)=>{
          return (
            <GenresItem key={itemGenre} itemGenre={itemGenre} setGenre={setGenre}/>
          );
        })}
      </ul>
    </>
  );
};

ListGenres.propTypes = {
  // updateData: PropTypes.func.isRequired,
  itemGenres: PropTypes.array.isRequired,
  setGenre: PropTypes.func.isRequired,
};

export default ListGenres;
