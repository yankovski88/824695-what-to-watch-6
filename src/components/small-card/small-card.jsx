import React from "react";
import PropTypes from "prop-types";

const SmallCard = (props)=>{
  const {posterImage, name, videoLink, id} = props;

  const [idActive, setIdActive] = React.useState(`no id`);


  return (
    <article className={`small-movie-card catalog__movies-card`}  onMouseOver={()=>{setIdActive(id)}} onMouseOut={()=>{setIdActive(``)}}>
      <div className="small-movie-card__image">
        <img src={posterImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={videoLink}>{name}</a>
      </h3>
    </article>
  );
};

SmallCard.propTypes = {
  posterImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
};


export default SmallCard;
