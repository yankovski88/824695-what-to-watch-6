import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
// import SignIn from "../sign-in/sign-in.jsx";

const App = (props) => {
  const {films} = props;
  return (
    <Main films = {films}/>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;
