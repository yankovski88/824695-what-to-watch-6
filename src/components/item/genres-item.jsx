import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator, ActionType} from '../../store/action';

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
  } = props // onUserAnswer,

  let onUserAnswerGenre;
  if (itemGenre === `All genres`) {
    onUserAnswerGenre = onUserAnswerAll
  } else if (itemGenre === `Comedies`) {
    onUserAnswerGenre = onUserAnswerComedies
  } else if (itemGenre === `Crime`) {
    onUserAnswerGenre = onUserAnswerCrime
  }

  else if (itemGenre === `Documentary`) {
    onUserAnswerGenre = onUserAnswerDocumentary
  }
  else if (itemGenre === `Dramas`) {
    onUserAnswerGenre = onUserAnswerDramas
  }
  else if (itemGenre === `Horror`) {
    onUserAnswerGenre = onUserAnswerHorror
  }
  else if (itemGenre === `Kids & Family`) {
    onUserAnswerGenre = onUserAnswerKids
  }
  else if (itemGenre === `Romance`) {
    onUserAnswerGenre = onUserAnswerRomance
  }
  else if (itemGenre === `Sci-Fi`) {
    onUserAnswerGenre = onUserAnswerSci
  }
  else if (itemGenre === `Thrillers`) {
    onUserAnswerGenre = onUserAnswerThrillers
  }

  console.log(props);

  // let itemLinkGenre = ``;
  // switch (itemGenre){
  //   case `All genres`:
  //   itemLinkGenre = `all`
  //   case `Comedies`:
  //     itemLinkGenre = `comedies`
  //   case `Crime`:
  //     itemLinkGenre = `crime`
  //
  // }

  return (

    <li className={`catalog__genres-item ${genreActive === itemGenre ? `catalog__genres-item--active` : ``}`}
      // onAnswer={onUserAnswer}
        onClick={onUserAnswerGenre}
    >
      {/*<Link to={`/films/${film.id}`} className="movie-nav__link" name="overview" onClick={handleNavChange}>Overview</Link>*/}

      {/*{itemLinkGenres.map((itemLinkGenre)=>{*/}
      {/*  return (*/}
      {/*    <Link to={`/${itemLinkGenre}`}  className="catalog__genres-link">{itemGenre}</Link>*/}
      {/*  )*/}
      {/*})}*/}
      <Link to={`/${itemGenre.toLowerCase().split(' ').join('-')}`} className="catalog__genres-link">{itemGenre}</Link>

    </li>
  )
}


// код который достает пропс с фильмами
const mapStateToProps = (state) => ({ // state это состояние хранилища
  genreActive: state.genreActive, // в объекте из этого состояния вытаскиваем данные и эти ключи станут пропсами
  films: state.films,
})

const mapDispatchToProps = (dispatch) => ({
  onUserAnswerAll() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.all()); // ActionCreator.Comedy()
  },
  onUserAnswerComedies() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.comedies()); // ActionCreator.Comedy()
  },
  onUserAnswerCrime() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.crime()); // ActionCreator.Comedy()
  },

  onUserAnswerDocumentary() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.documentary()); // ActionCreator.Comedy()
  },
  onUserAnswerDramas() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.dramas()); // ActionCreator.Comedy()
  },
  onUserAnswerHorror() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.horror()); // ActionCreator.Comedy()
  },
  onUserAnswerKids() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.kids()); // ActionCreator.Comedy()
  },
  onUserAnswerRomance() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.romance()); // ActionCreator.Comedy()
  },
  onUserAnswerSci() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.sci()); // ActionCreator.Comedy()
  },
  onUserAnswerThrillers() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.thrillers()); // ActionCreator.Comedy()
  },
});

export {GenresItem}
export default connect(mapStateToProps, mapDispatchToProps)(GenresItem); // connect подружит наш компонент с провайдером


