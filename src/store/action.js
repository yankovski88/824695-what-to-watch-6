// определяем действия
export const ActionType = {
  GENRE: `main/genre`,
  MORE_FILM: `MORE_FILM`,
  GET_ALL_FILMS: `main/getAllFilms`,
  LIKE_FILMS: `card/like-films` // создал тип экшина по которому сделаем функцию по его возврату
};

// создаем объект функция которые возвращают экшин
export const ActionCreator = {
  setGenre: (genre)=>({
    type: ActionType.GENRE, // тип экшина
    payload: genre, // payload это полезная нагрузка которую появляется при клике от пользователя
  }),
  moreFilm: ()=>({
    type: ActionType.MORE_FILM
  }),
  getAllFilms: (data) => ({
    type: ActionType.GET_ALL_FILMS,
    payload: data
  }),
  likeFilms: (data)=>({ // функция для похожих фильмов
    type: ActionType.LIKE_FILMS,
    payload: data
  })

};
