import React from "react";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {moviePropTypes} from "../../prop-types";
import {getFilmByIdSelect, getFilmPromoSelect} from "../../store/all-movies/selectors";
import PropTypes from "prop-types";

const BtnPlay = (props) => {
  const {filmById, filmPromo} = props;
  const history = useHistory();

  let activeFilm;
  if (Object.keys(filmById).length === 0) {
    activeFilm = filmPromo;
  } else {
    activeFilm = filmById;
  }


  return (
    <button className="btn btn--play movie-card__button" type="button"
      onClick={() => history.push(`/player/${activeFilm.id}`)}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
};

BtnPlay.propTypes = {
  filmById: PropTypes.oneOfType([
    moviePropTypes,
    PropTypes.shape({}).isRequired,
  ]).isRequired,
  filmPromo: PropTypes.oneOfType([
    moviePropTypes,
    PropTypes.shape({}).isRequired,
  ]).isRequired,
};


const mapStateToProps = (state)=>({
  filmPromo: getFilmPromoSelect(state),
  filmById: getFilmByIdSelect(state),
});

export {BtnPlay};
export default connect(mapStateToProps, null)(BtnPlay);
