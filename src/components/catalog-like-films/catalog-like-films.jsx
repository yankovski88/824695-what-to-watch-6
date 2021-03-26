import React from "react";
import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";
// import {getFilm} from "../../utils/utils";
import {connect} from "react-redux";


const CatalogLikeFilms = (props)=>{
  const {updateData, likeFilms} = props; // likeFilms,
  let activeFilms = likeFilms;
  // const [filmActive, setFilmActive] = React.useState(``);

  // const updateFilmActive = (value) => {
  //   setFilmActive(value);
  // };

  // getFilm(filmActive, likeFilms);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__movies-list">
        {activeFilms.map((activeFilm)=> {
          return <SmallCard
            activeFilm={activeFilm}
            key={activeFilm.id}
            // videoLink = {likeFilm.videoLink}
            // name = {likeFilm.name}
            // posterImage = {likeFilm.posterImage}
            // id = {likeFilm.id}
            updateData={updateData}
            // updateFilmActive={updateFilmActive}

          />;
        })}
      </div>
    </section>
  );
};

CatalogLikeFilms.propTypes = {
  // likeFilms: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired,
};

const mapStateToProps = (state)=>({
  // likeFilms: state.likeFilms,
});

export {CatalogLikeFilms};

export default connect(mapStateToProps, null)(CatalogLikeFilms);
