import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../videoPlayer/video-player";


const SmallCard = (props) => {
  const {posterImage, name, id, updateData} = props; // mainFilms, updateFilmActive
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
        onMouseEnter={_handleHoverCard}
        onMouseLeave={_handleHoverOutCard}

        onClick={() => {
          updateData(id);
        }}
      >

        <div className="small-movie-card__image">
          {isVideo ? <VideoPlayer id={id}/> : <img src={posterImage} alt={name} width="280" height="175"/>}
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
        </h3>
      </article>
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

