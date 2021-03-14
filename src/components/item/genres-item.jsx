import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator, ActionType} from '../../store/action';

const GenresItem = (props) =>{
  const {itemGenre,  genreActive, onUserAnswerComedy, onUserAnswerBoevic, onUserAnswerAll} = props // onUserAnswer,
  let a;
  if(itemGenre === `comedies`){
    a = onUserAnswerComedy
  } else if(itemGenre === `Boevic`){
    a = onUserAnswerBoevic
  }else if(itemGenre === `all`){
    a = onUserAnswerAll
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
    onClick={a}
  >
    {/*<Link to={`/films/${film.id}`} className="movie-nav__link" name="overview" onClick={handleNavChange}>Overview</Link>*/}

    {/*{itemLinkGenres.map((itemLinkGenre)=>{*/}
    {/*  return (*/}
    {/*    <Link to={`/${itemLinkGenre}`}  className="catalog__genres-link">{itemGenre}</Link>*/}
    {/*  )*/}
    {/*})}*/}
        <Link to={`/${itemGenre.toLowerCase().split(' ').join('-')}`}  className="catalog__genres-link">{itemGenre}</Link>

  </li>
    )
}


// код который достает пропс с фильмами
const mapStateToProps = (state)=>({ // state это состояние хранилища
  genreActive: state.genreActive, // в объекте из этого состояния вытаскиваем данные и эти ключи станут пропсами
  films: state.films,
})

const mapDispatchToProps = (dispatch) => ({
  onUserAnswerComedy() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.comedies()); // ActionCreator.Comedy()
  },
  onUserAnswerBoevic() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.Boevic()); // ActionCreator.Comedy()
  },
  onUserAnswerAll() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.all()); // ActionCreator.Comedy()
  },
});

export {GenresItem}
export default connect(mapStateToProps, mapDispatchToProps)(GenresItem); // connect подружит наш компонент с провайдером


