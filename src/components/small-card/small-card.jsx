import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../videoPlayer/video-player";
import {connect} from "react-redux";
import {getFilmByIdSelect} from "../../store/all-movies/selectors";
import {moviePropTypes} from "../../prop-types";


const SmallCard = (props) => {
  const {activeFilm, updateData} = props;
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
  activeFilm: PropTypes.oneOfType([
    moviePropTypes,
    PropTypes.shape({}).isRequired,
  ]).isRequired,
  updateData: PropTypes.func.isRequired,
};

const mapStateToProps = (state)=>({
  filmById: getFilmByIdSelect(state),
});


export {SmallCard};
export default connect(mapStateToProps)(SmallCard);

