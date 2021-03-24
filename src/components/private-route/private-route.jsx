import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus, RoutePaths} from "../../constants/constants";
import {ActionCreator} from "../../store/action";


// const handleUserNotAuthtorized = (route, onPrivateRouteRequest) => {
//   onPrivateRouteRequest(route);
//   return <Redirect to={RoutePaths.SIGN_IN} />;
// };
//
// const PrivateRoute = ({render, authorizationStatus, path}) => (
//   <Route
//     render={(routeProps) => (
//       authorizationStatus === AuthorizationStatus.AUTH ? render(routeProps) : handleUserNotAuthtorized(path, onPrivateRouteRequest)
//     )}
//   />
// );
//
// PrivateRoute.propTypes = {
//   path: PropTypes.string.isRequired,
//   onPrivateRouteRequest: PropTypes.func.isRequired,
//   render: PropTypes.func.isRequired,
//   authorizationStatus: PropTypes.string.isRequired
// };
//
// const mapStateToProps = (state) => ({
//   authorizationStatus: state.authorizationStatus,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   onPrivateRouteRequest(route) {
//     dispatch(ActionCreator.addRequestedRoute(route));
//   }
// });
//
// export {PrivateRoute};
// export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);


// const handleUserNotAuthtorized = (route)=>{
//   // onPrivateRouteRequest эта функция которая получит rout(маршрут вместо `/`)
//   // route это маршрут вместо `/`
//   mapDispatchToProps(route);
//   // console.log(store.requestedRoute)
//   // console.log(mapDispatchToProps())
//   return <Redirect to={RoutePaths.SIGN_IN}/>; // вернуть редирект с маршрутом на `login`
// };


const PrivateRoute = ({render, path, exact, authorizationStatus}) =>{

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps)=>(
        authorizationStatus === AuthorizationStatus.AUTH ? render(routeProps) :
          // handleUserNotAuthtorized(path)
          <Redirect to={RoutePaths.SIGN_IN} /> // иначе типо верни на путь с регистрацией
        // onPrivateRouteRequest(path)
        // mapDispatchToProps(route);

      // handleUserNotAuthtorized(path)
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

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  requestedRoute: state.requestedRoute,
});

const mapDispatchToProps = (dispatch)=>({
  onPrivateRouteRequest(route) {
    dispatch(ActionCreator.addRequestedRoute(route)); // закидываем роуте в диспач он закидывает в action и далее reducer поменяет вместо пути "/" на главную на путь route
  }
});

export {PrivateRoute};
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
