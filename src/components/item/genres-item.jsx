import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";

const GenresItem = (props) => {
  const {
    setGenre, // диспачь который примет в себя payload с жанром
    itemGenre, // это item жанр меню
    selectedGenre, // жанр который был кликнут
  } = props;

  return (
    // чтобы выделить жанр меню нужно его сравнить с кликнутым жанром
    <li
      onClick={()=> { // клик по меню жанра
        return setGenre(itemGenre);
      }} // setGenre это диспачь переданный
      className={`catalog__genres-item ${selectedGenre === itemGenre ? `catalog__genres-item--active` : ``}`}
    >
      <a href="#" className="catalog__genres-link">{itemGenre}</a>
    </li>
  );
};

GenresItem.propTypes = {
  itemGenre: PropTypes.string.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  setGenre: PropTypes.func.isRequired,
};

// код который достает пропс с фильмами
const mapStateToProps = ({ALL_MOVIES}) => ({ // state это состояние хранилища
  films: ALL_MOVIES.films,
  selectedGenre: ALL_MOVIES.genre
});

export {GenresItem};
export default connect(mapStateToProps, null)(GenresItem); // connect подружит наш компонент с провайдером


