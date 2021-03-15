import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from "prop-types";

const GenresItem = (props) => {
  const {
    itemGenre,
    genreActive,
    onUserAnswerAll,
    onUserAnswerComedies,
    onUserAnswerCrime,
    onUserAnswerDocumentary,
    onUserAnswerDramas,
    onUserAnswerHorror,
    onUserAnswerKids,
    onUserAnswerRomance,
    onUserAnswerSci,
    onUserAnswerThrillers
  } = props; // onUserAnswer,

  let onUserAnswerGenre;
  if (itemGenre === `All genres`) {
    onUserAnswerGenre = onUserAnswerAll;
  } else if (itemGenre === `Comedies`) {
    onUserAnswerGenre = onUserAnswerComedies;
  } else if (itemGenre === `Crime`) {
    onUserAnswerGenre = onUserAnswerCrime;
  } else if (itemGenre === `Documentary`) {
    onUserAnswerGenre = onUserAnswerDocumentary;
  } else if (itemGenre === `Dramas`) {
    onUserAnswerGenre = onUserAnswerDramas;
  } else if (itemGenre === `Horror`) {
    onUserAnswerGenre = onUserAnswerHorror;
  } else if (itemGenre === `Kids & Family`) {
    onUserAnswerGenre = onUserAnswerKids;
  } else if (itemGenre === `Romance`) {
    onUserAnswerGenre = onUserAnswerRomance;
  } else if (itemGenre === `Sci-Fi`) {
    onUserAnswerGenre = onUserAnswerSci;
  } else if (itemGenre === `Thrillers`) {
    onUserAnswerGenre = onUserAnswerThrillers;
  }

  return (

    <li className={`catalog__genres-item ${genreActive === itemGenre ? `catalog__genres-item--active` : ``}`}
      onClick={onUserAnswerGenre} // клик по меню
    >
      <Link to={`/${itemGenre.toLowerCase().split(` `).join(`-`)}`} className="catalog__genres-link">{itemGenre}</Link>
    </li>
  );
};


// код который достает пропс с фильмами
const mapStateToProps = (state) => ({ // state это состояние хранилища
  genreActive: state.genreActive, // в объекте из этого состояния вытаскиваем данные и эти ключи станут пропсами
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onUserAnswerAll() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.all());
  },
  onUserAnswerComedies() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.comedies()); //
  },
  onUserAnswerCrime() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.crime());
  },
  onUserAnswerDocumentary() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.documentary());
  },
  onUserAnswerDramas() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.dramas());
  },
  onUserAnswerHorror() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.horror());
  },
  onUserAnswerKids() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.kids());
  },
  onUserAnswerRomance() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.romance());
  },
  onUserAnswerSci() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.sci());
  },
  onUserAnswerThrillers() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.thrillers());
  },
});

GenresItem.propTypes = {
  itemGenre: PropTypes.string.isRequired,
  genreActive: PropTypes.string.isRequired,
  onUserAnswerAll: PropTypes.func.isRequired,
  onUserAnswerComedies: PropTypes.func.isRequired,
  onUserAnswerCrime: PropTypes.func.isRequired,
  onUserAnswerDocumentary: PropTypes.func.isRequired,
  onUserAnswerDramas: PropTypes.func.isRequired,
  onUserAnswerHorror: PropTypes.func.isRequired,
  onUserAnswerKids: PropTypes.func.isRequired,
  onUserAnswerRomance: PropTypes.func.isRequired,
  onUserAnswerSci: PropTypes.func.isRequired,
  onUserAnswerThrillers: PropTypes.func.isRequired,
};

export {GenresItem};
export default connect(mapStateToProps, mapDispatchToProps)(GenresItem); // connect подружит наш компонент с провайдером


