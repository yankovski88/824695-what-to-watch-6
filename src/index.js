import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {getFilmData} from "./components/mock/film";
import {reviews} from "./components/mock/reviews";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';



const store = createStore(
  reducer,
  composeWithDevTools()
);

const firstMainFilms = getFilmData().slice(0, 8);

const myListFilms = firstMainFilms.slice(0, 2);
const movie = firstMainFilms[0];


const likeFilms = getFilmData().slice(9, 13);


export const mainFilms = [...firstMainFilms, ...likeFilms];

const itemGenres = [`Comedy`, `Boevic`, `All`]

// // import mainFilms from "../../index"
// const filmComedys = [];
// for (const item of mainFilms){
//   if(item.genre === `Comedy`){
//     filmComedys.push(item)
//   }
// }
// console.log(filmComedys)
//
// console.log(mainFilms)
// console.log(`sdfsdf`)
//
// const ActionType = {
// // Определяем действия
//   COMEDY : `Comedy`,
//   BOEVIC : `Boevic`,
//   ALL : mainFilms,
// }


ReactDom.render(
  <Provider store={store}>
  <App mainFilms = {mainFilms}
       myListFilms = {myListFilms}
       likeFilms={likeFilms}
       reviews={reviews}
       movie={movie}
       itemGenres={itemGenres}
  />
  </Provider>,

  document.querySelector(`#root`)
);


