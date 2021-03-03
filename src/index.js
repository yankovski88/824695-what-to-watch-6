import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {getFilmData} from "./components/mock/film";
import {reviews} from "./components/mock/reviews";


const firstMainFilms = getFilmData().slice(0, 8);

const myListFilms = firstMainFilms.slice(0, 2);
const movie = firstMainFilms[0];


const likeFilms = getFilmData().slice(9, 13);


export const mainFilms = [...firstMainFilms, ...likeFilms];

ReactDom.render(
    <App mainFilms = {mainFilms} myListFilms = {myListFilms} likeFilms={likeFilms} reviews={reviews} movie={movie}/>,
    document.querySelector(`#root`)
);
