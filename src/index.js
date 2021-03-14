import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import {getFilmData} from "./components/mock/film";
import {reviews} from "./components/mock/reviews";
import {createStore} from 'redux'; // создаем хранилище
import {Provider} from 'react-redux'; // соединяем храниище и react
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';


// 1. создал reducer принимать значение action и выводит новый массив фильмов
// 2. создал action который может приходить
// 3. создал store это хранилище
// 4. нужно создать createAction научим все компоненты которые оборачивает Provider обращаться к store

// создали stare хранилище
const store = createStore(
  reducer, // функция которая обновляет хранилище по action
  composeWithDevTools() // передали инструменты разработчика
);

console.log(store.getState());

const firstMainFilms = getFilmData().slice(0, 8);

const myListFilms = firstMainFilms.slice(0, 2);
const movie = firstMainFilms[0];


const likeFilms = getFilmData().slice(9, 13);


export const mainFilms = [...firstMainFilms, ...likeFilms]; // хранилище всех фильмов
// [`All genres`, `Comedy`, `Boevic`, ]
const itemGenres = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`]
// const itemLinkGenres = [`all`, `comedies`, `crime`, `documentary`, `dramas`, `horror`, `kids`, `romance`, `sci`, `thrillers`];

// `ALL GENRES`, `COMEDIES`, `CRIME`, `DOCUMENTARY`, `DRAMAS`, `HORROR`, `KIDS & FAMILY`, `ROMANCE`, `SCI-FI`, `THRILLERS`
export const ActionType = {
// Определяем действия
  COMEDY : `COMEDY`,
  BOEVIC : `BOEVIC`,
  ALL : `ALL`,
}

const COMEDY = `COMEDY`
// Функция для обновления хранилища
const updateStore = (state, action) => {
  // console.log(state, action);
  // Код функции
  switch (action.type){
    case COMEDY:
      state = state + 1
      console.log(`state`)
      return state
    // case BOEVIC:
    //   state = mainFilms[1]
    // case ALL:
    //   state = mainFilms[2]
  }
}
// updateStore(state, COMEDY)
// console.log(updateStore(state, COMEDY))

const createStore2 = (reducer, initialState) => {
  return {
    _state: initialState,

    dispatch(action) {
      this._state = reducer(this._state, action);
    },

    getState() {
      return this._state;
    }
  }
}

const state = createStore2(updateStore, 0);


const updateHeader = (a) => {
  document.querySelector(`#current-value`)
    .textContent = a.toString();
}

console.log(state)
ReactDom.render(
  // обернули все приложение, теперь есть доступ к хранилищу
  <Provider store={store}>
    <h1 id="current-value" onClick={()=>{
      state.dispatch({type: COMEDY});
      // state = updateStore(state, {type: COMEDY})
      updateHeader(state.getState());

    }}>{state.getState()}</h1>

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


