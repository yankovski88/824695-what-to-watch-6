import React from "react";
import PropTypes from "prop-types";


const Player = (props)=>{
  const {film} = props;

  const style = {
    left: `30%`
  };
  return (
    <div className="player">
      <video src={film.videoLink} className="player__video" poster={film.posterImage}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">

        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={style}>Toggler</div>
          </div>
          {/* 1:30:29*/}
          <div className="player__time-value">{film.runTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
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

export default Player;
