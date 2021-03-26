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
// import {PrivateRoute} from "../private-route/private-route";
import browserHistory from "../../browser-history";
import {ActionCreator} from "../../store/action";
import PrivateRoute from "../private-route/private-route";


const App = (props) => {
  const {myListFilms, films, authorizationStatus, onPrivateRouteRequest} = props; // reviews,
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


        <PrivateRoute
          exact
          path={`/mylist`}
          authorizationStatus={authorizationStatus}
          onPrivateRouteRequest={onPrivateRouteRequest}
          render={()=><MyList myListFilms={myListFilms} updateData={updateData}
          />}
        >
        </PrivateRoute>


        {/* <Route exact path="/mylist">*/}
        {/*  <MyList myListFilms={myListFilms} updateData={updateData}/>*/}
        {/* </Route>*/}
        {/* "/films/:id/review?"*/}
        {/* ${film.id}*/}
        <PrivateRoute exact
          path={`/films/:id/add-review`}
          onPrivateRouteRequest={onPrivateRouteRequest}
          render={()=><AddReview path={`/films/:id/add-review`} film={film} onAnswer={() => {}}/>}
          authorizationStatus={authorizationStatus}
        >
        </PrivateRoute>

        {/* <Route exact path={`/films/${film.id}/add-review`}>*/}
        {/*  <AddReview film={film} onAnswer={() => {}}/>*/}
        {/* </Route>*/}
        {/* ${film.id}*/}
        {/* /!*reviews={reviews}*!/ likeFilms={likeFilms}*/}
        <Route exact path={`/films/:id/details`}>
          <Film film={film} updateData={updateData} onPrivateRouteRequest={onPrivateRouteRequest}/>
        </Route>
        {/* ${film.id}*/}
        {/* /!*reviews={reviews}*!/likeFilms={likeFilms}*/}
        <Route exact path={`/films/:id/reviews`}>
          <Film film={film} updateData={updateData} onPrivateRouteRequest={onPrivateRouteRequest}/>
        </Route>

        {/* /films/:id?*/}
        {/* /!*reviews={reviews}*!/likeFilms={likeFilms}*/}
        <Route exact path={`/films/:id`}>
          <Film path={`/films/:id`} film={film} updateData={updateData} onPrivateRouteRequest={onPrivateRouteRequest}/>
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
  films: PropTypes.array.isRequired,

  authorizationStatus: PropTypes.string.isRequired,
  onPrivateRouteRequest: PropTypes.func.isRequired,
};

export {App};

const mapStateToProps = (state)=>({
  films: state.films,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch)=>({
  onPrivateRouteRequest(route) {
    dispatch(ActionCreator.addRequestedRoute(route)); // закидываем роуте в диспач он закидывает в action и далее reducer поменяет вместо пути "/" на главную на путь route
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
