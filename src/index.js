import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {getFilmData} from "./components/mock/film";

const films = [];
for (let i = 0; i < 20; i++) {
  films.push(getFilmData());
}

ReactDom.render(
    <App films = {films}/>,
    document.querySelector(`#root`)
);
