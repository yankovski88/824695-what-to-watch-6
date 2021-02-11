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
  const {mainFilms, myListFilms, likeFilms} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main mainFilms = {mainFilms} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList myListFilms={myListFilms}/>
        </Route>
        <Route exact path="/films/:id?">
          <Film likeFilms={likeFilms}/>
        </Route>
        <Route exact path="/films/:id/review?">
          <AddReview />
        </Route>
        <Route exact path="/player/:id?">
          <Player />
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
  likeFilms: PropTypes.arrayOf(PropTypes.bool)
};

export default App;
