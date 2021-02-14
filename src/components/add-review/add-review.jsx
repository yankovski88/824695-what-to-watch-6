import React from "react";
import Logo from "../logo/logo.jsx";
import UserBlock from "../user-block/user-block.jsx";
import Breadcrumbs from "../breadcrumbs/breadcrumbs.jsx";
import AddReviewForm from "../add-review-form/add-review-form";

const AddReview = (props) => {
  const {film} = props;
  console.log(film);
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>
          <Breadcrumbs film={film}/>
          <UserBlock/>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218"
            height="327"/>
        </div>
      </div>

      <AddReviewForm/>
    </section>

  );
};

export default AddReview;
