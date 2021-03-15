import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const BtnShowMore = (props) => {
  const {onClickMoreFilm} = props;
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
      onClick={onClickMoreFilm}
      >Show more</button>
    </div>
  )
}


export {BtnShowMore}

const mapStateToProps = (state)=>({
  films: state.films
});

const mapDispatchToProps = (dispatch)=>({
   onClickMoreFilm(){
     dispatch(ActionCreator.MORE_FILM())
   }
})

// здесь ничего не передаем значит диспачь не нужен
export default connect(mapStateToProps, mapDispatchToProps)(BtnShowMore); // connect подружит наш компонент с провайдером
