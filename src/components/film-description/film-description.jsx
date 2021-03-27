import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Spinner from "../spinner/spinner";


const FilmDescription = (props)=>{
  const {filmById} = props;

  return (
    Object.keys(filmById).length !== 0 ? <div className="movie-card__text">
      <p>{filmById.description}</p>

      <p className="movie-card__director"><strong>Director: {filmById.director}</strong></p>

      <p className="movie-card__starring"><strong>Starring:&nbsp;
        {
          filmById.starring.map((item, index)=>{
            return `${item}${index + 1 === filmById.starring.length ? `` : `, `}`;
          })
        } and other</strong></p>
    </div> : <Spinner/>
  );
};

FilmDescription.propTypes = {
  filmById: PropTypes.object.isRequired
};

const mapStateToProps = (state)=>({
  filmById: state.filmById,
});


export {FilmDescription};

export default connect(mapStateToProps, null)(FilmDescription);
