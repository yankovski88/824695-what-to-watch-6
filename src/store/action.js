// определяем действия
export const ActionType = {
  GENRE: `main/genre`,
  MORE_FILM: `MORE_FILM`,
}

// создаем объект функция которые возвращают экшин
export const ActionCreator = {
  setGenre: (genre)=>({
    type: ActionType.GENRE, // тип экшина
    payload: genre, // payload это полезная нагрузка которую появляется при клике от пользователя
  }),
  moreFilm: ()=>({
    type: ActionType.MORE_FILM
  })
}

// // Определяем действия
// export const ActionType = {
//   ALL: `All genres`,
//   COMEDIES: `Comedies`,
//   CRIME: `Crime`,
//   DOCUMENTARY: `Documentary`,
//   DRAMAS: `Dramas`,
//   HORROR: `Horror`,
//   KIDS: `Kids & Family`,
//   ROMANCE: `Romance`,
//   SCI: `Sci-Fi`,
//   THRILLERS: `Thrillers`,
//   MORE_FILM: `MORE_FILM`
// };
//
// // создаем объект функций которые возвращают тип экшина
// export const ActionCreator = {
//   all: ()=>({
//     type: ActionType.ALL
//   }),
//   comedies: ()=>({
//     type: ActionType.COMEDIES
//   }),
//   crime: ()=>({
//     type: ActionType.CRIME
//   }),
//   documentary: ()=>({
//     type: ActionType.DOCUMENTARY
//   }),
//   dramas: ()=>({
//     type: ActionType.DRAMAS
//   }),
//   horror: ()=>({
//     type: ActionType.HORROR
//   }),
//   kids: ()=>({
//     type: ActionType.KIDS
//   }),
//   romance: ()=>({
//     type: ActionType.ROMANCE
//   }),
//   sci: ()=>({
//     type: ActionType.SCI
//   }),
//   thrillers: ()=>({
//     type: ActionType.THRILLERS
//   }),
//   moreFilm: ()=>({
//     type: ActionType.MORE_FILM
//   })
// };
//
//
