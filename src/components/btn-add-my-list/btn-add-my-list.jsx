import React from "react";
import {useParams} from "react-router-dom";

const BtnAddMyList = (props) => {
  const {loadFavorite, filmById} = props;
  console.log(props)
  const {id} = useParams();
// const a = 1

 const hendleOnClickFilmFavorite =(evt)=>{
   evt.preventDefault();
   loadFavorite(1, 1)
 }
  // onClick={hendleLoadFavorite(id, 1)}
  return (
    <button  className="btn btn--list movie-card__button" type="button" onClick={hendleOnClickFilmFavorite}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );
};

export default BtnAddMyList;
