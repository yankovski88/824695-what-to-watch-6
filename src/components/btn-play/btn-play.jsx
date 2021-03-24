import React from "react";
// import {useHistory} from "react-router-dom";
// import PropTypes from "prop-types";

const BtnPlay = () => {
  // const {anyFilm} = props
  // const history = useHistory();


  return (
    <button className="btn btn--play movie-card__button" type="button"
      // onClick={() => history.push(`/films/${anyFilm.id}/player`)}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
};

// BtnPlay.propTypes = {
//   anyFilm: PropTypes.object.isRequired,
// };

export default BtnPlay;
