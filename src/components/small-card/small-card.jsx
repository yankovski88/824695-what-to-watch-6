import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../videoPlayer/video-player";


const SmallCard = (props) => {
  const {activeFilm, updateData} = props; // posterImage, name, id,
  const [filmActive, setFilmActive] = React.useState(``);


  let timeOutId = null; // флаг, таймер не включен

  const _handleHoverCard = () => {
    if (timeOutId !== null) {
      clearTimeout(timeOutId);
    }

    // не понимаю что здесь timeOutId, думаю это счетчик таймаута
    timeOutId = setTimeout(()=>{
      setFilmActive(activeFilm); // выбрали активный фильм
    }, 1000);
  };

  const _handleHoverOutCard = () => {
    clearTimeout(timeOutId); // удалить натиканное время таймера
    timeOutId = null; // таймер сделать null
    setFilmActive(``); // объект активного видео сделать пустым
  };

  // useEffect обнуляет таймер если он был запущен
  React.useEffect(() => {
    return () => clearTimeout(timeOutId);
  });

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
            {filmActive ? <VideoPlayer activeFilm={activeFilm}/> : <img src={activeFilm.posterImage} alt={activeFilm.name} width="280" height="175"/>}
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

