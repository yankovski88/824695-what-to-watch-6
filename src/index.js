import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {getFilmData} from "./components/mock/film";

const films = [];
for (let i = 0; i < 20; i++) {
  films.push(getFilmData());
}

const myListFilms = [];
for (let i = 0; i < 9; i++) {
  myListFilms.push(getFilmData());
}


ReactDom.render(
    <App films = {films} myListFilms = {myListFilms}/>,
    document.querySelector(`#root`)
);
