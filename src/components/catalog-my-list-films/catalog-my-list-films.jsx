import React from "react";
import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Spinner from "../spinner/spinner";
import {fetchMoviesList} from "../../store/api-actions";
import {moviePropTypes} from "../../prop-types";
import {getAllFilmsSelect, getIsDataLoadedSelect} from "../../store/all-movies/selectors";


const CatalogMyListFilms = (props) => {
  const {updateData, loadMoviesList, isDataLoaded, films} = props;

  React.useEffect(
      () => {
        loadMoviesList();
      }, []);

  const favoriteFilms = [];
  for (const film of films) {
    if (film.isFavorite === true) {
      favoriteFilms.push(film);
    }
  }


  return (!isDataLoaded ? <Spinner/> : <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>

    <div className="catalog__movies-list">
      {favoriteFilms.map((myListFilm) => {
        return <SmallCard
          key={myListFilm.id}
          activeFilm={myListFilm}
          updateData={updateData}
        />;
      })}
    </div>
  </section>

  );
};

CatalogMyListFilms.propTypes = {
  films: PropTypes.arrayOf(moviePropTypes).isRequired,
  updateData: PropTypes.func.isRequired,
  loadMoviesList: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: getIsDataLoadedSelect(state),
  films: getAllFilmsSelect(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadMoviesList() { // когда вызовится эта функция, то в dispatch попадает результат функции по запросу на сервер
    dispatch(fetchMoviesList());
  },
});

export {CatalogMyListFilms};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogMyListFilms);
