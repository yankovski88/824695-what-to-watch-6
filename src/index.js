import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {getFilmData} from "./components/mock/film";

const mainFilms = [];
for (let i = 0; i < 20; i++) {
  mainFilms.push(getFilmData());
}

const myListFilms = [];
for (let i = 0; i < 9; i++) {
  myListFilms.push(getFilmData());
}

const likeFilms = [];
for (let i = 0; i < 4; i++) {
  likeFilms.push(getFilmData());
}

ReactDom.render(
    <App mainFilms = {mainFilms} myListFilms = {myListFilms} likeFilms={likeFilms}/>,
    document.querySelector(`#root`)
);
