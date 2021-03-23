import React from "react";
// импортируем Router как BrowserRouter это для history
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import SignIn from "../sign-in/sign-in.jsx";
import MyList from "../my-list/my-list.jsx";
import Player from "../player/player.jsx";
import AddReview from "../add-review/add-review.jsx";
import Film from "../film/film.jsx";
import Error404 from "../error-404/error-404";
import {getGenreFilms} from "../../utils/utils";
import {connect} from "react-redux";
import {PrivateRoute} from "../private-route/private-route";
import browserHistory from "../../browser-history";


const App = (props) => {
  const {myListFilms, reviews, films} = props;
  const [film, setMovie] = React.useState({}); // фильм который хотим посмотреть // movie

  let likeFilms = getGenreFilms(film.genre, films); // выбираем похожие фильмы


  const updateData = (value) => {
    setMovie(value);
  };

  return (
    // теперь вся знаю об экземпляре класса истории
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <Main updateData={updateData} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <PrivateRoute exact
                      path={"/mylist"}
                      render={()=><MyList myListFilms={myListFilms} updateData={updateData}/>}
        >
                      </PrivateRoute>
        {/*<Route exact path="/mylist">*/}
        {/*  <MyList myListFilms={myListFilms} updateData={updateData}/>*/}
        {/*</Route>*/}
         {/*"/films/:id/review?"*/}

        <PrivateRoute exact
                      path={`/films/${film.id}/add-review`}
                      render={()=><AddReview film={film} onAnswer={() => {}}/>}
        >
        </PrivateRoute>

        {/*<Route exact path={`/films/${film.id}/add-review`}>*/}
        {/*  <AddReview film={film} onAnswer={() => {}}/>*/}
        {/*</Route>*/}
        <Route exact path={`/films/${film.id}/details`}>
          <Film likeFilms={likeFilms} reviews={reviews} film={film} updateData={updateData}/>
        </Route>
        <Route exact path={`/films/${film.id}/reviews`}>
          <Film likeFilms={likeFilms} reviews={reviews} film={film} updateData={updateData}/>
        </Route>

        {/* /films/:id?*/}
        <Route exact path={`/films/${film.id}`}>
          <Film likeFilms={likeFilms} reviews={reviews} film={film} updateData={updateData}/>
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
  myListFilms: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  films: PropTypes.array.isRequired,
};

export {App};

const mapStateToProps = (state)=>({
  films: state.films
});

export default connect(mapStateToProps, null)(App);
