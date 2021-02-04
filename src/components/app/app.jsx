import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

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
