import React from "react";
import PropTypes from "prop-types";


const VideoPlayer = (props)=>{
  const {activeFilm} = props;
  return (
    <video muted autoPlay src={activeFilm.previewVideoLink} alt={activeFilm.name} width="280" height="175"></video>
  );
};

export default VideoPlayer;

VideoPlayer.propTypes = {
  activeFilm: PropTypes.object.isRequired,
};


