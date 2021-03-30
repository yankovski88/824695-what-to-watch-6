import React from "react";
import SmallCard from "../small-card/small-card.jsx";
import PropTypes from "prop-types";
// import {getFilm} from "../../utils/utils";
import {connect} from "react-redux";
import Spinner from "../spinner/spinner";
import {fetchAllFavoriteFilms, fetchMoviesList} from "../../store/api-actions";
import {ActionCreator} from "../../store/action";
import {AuthorizationStatus} from "../../constants/constants";


const CatalogMyListFilms = (props) => {
  const {updateData, isAllFavoriteFilms, loadMoviesList, allFavoriteFilms, isDataLoaded, films, loadAllFavoriteFilms} = props;


  React.useEffect(
      () => {
        if (!isDataLoaded) {
          loadMoviesList();
        }
      }, [isDataLoaded]);

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
  films: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allFavoriteFilms: state.allFavoriteFilms,
  isDataLoaded: state.isDataLoaded,
  films: state.films,
});
const mapDispatchToProps = (dispatch) => ({
  // loadAllFavoriteFilms(favoriteFilms) {
  //   console.log(favoriteFilms)
  //   dispatch(ActionCreator.getAllFavoriteFilms(favoriteFilms))
  // },
  loadMoviesList() { // когда вызовится эта функция, то в dispatch попадает результат функции по запросу на сервер
    dispatch(fetchMoviesList());
  },
});

export {CatalogMyListFilms};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogMyListFilms);
