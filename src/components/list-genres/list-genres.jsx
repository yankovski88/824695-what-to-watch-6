import React from "react";
import GenresItem from "../item/genres-item";

const ListGenres = (props)=>{
  console.log(props)
  const {itemGenres} = props;
  return (
    <ul className="catalog__genres-list">
      {/*{itemGenres.map((itemGenre, index)=>{*/}
      {/*  return (*/}
      {/*    <GenresItem key={index} itemGenre={itemGenre}/>*/}
      {/*  )*/}
      {/*})}*/}
    </ul>
  )
}

export default ListGenres
