import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator, ActionType} from '../../store/action';

const GenresItem = (props) =>{
  const {itemGenre,  genreActive, onUserAnswerComedy, onUserAnswerBoevic, onUserAnswerAll} = props // onUserAnswer,
  let a;
  if(itemGenre === `Comedy`){
    a = onUserAnswerComedy
  } else if(itemGenre === `Boevic`){
    a = onUserAnswerBoevic
  }else if(itemGenre === `All`){
    a = onUserAnswerAll
  }


  console.log(props);
    return (

  <li className={`catalog__genres-item ${genreActive === itemGenre ? `catalog__genres-item--active` : ``}`}
      // onAnswer={onUserAnswer}
    onClick={a}
  >
    {/*<Link to={`/films/${film.id}`} className="movie-nav__link" name="overview" onClick={handleNavChange}>Overview</Link>*/}

    <Link to={`/${itemGenre}`}  className="catalog__genres-link">{itemGenre}</Link>
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
    dispatch(ActionCreator.Comedy()); // ActionCreator.Comedy()
  },
  onUserAnswerBoevic() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.Boevic()); // ActionCreator.Comedy()
  },
  onUserAnswerAll() { // те ключи объекта которые вернет mapDispatchToProps станут пропсами ввиде функции т.е. колбеками
    dispatch(ActionCreator.All()); // ActionCreator.Comedy()
  },
});

export {GenresItem}
export default connect(mapStateToProps, mapDispatchToProps)(GenresItem); // connect подружит наш компонент с провайдером

// <li className="catalog__genres-item catalog__genres-item--active">
//   <a href="#" className="catalog__genres-link">All genres</a>
// </li>
// <li className="catalog__genres-item">
//   <a href="#" className="catalog__genres-link">Comedies</a>
// </li>
// <li className="catalog__genres-item">
//   <a href="#" className="catalog__genres-link">Crime</a>
// </li>
// <li className="catalog__genres-item">
//   <a href="#" className="catalog__genres-link">Documentary</a>
// </li>
// <li className="catalog__genres-item">
//   <a href="#" className="catalog__genres-link">Dramas</a>
// </li>
// <li className="catalog__genres-item">
//   <a href="#" className="catalog__genres-link">Horror</a>
// </li>
// <li className="catalog__genres-item">
//   <a href="#" className="catalog__genres-link">Kids & Family</a>
// </li>
// <li className="catalog__genres-item">
//   <a href="#" className="catalog__genres-link">Romance</a>
// </li>
// <li className="catalog__genres-item">
//   <a href="#" className="catalog__genres-link">Sci-Fi</a>
// </li>
// <li className="catalog__genres-item">
//   <a href="#" className="catalog__genres-link">Thrillers</a>
// </li>
