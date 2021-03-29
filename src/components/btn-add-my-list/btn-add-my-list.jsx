import React from "react";
import {useParams} from "react-router-dom";
import {ActionCreator} from "../../store/action";
import {fetchFavorite, fetchFilmById, fetchMoviesList} from "../../store/api-actions";
import {connect} from "react-redux";

const BtnAddMyList = (props) => {
  const {loadFavorite, filmById, onLoadData, loadFilmById, filmPromo} = props;
  console.log(props)
  const {id} = useParams();
console.log(id)


  // запускаем хук useEffect он запускается каждый раз когда открывается страница, он следит за флагом isDataLoaded
  React.useEffect(() => {
    if (id) {
      loadFilmById(id);
    }
    // loadFilmById(film.id); // тогда вызываем функцию которая делает запрос на сервер, отдает данные в dispatch, а тот меняет store
  }, [id]); // useEffect сказали следи за этим флагом если он изменится, то делай запрос
  // film.id




  const hendleOnClickFilmFavorite =(evt)=>{
    evt.preventDefault();
    let numberStatus = 0;
    if(filmById.isFavorite === false){
      numberStatus = 1;
    } else if(filmById.isFavorite === true){
      numberStatus = 0;
    }
    loadFavorite(id, numberStatus)
  }

  React.useEffect(()=>{

  }, [filmById]
)
  let filmForBtn;
  if(filmById){
    filmForBtn = filmById
  } else {
    filmForBtn = filmPromo
  }
  // onClick={hendleLoadFavorite(id, 1)}
  return (
    <button  className="btn btn--list movie-card__button" type="button" onClick={hendleOnClickFilmFavorite}>
      { filmForBtn.isFavorite === true ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5"></path>
        </svg>
        :
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>}
      <span>My list</span>
    </button>
  );
};

export {BtnAddMyList};

const mapStateToProps = (state)=>({
  films: state.films,
  filmPromo: state.filmPromo,
})

const mapDispatchToProps = (dispatch)=>({
  onLoadData() { // когда вызовится эта функция, то в dispatch попадает результат функции по запросу на сервер
    dispatch(fetchMoviesList());
  },
  loadFavorite(idFilm, isFavorite){
    dispatch(fetchFavorite(idFilm, isFavorite))
  },
  loadFilmById(id) {
    dispatch(fetchFilmById(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BtnAddMyList)
