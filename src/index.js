import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {getFilmData} from "./components/mock/film";
import {reviews} from "./components/mock/reviews";

// const firstMainFilms = [];
// for (let i = 0; i < 8; i++) {
//   firstMainFilms.push(getFilmData());
// }
const firstMainFilms = getFilmData().slice(0, 8);

const myListFilms = firstMainFilms.slice(0, 2);
const movie = firstMainFilms[0];
// const myListFilms = [];
// for (let i = 0; i < 9; i++) {
//   myListFilms.push(getFilmData());
// }

// const likeFilms = [];
// for (let i = 0; i < 4; i++) {
//   likeFilms.push(getFilmData());
// }

const likeFilms = getFilmData().slice(9, 13);


const mainFilms = [...firstMainFilms, ...likeFilms];

ReactDom.render(
    <App mainFilms = {mainFilms} myListFilms = {myListFilms} likeFilms={likeFilms} reviews={reviews} movie={movie}/>,
    document.querySelector(`#root`)
);
