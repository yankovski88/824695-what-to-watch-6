import {ALL_GENRES, NUMBER_FILM} from "../constants/constants";


export const getTimeMovie = (timeMovie)=>{
  const MINUTES_IN_HOUR = 60;
  if (timeMovie / MINUTES_IN_HOUR > 1) {
    const timeHour = Math.floor(timeMovie / MINUTES_IN_HOUR);
    const timeMinute = timeMovie - MINUTES_IN_HOUR * timeHour;
    return `${timeHour}h ${timeMinute}m`;
  } else if (timeMovie / MINUTES_IN_HOUR < 1) {
    return `${0}h ${timeMovie}m`;
  }
  return ``;
};


export const getFilm = (filmActive, films)=>{
  let filmEnter = {};
  for (const film of films) {
    if (film.id === filmActive) {
      filmEnter = film;
    }
  }
  return filmEnter;
};


export const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getGenreFilms = (typeGenre, itemFilms)=>{
  const films = itemFilms.slice();
  if (typeGenre === ALL_GENRES) {
    return films;
  } else {
    const genreFilms = [];
    for (const item of films) {
      if (item.genre === typeGenre) {
        genreFilms.push(item);
      }
    }
    return genreFilms;
  }
};

// функция которая возвращает массив фильмов для рендера на основании числа фильмов сколько надо
export const getActiveFilms = (films, countShowFilm)=>{
  console.log(films)
  let activeFilms;
  if (films.length > NUMBER_FILM) {
    activeFilms = films.slice(0, countShowFilm);
  } else {
    activeFilms = films;
  }
  return activeFilms;
};


// функция которая получает массив фильмов, а выводит все уникальный жанры для меню
export const getUniqueGenres = (films)=>{
  const genres = [ALL_GENRES,];
  for(const item of films){
    genres.push(item.genre)
  }
  return Array.from(new Set(genres));
}

// // функция которая возвраещь массив фильмов для рендера на основании числа фильмов сколько надо
// export const getActiveFilms = (films, countShowFilm)=>{
//   const activeFilms = [];
//
//   if (films.length > NUMBER_FILM) {
//     for (let i = 0; i < countShowFilm; i++) {
//       activeFilms.push(films[i]);
//     }
//   } else {
//     for (let item of films) {
//       activeFilms.push(item);
//     }
//   }
//   return activeFilms;
// };


