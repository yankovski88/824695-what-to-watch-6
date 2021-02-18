import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import SignIn from "../sign-in/sign-in.jsx";
import MyList from "../my-list/my-list.jsx";
import Player from "../player/player.jsx";
import AddReview from "../add-review/add-review.jsx";
import Film from "../film/film.jsx";
import Error404 from "../error-404/error-404";


const App = (props) => {
  const {mainFilms, myListFilms, likeFilms, reviews, movie} = props;
  const [film, setMovie] = React.useState(movie);

  const updateData = (value) => {
    setMovie(value);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main mainFilms = {mainFilms} updateData={updateData}/>
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList myListFilms={myListFilms}/>
        </Route>
        {/* "/films/:id/review?"*/}
        <Route exact path={`/films/${film.id}/add-review`}>
          <AddReview film={film}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path={`/films/${film.id}/details`}>
          <Film likeFilms={likeFilms} reviews={reviews} film={film}/>
        </Route>
        <Route exact path={`/films/${film.id}/reviews`}>
          <Film likeFilms={likeFilms} reviews={reviews} film={film}/>
        </Route>

        {/* /films/:id?*/}
        <Route exact path={`/films/${film.id}`}>
          <Film likeFilms={likeFilms} reviews={reviews} film={film}/>
        </Route>
        <Route exact path="/player/:id">
          <Player film={film}/>
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  mainFilms: PropTypes.array.isRequired,
  myListFilms: PropTypes.array.isRequired,
  likeFilms: PropTypes.array.isRequired, // PropTypes.arrayOf(PropTypes.bool)
  reviews: PropTypes.array.isRequired,
  movie: PropTypes.object.isRequired,
};

export default App;
