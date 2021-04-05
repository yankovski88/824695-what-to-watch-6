import React from "react";
import GenresItem from "../item/genres-item";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getUniqueGenres} from "../../utils/utils";
import {moviePropTypes} from "../../prop-types";

const ListGenres = (props)=>{
  const {setGenre, films} = props;

  return (
    <>
      <ul className="catalog__genres-list">
        {getUniqueGenres(films).map((itemGenre)=>{
          return (
            <GenresItem key={itemGenre} itemGenre={itemGenre} setGenre={setGenre}/>
          );
        })}
      </ul>
    </>
  );
};

ListGenres.propTypes = {
  films: PropTypes.arrayOf(moviePropTypes).isRequired,
  setGenre: PropTypes.func.isRequired,
};


const mapStateToProps = ({ALL_MOVIES}) => ({
  films: ALL_MOVIES.films
});

export {ListGenres};
// здесь ничего не передаем значит диспачь не нужен
export default connect(mapStateToProps, null)(ListGenres); // connect подружит наш компонент с провайдером
