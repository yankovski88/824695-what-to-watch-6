import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const SmallCard = (props)=>{
  const {posterImage, name, id} = props;

  const [idActive, setIdActive] = React.useState(``);


  return (
    <article className={`small-movie-card catalog__movies-card ${idActive}`} id={id} onMouseOver={()=>{
      setIdActive(id);
    }} onMouseOut={()=>{
      setIdActive(``);
    }}>
      <div className="small-movie-card__image">
        <img src={posterImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        {/* id нужно вставить чтобы направляло в на нужную страницу*/}
        <Link className="small-movie-card__link" to={`/film`}>{name}</Link>
      </h3>
    </article>
  );
};

SmallCard.propTypes = {
  posterImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};


export default SmallCard;
