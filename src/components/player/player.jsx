import React from "react";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {ActionCreator} from "../../store/action";
import {fetchFilmById, fetchMoviesList} from "../../store/api-actions";
import {connect} from "react-redux";
import Error404 from "../error-404/error-404";
import {useHistory} from "react-router-dom";
import {formatTime} from "../../utils/utils";


const Player = (props) => {
  const {loadFilmById, isFilmFound, filmById} = props; // film,
  const [isPlaying, setPlaing] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);

  const timeElapsed = duration - currentTime;
  // React.useEffect(() => {
  //   if (!isMovieLoaded) {
  //     onLoadMovie(currentMovieId);
  //   }
  // }, [currentMovieId, onLoadMovie, isMovieLoaded]);

  React.useEffect(() => {
    setInterval(() => {
      if (isPlaying) {
        setCurrentTime(videoRef.current.currentTime);
      }
    }, 100);
  }, [isPlaying]);

  // if (!isMovieLoaded) {
  //   return <Spinner />;
  // }

  // const [hour, setHour] = React.useState(0);
  // const [minute, setMinute] = React.useState(0);
  // const [second, setSecond] = React.useState(0);
  //
  // // let timeOutId = null; // флаг, таймер не включен


  // React.useEffect(() => {
  //   // timeOutId =
  //     setInterval(() => {
  //     let time = videoRef.current.duration - videoRef.current.currentTime;
  //     let hour = time % 3600;
  //     let minute = (time - hour * 3600) % 60;
  //     let second = Math.round(time - hour * 3600 - minute * 60)
  //     // let hour1;
  //     // let minute1;
  //     // let second1;
  //     // if (time / 60 >= 60) {
  //     //   hour1 = Math.round(time / 60 / 60)
  //     //   minute1 = Math.round(time / 60 / 60 - (hour1 * 60))
  //     //   second1 = Math.round(time - (hour1 * 60) - (minute1 * 60))
  //     // } else if (time / 60 < 60) {
  //     //   hour1 = 0
  //     //   minute1 = Math.round(time / 60)
  //     //   second1 = Math.round(time - (minute1 * 60))
  //     // }
  //     // else if (time < 60) {
  //     //   hour1 = 0;
  //     //   minute1 = 0;
  //     //   second1 = time;
  //     // }
  //     setHour(hour);
  //     setMinute(minute);
  //     setSecond(second);
  //   }, 1000)
  // }, [])

  const videoRef = React.useRef();
  const playPlayer = React.useRef();
  const pause = React.useRef();
  const fullScreen = React.useRef(); // requestFullscreen()
  const history = useHistory();
  const params = useParams();

  // запускаем хук useEffect он запускается каждый раз когда открывается страница, он следит за флагом isDataLoaded
  React.useEffect(() => {
    if (params.id) { // если флаг false значит сайт запускается первый раз
      loadFilmById(params.id); // тогда вызываем функцию которая делает запрос на сервер, отдает данные в dispatch, а тот меняет store
    }
  }, [params.id]); // useEffect сказали следи за этим флагом если он изменится, то делай запрос


  if (!isFilmFound) {
    return (<Error404/>);
  }

  const style = {
    left: `30%`
  };

  const hendlePlayPlayer = () => {
    if (isPlaying) {
      // if (timeOutId !== null) {
      //   clearInterval(timeOutId);
      // }

      videoRef.current.pause();
      setPlaing(false)
    } else {
      videoRef.current.play();
      setPlaing(true)
    }
  }
  const hendleFullScreen = () => {
    videoRef.current.requestFullscreen();
  }
  const hendleExit = () => {
    // clearTimeout(timeOutId); // удалить натиканное время таймера
    // timeOutId = null; // таймер сделать null

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    history.goBack()
  }

  // const progressUpdate = () => {
  //   console.log(videoRef.duration)
  // }
  // videoRef.current.ontimeupdate  = progressUpdate;

  // React.useEffect(() => {
  //   return () => clearInterval(timeOutId);
  // });

  return (
    <div className="player">
      {/*ref={videoRef}*/}
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
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={style}>Toggler</div>
          </div>
          {/*videoRef.current.currentTime = filmById.runTime {`${hour}:${minute}:${second}`}*/}
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

  isDataLoaded: state.isDataLoaded,
});

// если передать setGenre на клик меню жанр, то в aaction в payload попадет название жанра
const mapDispatchToProps = (dispatch) => ({
  loadFilmById(id) {
    dispatch(fetchFilmById(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Player)
