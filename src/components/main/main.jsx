import React from "react";
import Card from "../card/card";
import PropTypes from "prop-types";
import Logo from "../logo/logo.jsx";
import Copyright from "../copyright/copyright.jsx";
import CatalogMainFilms from "../catalog-main-films/catalog-main-films";
import ListGenres from "../list-genres/list-genres";
import BtnShowMore from "../btn-show-more/btn-show-more";
import {connect} from "react-redux";
import {setGenre} from "../../store/action";
import {fetchMoviesList} from '../../store/api-actions';
import Spinner from "../spinner/spinner";
import {
  getAllFilmsSelect,
  getCountShowFilmSelect, getGenreFilmsSelect,
  getGenreSelect, getIsDataLoadedSelect
} from "../../store/all-movies/selectors";
import {moviePropTypes} from "../../prop-types";


const Main = (props) => {
  const {updateData, films, countShowFilm, onSetGenre, isDataLoaded, onLoadData, genreFilms} = props;

  // код решает показать btn more или нет
  let itemGenreFilms; // переменная которая смотрит показывать ли кнопку More Show
  if (!genreFilms || genreFilms.length === 0) { // если не один из жанров не кликнули, то он равен всем фильмам
    itemGenreFilms = films;
  } else if (genreFilms) {
    itemGenreFilms = genreFilms;
  }

  // запускаем хук useEffect он запускается каждый раз когда открывается страница, он следит за флагом isDataLoaded
  React.useEffect(() => {
    if (!isDataLoaded) { // если флаг false значит сайт запускается первый раз

      onLoadData(); // тогда вызываем функцию которая делает запрос на сервер, отдает данные в dispatch, а тот меняет store
    }
  }, [isDataLoaded]); // useEffect сказали следи за этим флагом если он изменится, то делай запрос

  return (<>
    <Card />
    <div className="page-content">

      {!isDataLoaded ? <Spinner /> : <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <ListGenres films={films} setGenre={onSetGenre}/>
        <CatalogMainFilms updateData={updateData}/>
        {itemGenreFilms.length > countShowFilm ? <BtnShowMore /> : ``}
      </section>
      }


      <footer className="page-footer">
        <Logo/>
        <Copyright/>
      </footer>
    </div>
  </>
  );
};

Main.propTypes = {
  updateData: PropTypes.func.isRequired,
  genreFilms: PropTypes.array.isRequired,
  films: PropTypes.arrayOf(moviePropTypes).isRequired,
  countShowFilm: PropTypes.number.isRequired,
  onSetGenre: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state)=>({
  countShowFilm: getCountShowFilmSelect(state), // взято из reduce
  selectedGenre: getGenreSelect(state), // взято из reduce action.payload
  films: getAllFilmsSelect(state), // взято из reduce
  genreFilms: getGenreFilmsSelect(state),
  isDataLoaded: getIsDataLoadedSelect(state),
});

// если передать setGenre на клик меню жанр, то в aaction в payload попадет название жанра
const mapDispatchToProps = (dispatch)=>({
  onSetGenre(genre) {
    dispatch(setGenre(genre)); // genre это payload дополнитеьная инфа
  },
  onLoadData() { // когда вызовится эта функция, то в dispatch попадает результат функции по запросу на сервер
    dispatch(fetchMoviesList());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
