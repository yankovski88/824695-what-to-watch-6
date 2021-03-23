import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from "../../constants/constants";

const PrivateRoute = ({render, path, exact, authorizationStatus}) =>{
  return (
    <Route
      path={path} // думаю это путь
      exact={exact} // не знаю
      render={(routeProps)=>{
        return (
          authorizationStatus === AuthorizationStatus.AUTH // если статус равен AUTH т.е. авторизирован
          ? render(routeProps) // то рендари это routeProps
            : <Redirect to={`/login`} /> // иначе типо верни на путь с регистрацией
        )
      }}
      />
  )
}

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
