import React from "react";
import Logo from "../logo/logo.jsx";
import Copyright from "../copyright/copyright.jsx";
import PageTitle from "../page-title/page-title.jsx";
import SignInForm from "../sign-in-form/sign-in-form.jsx";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../constants/constants";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";


const SignIn = (props) => {
  const {authorizationStatus} = props;
  const history = useHistory();
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    history.push(`/`);
  }


  return <React.Fragment>
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <PageTitle/>
      </header>

      <SignInForm />

      <footer className="page-footer">
        <Logo/>
        <Copyright/>
      </footer>
    </div>
  </React.Fragment>;
};

SignIn.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state)=>({
  authorizationStatus: state.authorizationStatus
});

export {SignIn};
export default connect(mapStateToProps)(SignIn);
