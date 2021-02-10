import React from "react";
import Logo from "../logo/logo.jsx";
import Copyright from "../copyright/copyright.jsx";
import PageTitle from "../page-title/page-title.jsx";
import SignInForm from "../sign-in-form/sign-in-form.jsx";


const SignIn = () => {
  return <React.Fragment>
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <PageTitle/>
      </header>

      <SignInForm/>

      <footer className="page-footer">
        <Logo/>
        <Copyright/>
      </footer>
    </div>
  </React.Fragment>;
};

export default SignIn;
