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
import {connect} from "react-redux";
import browserHistory from "../../browser-history";
import {ActionCreator} from "../../store/action";
import PrivateRoute from "../private-route/private-route";

const App = (props) => {
  const {authorizationStatus, onPrivateRouteRequest} = props;
  const [film, setMovie] = React.useState({}); // фильм который хотим посмотреть

  const updateData = React.useCallback((value) => {
    setMovie(value);
  }, [film]);


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
          path={`/mylist`}
          onPrivateRouteRequest={onPrivateRouteRequest}
          render={()=><MyList updateData={updateData}/>}
          authorizationStatus={authorizationStatus}
        >
        </PrivateRoute>

        <PrivateRoute exact
          path={`/films/:id/add-review`}
          onPrivateRouteRequest={onPrivateRouteRequest}
          render={()=><AddReview film={film}/>}
        >
        </PrivateRoute>
        <Route exact path={`/films/:id/details`}>
          <Film film={film} updateData={updateData} onPrivateRouteRequest={onPrivateRouteRequest}/>
        </Route>
        <Route exact path={`/films/:id/reviews`}>
          <Film film={film} updateData={updateData} onPrivateRouteRequest={onPrivateRouteRequest}/>
        </Route>
        <Route exact path={`/films/:id`}>
          <Film film={film} updateData={updateData} onPrivateRouteRequest={onPrivateRouteRequest}/>
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
  authorizationStatus: PropTypes.string.isRequired,
  onPrivateRouteRequest: PropTypes.func.isRequired,
};

export {App};

const mapStateToProps = (state)=>({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch)=>({
  onPrivateRouteRequest(route) {
    dispatch(ActionCreator.addRequestedRoute(route)); // закидываем роуте в диспач он закидывает в action и далее reducer поменяет вместо пути "/" на главную на путь route
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
