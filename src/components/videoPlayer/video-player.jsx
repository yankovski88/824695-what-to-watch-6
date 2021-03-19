import React from "react";
import {getFilm} from "../../utils/utils.js";
import PropTypes from "prop-types";
import {connect} from 'react-redux';


const VideoPlayer = (props)=>{
  console.log(props)
  const {id, activeFilm, films} = props;
  // const film = getFilm(id, films);
  // debugger
  console.log(activeFilm)
  console.log(activeFilm.previewVideoLink)
  return (
    <video muted autoPlay src={activeFilm.previewVideoLink} alt={activeFilm.name} width="280" height="175"></video>
  );
};

export {VideoPlayer};

VideoPlayer.propTypes = {
  id: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired,
  activeFilm: PropTypes.object.isRequired,
};

const mapStateToProps = (state)=>({
  films: state.films,
  // genreFilms: state.genreFilms,
})

export default connect(mapStateToProps, null)(VideoPlayer)


