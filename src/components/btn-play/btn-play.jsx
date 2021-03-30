import React from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const BtnPlay = (props) => {
  const {filmById, filmPromo} = props
  console.log(props)
  const history = useHistory();

  let activeFilm;
  if(Object.keys(filmById).length === 0){
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
  anyFilm: PropTypes.object.isRequired,
};

export {BtnPlay};

const mapStateToProps = (state)=>({
  filmPromo: state.filmPromo,
  filmById: state.filmById,
});


export default connect(mapStateToProps, null)(BtnPlay)
