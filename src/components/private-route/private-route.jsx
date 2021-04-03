import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {AuthorizationStatus, RoutePaths} from "../../constants/constants";
import Spinner from "../spinner/spinner";
import {connect} from "react-redux";

const handleUserNotAuthtorized = (route, onPrivateRouteRequest)=>{
  // onPrivateRouteRequest эта функция которая получит rout(маршрут вместо `/`)
  // route это маршрут вместо `/`

  onPrivateRouteRequest(route);
  return <Redirect to={RoutePaths.SIGN_IN}/>; // вернуть редирект с маршрутом на `login`
};


const PrivateRoute = ({render, path, exact, authorizationStatus, onPrivateRouteRequest}) =>{

  return (
    authorizationStatus === `` ? <Spinner/> :
      <Route
        path={path}
        exact={exact}
        render={(routeProps)=>(
          authorizationStatus === AuthorizationStatus.AUTH ? render(routeProps) :
            handleUserNotAuthtorized(path, onPrivateRouteRequest) // иначе типо верни на путь с регистрацией
        )}
      />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  onPrivateRouteRequest: PropTypes.func.isRequired,
};

export {PrivateRoute};
const mapStateToProps = (state)=>({
  authorizationStatus: state.authorizationStatus
});

export default connect(mapStateToProps, null)(PrivateRoute);
