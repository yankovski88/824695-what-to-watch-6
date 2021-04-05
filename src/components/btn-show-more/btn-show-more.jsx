import React from "react";
import {connect} from "react-redux";
import {moreFilm} from "../../store/action";
import PropTypes from "prop-types";

const BtnShowMore = (props) => {
  const {onClickMoreFilm} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={onClickMoreFilm}
      >Show more</button>
    </div>
  );
};

BtnShowMore.propTypes = {
  onClickMoreFilm: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch)=>({
  onClickMoreFilm() {
    dispatch(moreFilm());
  }
});

export {BtnShowMore};
// здесь ничего не передаем значит диспачь не нужен
export default connect(null, mapDispatchToProps)(BtnShowMore); // connect подружит наш компонент с провайдером
