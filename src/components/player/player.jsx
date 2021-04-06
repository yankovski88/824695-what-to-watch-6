import React from "react";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {fetchFilmById} from "../../store/api-actions";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {formatTime} from "../../utils/utils";
import Spinner from "../spinner/spinner";
import {
  getAllFilmsSelect,
  getFilmByIdSelect,
  getIsDataLoadedSelect,
  getIsFilmLoadedSelect
} from "../../store/all-movies/selectors";
import {moviePropTypes} from "../../prop-types";


const Player = (props) => {
  const {loadFilmById, filmById, isFilmLoaded} = props;
  const [isPlaying, setPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);

  const videoRef = React.useRef();
  const history = useHistory();
  const params = useParams();

  const timeElapsed = duration - currentTime;

  const intervalID = React.useRef();

  React.useEffect(() => {
    intervalID.current = setInterval(() => {
      if (isPlaying) {
        if (videoRef.current !== null) {
          setCurrentTime(videoRef.current.currentTime);
        }
      }
    }, 100);
    return ()=>{
      clearInterval(intervalID);
    };
  }, [isPlaying]);


  // запускаем хук useEffect он запускается каждый раз когда открывается страница, он следит за флагом isDataLoaded
  React.useEffect(() => {
    if (params.id) { // если флаг false значит сайт запускается первый раз
      loadFilmById(params.id); // тогда вызываем функцию которая делает запрос на сервер, отдает данные в dispatch, а тот меняет store
    }
  }, [params.id]); // useEffect сказали следи за этим флагом если он изменится, то делай запрос

  const hendlePlayPlayer = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  const hendleFullScreen = () => {
    videoRef.current.requestFullscreen();
  };
  const hendleExit = () => {
    setPlaying(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    history.goBack();
  };

  const progress = currentTime / duration * 100;


  return (!isFilmLoaded ? <Spinner /> : <div className="player">
    <video ref={videoRef}
      src={filmById.videoLink}
      className="player__video"
      poster={filmById.posterImage}
      onDurationChange={() => setDuration(videoRef.current.duration)}

    ></video>

    <button onClick={hendleExit} type="button" className="player__exit">Exit</button>

    <div className="player__controls">

      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value={progress.toString()} max="100"></progress>
          <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
        </div>
        <div className="player__time-value">{formatTime(timeElapsed)}</div>
      </div>

      <div className="player__controls-row">

        {!isPlaying ? <button
          onClick={hendlePlayPlayer}
          type="button" className="player__play">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button> :
          <button
            onClick={hendlePlayPlayer}
            type="button" className="player__play">
            <svg viewBox="0 0 14 21" width="14" height="21">
              <use xlinkHref="#pause"></use>
            </svg>
            <span>Pause</span>
          </button>}

        <div className="player__name">Transpotting</div>

        <button
          onClick={hendleFullScreen}
          type="button"
          className="player__full-screen">
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  </div>
  );
};

Player.propTypes = {
  loadFilmById: PropTypes.func.isRequired,
  filmById: PropTypes.oneOfType([
    moviePropTypes,
    PropTypes.shape({}).isRequired,
  ]).isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
};


const mapStateToProps = (state) => ({
  films: getAllFilmsSelect(state), // взято из reduce
  filmById: getFilmByIdSelect(state),
  isFilmLoaded: getIsFilmLoadedSelect(state),
  isDataLoaded: getIsDataLoadedSelect(state),
});

// если передать setGenre на клик меню жанр, то в aaction в payload попадет название жанра
const mapDispatchToProps = (dispatch) => ({
  loadFilmById(id) {
    dispatch(fetchFilmById(id));
  },
});

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
