import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../videoPlayer/video-player";


const SmallCard = (props) => {
  const {activeFilm, updateData} = props; // posterImage, name, id,
  const [filmActive, setFilmActive] = React.useState({});

  const [isVideo, setVideo] = React.useState(false);
  let timeOutId = null; // флаг, таймер не включен


  const _handleHoverCard = () => {
    if (timeOutId !== null) {
      clearTimeout(timeOutId);
    }

    // через 1 секунду setVideo сделайся true и включись
    timeOutId = setTimeout(
        () => {
          console.log(isVideo)
          console.log(`вкл`)
          setVideo(true);
        }, 1000
    );
    setFilmActive(activeFilm) // выбрали активный фильм

  };

  const _handleHoverOutCard = () => {
    clearTimeout(timeOutId); // удалить натиканное время таймера
    timeOutId = null; // таймер сделать null
    setVideo(false); // активное видео убрать
    setFilmActive({}) // объект активного видео сделать пустым
  };

console.log(filmActive)
  // useEffect обнуляет таймер если он был запущен
  React.useEffect(() => {
    return () => clearTimeout(timeOutId);
  });

console.log(activeFilm)
  return (
    <>

      <article className="small-movie-card catalog__movies-card"
        // id={activeFilm.id}
        onMouseOver={_handleHoverCard}
        onMouseLeave={_handleHoverOutCard}

        onClick={() => {
          updateData(activeFilm);
        }}
      >
        <Link to={`/films/${activeFilm.id}`}>
        <div className="small-movie-card__image">
          {isVideo ? <VideoPlayer activeFilm={activeFilm} id={activeFilm.id}/> : <img src={activeFilm.posterImage} alt={activeFilm.name} width="280" height="175"/>}
        </div>
        </Link>

        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${activeFilm.id}`}>{activeFilm.name}</Link>
        </h3>
      </article>
    </>
  );
};

SmallCard.propTypes = {
  activeFilm: PropTypes.object.isRequired,
  // posterImage: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
  updateData: PropTypes.func.isRequired,
  // updateFilmActive: PropTypes.func.isRequired,
};


export default SmallCard;

