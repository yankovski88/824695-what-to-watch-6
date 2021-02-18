import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {getFilmData} from "./components/mock/film";
import {reviews} from "./components/mock/reviews";

const mainFilms = [];
for (let i = 0; i < 8; i++) {
  mainFilms.push(getFilmData());
}

const myListFilms = mainFilms.slice(0, 2);
const movie = mainFilms[0];
// const myListFilms = [];
// for (let i = 0; i < 9; i++) {
//   myListFilms.push(getFilmData());
// }

const likeFilms = [];
for (let i = 0; i < 4; i++) {
  likeFilms.push(getFilmData());
}


ReactDom.render(
    <App mainFilms = {mainFilms} myListFilms = {myListFilms} likeFilms={likeFilms} reviews={reviews} movie={movie}/>,
    document.querySelector(`#root`)
);
