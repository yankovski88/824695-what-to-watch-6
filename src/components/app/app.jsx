import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
// import SignIn from "../sign-in/sign-in.jsx";
// import MyList from "../my-list/my-list.jsx";

const App = (props) => {
  const {films, myListFilms} = props;
  return (
    <>
      <Main films = {films}/>
      {/* <MyList myListFilms={myListFilms}/>*/}
    </>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  myListFilms: PropTypes.array.isRequired
};

export default App;
