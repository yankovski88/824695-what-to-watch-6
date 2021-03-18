import {getRandomInRange} from "../../utils/utils";

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
// const genres = [`comedies`, `crime`, `documentary`, `dramas`, `horror`, `kids`, `romance`, `sci`, `thrillers`];
const genres = [`Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];
// `All genres`,

export const getFilmData = ()=>{
  const films = [];
  for (const item of ids) {
    films.push(
        {
          "id": item,
          "name": `The Grand Budapest Hotel ${item}`,
          "genre": genres[getRandomInRange(0, genres.length - 1)],
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
          "released": 2014,
          "isFavorite": false
        }
    );
  }
  return films;
};
//
// background_color: "#F1E9CE"
// background_image: "https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg"
// description: "Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself."
// director: "Justin Kurzel"
// genre: "Drama"
// id: 1
// is_favorite: false
// name: "Macbeth"
// poster_image: "https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg"
// preview_image: "https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg"
// preview_video_link: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"
// rating: 3.3
// released: 2015
// run_time: 113
// scores_count: 48798
// starring: (3) ["Michael Fassbender", "Marion Cotillard", "Jack Madigan"]
// video_link: "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
