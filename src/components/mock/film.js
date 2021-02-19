// import {nanoid} from "nanoid";

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
export const getFilmData = ()=>{
  const films = [];
  for (const item of ids) {
    films.push(
        {
          "id": item,
          "name": `The Grand Budapest Hotel ${item}`,
          "posterImage": `img/the-grand-budapest-hotel-poster.jpg`,
          "previewImage": `img/the-grand-budapest-hotel.jpg`,
          "backgroundImage": `img/the-grand-budapest-hotel-bg.jpg`,
          "backgroundColor": `#ffffff`,
          "videoLink": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          "previewVideoLink": `https://some-link`,
          "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
          "rating": 8.9,
          "scoresCount": 240,
          "director": `Wes Andreson`,
          "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
          "runTime": 99,
          "genre": `Comedy`,
          "released": 2014,
          "isFavorite": false
        }
    );
  }
  return films;
};


// export const getFilmData = ()=>{
//   const id = nanoid();
//   return {
//     "id": id,
//     "name": `The Grand Budapest Hotel ${id}`,
//     "posterImage": `img/the-grand-budapest-hotel-poster.jpg`,
//     "previewImage": `img/the-grand-budapest-hotel.jpg`,
//     "backgroundImage": `img/the-grand-budapest-hotel-bg.jpg`,
//     "backgroundColor": `#ffffff`,
//     "videoLink": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
//     "previewVideoLink": `https://some-link`,
//     "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
//     "rating": 8.9,
//     "scoresCount": 240,
//     "director": `Wes Andreson`,
//     "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
//     "runTime": 99,
//     "genre": `Comedy`,
//     "released": 2014,
//     "isFavorite": false
//   };
// };
