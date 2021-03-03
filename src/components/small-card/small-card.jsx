import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../videoPlayer/video-player";
import {getFilm} from "../../utils/utils.js";


const SmallCard = (props) => {
  const {posterImage, name, id, updateData, mainFilms} = props; // updateFilmActive
  const [isVideo1, setVideo1] = useState(false);

  // const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = React.useRef();

  // let timeId = null;
  //
  //
  // const _handleHoverCard1 = () => {
  //   if (timeId != null) {
  //     clearTimeout(timeId);
  //   }
  //
  //   // timeId = setTimeout(() => setVideo1(true), 2000)
  //
  //   timeId = setTimeout(
  //       () => {
  //        setVideo1(true);
  //       }, 1000
  //     );
  //   updateFilmActive(id)
  // }
  // const _handleHoverOutCard1 = () => {
  //   timeId = null;
  //   clearTimeout(timeId);
  //   setVideo1(false)
  //   updateFilmActive({})
  //   // clearTimeout(timeOutId);
  //   //   timeOutId = null;
  //   //   setVideo(false);
  // }
  // console.log(isVideo1)
  //
  // React.useEffect(() => {
  //   return () => clearTimeout(timeId);
  // });


  // useEffect(() => {
  //   audioRef.current = new Audio(src);
  //   // audioRef.current.oncanplaythrough = () => setIsLoading(false);
  //   audioRef.current.onplay = () => setIsPlaying(true);
  //   audioRef.current.onpause = () => setIsPlaying(false);
  //
  //   return () => {
  //     audioRef.current.pause();
  //     // audioRef.current.oncanplaythrough = null;
  //     audioRef.current.onplay = null;
  //     audioRef.current.onpause = null;
  //     audioRef.current = null;
  //   };
  // }, [src]);


  // const [filmActive, setFilmActive] = React.useState({});


  const [isVideo, setVideo] = React.useState(false);
  let timeOutId = null;


  const _handleHoverCard = () => {
    // setFilmActive(id)
    if (timeOutId !== null) {
      clearTimeout(timeOutId);
    }

    timeOutId = setTimeout(
      () => {
        setVideo(true);
      }, 1000
    );
  };

  const _handleHoverOutCard = () => {
    clearTimeout(timeOutId);
    timeOutId = null;
    setVideo(false);
    // setFilmActive({})
  };


  React.useEffect(() => {
    return () => clearTimeout(timeOutId);
  });


  return (
    <>
      <article className="small-movie-card catalog__movies-card"
               id={id}
               onMouseOver={_handleHoverCard}
               onMouseLeave={_handleHoverOutCard}

               onClick={() => {
                 updateData(id);
               }}

        // onMouseEnter={() => {
        //   updateFilmActive(id);
        // }}
        // // onMouseOver={_handleSetVideo1}
        // // onMouseOut={_handleOutSetVideo1}
        // onMouseLeave={() => {
        //   updateFilmActive({});
        // }}
      >

        <div className="small-movie-card__image">
          {isVideo ? <VideoPlayer id={id}/> : <img src={posterImage} alt={name} width="280" height="175"/>}
        </div>

        {/*<div className="small-movie-card__image">*/}
        {/*  <img src={posterImage} alt={name} width="280" height="175"/>*/}
        {/*</div>*/}
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
        </h3>
      </article>

      {/*<article*/}
      {/*  // onMouseEnter={_handleEnterVideo}*/}
      {/*  // onMouseLeave={_handleLeaveVideo}*/}
      {/*  onClick={_handleEnterVideo}>{isVideo1}sfsdf*/}
      {/*</article>*/}
    </>
  );
};

SmallCard.propTypes = {
  posterImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  updateData: PropTypes.func.isRequired,
  // updateFilmActive: PropTypes.func.isRequired,

};


export default SmallCard;
