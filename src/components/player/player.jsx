import React from "react";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";
import {ActionCreator} from "../../store/action";
import {fetchFilmById, fetchMoviesList} from "../../store/api-actions";
import {connect} from "react-redux";
import Error404 from "../error-404/error-404";


const Player = (props)=>{
  const {loadFilmById, isFilmFound, filmById} = props; // film,
  const videoPlayer = React.useRef();
  const playPlayer = React.useRef();
  const pause = React.useRef();
  const fullScreen = React.useRef(); // requestFullscreen()

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

  let isPlaing = false;
  const hendlePlayPlayer = ()=>{
      if(isPlaing){
        videoPlayer.current.pause();
        isPlaing = false;
      } else {
        videoPlayer.current.play();
        isPlaing = true;
      }
}
  const hendleFullScreen = ()=>{
    videoPlayer.current.requestFullscreen();
  }
  const hendleExit = ()=>{
    videoPlayer.current.pause();
    videoPlayer.current.currentTime = 0;
  }
  return (
    <div className="player">
      {/*ref={videoPlayer}*/}
      <video ref={videoPlayer}
             src={filmById.videoLink}
             className="player__video"
             poster={filmById.posterImage}
             ></video>

      <button onClick={hendleExit} type="button" className="player__exit">Exit</button>

      <div className="player__controls">

        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={style}>Toggler</div>
          </div>
          {/*filmById.runTime -*!/videoPlayer.current.currentTime =*/}
          <div className="player__time-value">{filmById.runTime}</div>
        </div>

        <div className="player__controls-row">

          <button
            onClick={hendlePlayPlayer} ref={playPlayer}
            type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button           ref={fullScreen}
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

const mapStateToProps = (state)=>({
  films: state.films, // взято из reduce
  isFilmFound: state.isFilmFound,
  filmById: state.filmById,

  isDataLoaded: state.isDataLoaded,
});

// если передать setGenre на клик меню жанр, то в aaction в payload попадет название жанра
const mapDispatchToProps = (dispatch)=>({
  loadFilmById(id) {
    dispatch(fetchFilmById(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Player)
