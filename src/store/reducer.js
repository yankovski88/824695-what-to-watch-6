// import mainFilms from "../index.js"
// import filmComedys from "../store/action"
// import filmBoevics from "../store/action"
import {ActionType} from "../store/action"
import {getFilmData} from "../components/mock/film";


const firstMainFilms = getFilmData().slice(0, 8);

// const myListFilms = firstMainFilms.slice(0, 2);
// const movie = firstMainFilms[0];


const likeFilms = getFilmData().slice(9, 13);


export const mainFilms = [...firstMainFilms, ...likeFilms];


const initialState = {
// Определяем действия
  genreActive: `all`,
  films: mainFilms
}

// const store = windows.Redux.createStore(updateStore, 0);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.COMEDIES:
      return {
        genreActive : ActionType.COMEDIES,
        films: getGenreFilms(ActionType.COMEDIES, mainFilms)
      };

    case ActionType.ALL:
      return {
        ...initialState
        // genreActive: `All`,
        // films: mainFilms
      };
    case ActionType.BOEVIC:
      const  filmBoevics = [];
      for (const item of mainFilms){
        if(item.genre === `Boevic`){
          filmBoevics.push(item)
        }
      }
      return {
        genreActive: `Boevic`,
        films: filmBoevics
      };
  }

  return state;
};


export {reducer};



// state = updateStore(state, {type: COMEDY});
// state = updateStore(state, {type: BOEVIC});
// state = updateStore(state, {type: ALL});
//
// // Функция для обновления хранилища
// const updateStore = (state, action) => {
//   switch (action.type) {
//     case COMEDY:
//       return COMEDY
//     case BOEVIC:
//       return BOEVIC
//     default:
//       return state
//   }}


