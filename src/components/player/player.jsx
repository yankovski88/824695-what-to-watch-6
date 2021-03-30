import React from "react";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {ActionCreator} from "../../store/action";
import {fetchFilmById, fetchMoviesList} from "../../store/api-actions";
import {connect} from "react-redux";
import Error404 from "../error-404/error-404";
import {useHistory} from "react-router-dom";
import {formatTime} from "../../utils/utils";
import Spinner from "../spinner/spinner";


const Player = (props) => {
  const {loadFilmById, isFilmFound, filmById, isFilmLoaded} = props; // film,
  const [isPlaying, setPlaing] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);

  const videoRef = React.useRef();
  const playPlayer = React.useRef();
  const pause = React.useRef();
  const fullScreen = React.useRef();
  const history = useHistory();
  const params = useParams();

  const timeElapsed = duration - currentTime;

  React.useEffect(() => {
    setInterval(() => {
      if (isPlaying) {
        if (videoRef.current !== null) {
          setCurrentTime(videoRef.current.currentTime);
        }
      }
    }, 100);
  }, [isPlaying]);


  // запускаем хук useEffect он запускается каждый раз когда открывается страница, он следит за флагом isDataLoaded
  React.useEffect(() => {
    if (params.id) { // если флаг false значит сайт запускается первый раз
      loadFilmById(params.id); // тогда вызываем функцию которая делает запрос на сервер, отдает данные в dispatch, а тот меняет store
    }
  }, [params.id]); // useEffect сказали следи за этим флагом если он изменится, то делай запрос

  if (!isFilmFound) {
    return (<Error404/>);
  }

  const hendlePlayPlayer = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setPlaing(false);
    } else {
      videoRef.current.play();
      setPlaing(true);
    }
  };
  const hendleFullScreen = () => {
    videoRef.current.requestFullscreen();
  };
  const hendleExit = () => {
    setPlaing(false);
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
          onClick={hendlePlayPlayer} ref={playPlayer}
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

        <button ref={fullScreen}
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
  film: PropTypes.object.isRequired,
};

export {Player};

const mapStateToProps = (state) => ({
  films: state.films, // взято из reduce
  isFilmFound: state.isFilmFound,
  filmById: state.filmById,
  isFilmLoaded: state.isFilmLoaded,

  isDataLoaded: state.isDataLoaded,
});

// если передать setGenre на клик меню жанр, то в aaction в payload попадет название жанра
const mapDispatchToProps = (dispatch) => ({
  loadFilmById(id) {
    dispatch(fetchFilmById(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
