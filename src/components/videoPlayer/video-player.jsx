import React from "react";
import {mainFilms} from "../../index";
import {getFilm} from "../../utils/utils.js"


const VideoPlayer = (props)=>{
const {id} = props
  const film = getFilm(id, mainFilms)
  return (
    <video muted autoPlay src={film.videoLink} alt={film.name} width="280" height="175"></video>
  );
};

export default VideoPlayer;
