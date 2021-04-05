import {ALL_GENRES, EMAIL_REGEX, NUMBER_FILM} from "../constants/constants";


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


export const getGenreFilms = (typeGenre, itemFilms, id)=>{
  const films = itemFilms.slice();
  if (typeGenre === ALL_GENRES) {
    return films;
  } else {
    const genreFilms = [];
    for (const item of films) {
      if (item.genre === typeGenre && item.id !== +id) {
        genreFilms.push(item);
      }
    }
    return genreFilms;
  }
};

// функция которая возвращает массив фильмов для рендера на основании числа фильмов сколько надо
export const getActiveFilms = (films, countShowFilm)=>{
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
  const genres = [ALL_GENRES];
  for (const item of films) {
    genres.push(item.genre);
  }
  return Array.from(new Set(genres));
};


// написать функцию которая из массива с фильмами по id найдет жанр
export const getGenreById = (idFilm, itemFilms) => {
  const films = itemFilms.slice();

  let genre = `All genre`;
  for (const item of films) {
    if (+idFilm === item.id) {
      genre = item.genre;
    }
  }
  return genre;
};

export const formatTime = (seconds) => {
  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;

  const fullHours = Math.floor(seconds / SECONDS_IN_HOUR);
  const remainingSecondsAfterHour = seconds % SECONDS_IN_HOUR;
  const fullMinutes = Math.floor(remainingSecondsAfterHour / SECONDS_IN_MINUTE);
  const fullSeconds = Math.floor(remainingSecondsAfterHour % SECONDS_IN_MINUTE);

  return `${fullHours.toString().padStart(2, `0`)}:${fullMinutes.toString().padStart(2, `0`)}:${fullSeconds.toString().padStart(2, `0`)}`;
};


export const isValidEmail = (email) => EMAIL_REGEX.test(email);


// метод Адаптер который адоптирует данные от сервера на читаемые данные для клиента
export const adaptToClient = (film) => { // получаем объект с неугодными нам полями изменили названия полей, удалили старые серверные и вернули отредоктированный объект

  const adaptedFilm = Object.assign(
      {},
      film,
      {
      // в basePrice записали, то что пришло с сервера, плюс можно модифицировать данные как с датой
        backgroundColor: film.background_color,
        backgroundImage: film.background_image,
        isFavorite: film.is_favorite,
        posterImage: film.poster_image,
        previewImage: film.preview_image,
        previewVideoLink: film.preview_video_link,
        runTime: film.run_time,
        scoresCount: film.scores_count,
        videoLink: film.video_link,
      }
  );

  // Ненужные ключи мы удаляем
  delete adaptedFilm.background_color;
  delete adaptedFilm.background_image;
  delete adaptedFilm.is_favorite;
  delete adaptedFilm.poster_image;
  delete adaptedFilm.preview_image;
  delete adaptedFilm.preview_video_link;
  delete adaptedFilm.run_time;
  delete adaptedFilm.scores_count;
  delete adaptedFilm.video_link;

  return adaptedFilm;
};

// метод Адаптер который адоптирует данные от сервера на читаемые данные для клиента
export const adaptToClientUser = (user) => { // получаем объект с неугодными нам полями изменили названия полей, удалили старые серверные и вернули отредоктированный объект

  const adaptedUser = Object.assign(
      {},
      user,
      {
      // в basePrice записали, то что пришло с сервера, плюс можно модифицировать данные как с датой
        avatarUrl: user.avatar_url,
      }
  );

  // Ненужные ключи мы удаляем
  delete adaptedUser.avatar_url;


  return adaptedUser;
};
