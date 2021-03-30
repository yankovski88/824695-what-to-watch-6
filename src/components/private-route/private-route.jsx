import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect, Switch} from 'react-router-dom';
import {AuthorizationStatus, RoutePaths} from "../../constants/constants";
import Spinner from "../spinner/spinner";
// import {connect} from "react-redux";

const handleUserNotAuthtorized = (route, onPrivateRouteRequest)=>{
  // onPrivateRouteRequest эта функция которая получит rout(маршрут вместо `/`)
  // route это маршрут вместо `/`

  onPrivateRouteRequest(route);
  return <Redirect to={RoutePaths.SIGN_IN}/>; // вернуть редирект с маршрутом на `login`
};


const PrivateRoute = ({render, path, exact, authorizationStatus, onPrivateRouteRequest}) =>{
  console.log(path);
  console.log(authorizationStatus);
  // authorizationStatus = `AUTH`
  return (
    authorizationStatus === null ? <Spinner/> :
      <Route
        path={path}
        exact={exact}
        render={(routeProps)=>(
          authorizationStatus === AuthorizationStatus.AUTH ? render(routeProps) :
            handleUserNotAuthtorized(path, onPrivateRouteRequest)
          // <Redirect to={RoutePaths.SIGN_IN} /> // иначе типо верни на путь с регистрацией
        )}
      />

  // <Route
  //   path={path} // думаю это путь
  //   exact={exact} // не знаю
  //   render={(routeProps)=>{
  //     return (
  //       authorizationStatus === AuthorizationStatus.AUTH // если статус равен AUTH т.е. авторизирован
  //       ? render(routeProps) // то рендари это routeProps
  //         : <Redirect to={`/login`} /> // иначе типо верни на путь с регистрацией
  //     )
  //   }}
  //   />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  onPrivateRouteRequest: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//   // authorizationStatus: state.authorizationStatus,
//   requestedRoute: state.requestedRoute,
// });

// const mapDispatchToProps = (dispatch)=>({
//   onPrivateRouteRequest(route) {
//     dispatch(ActionCreator.addRequestedRoute(route)); // закидываем роуте в диспач он закидывает в action и далее reducer поменяет вместо пути "/" на главную на путь route
//   }
// });

export default PrivateRoute;
// export default connect(mapStateToProps, null)(PrivateRoute);
