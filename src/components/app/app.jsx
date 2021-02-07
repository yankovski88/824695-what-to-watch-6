import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import SignIn from "../sign-in/sign-in.jsx";
import MyList from "../my-list/my-list.jsx";
import Player from "../player/player.jsx";
import AddReview from "../add-review/add-review.jsx";

const App = (props) => {
  const {films, myListFilms} = props;
  return (
    <>
      <Main films = {films}/>
      {/* <MyList myListFilms={myListFilms}/>*/}
      {/* <Player/>*/}
      {/* <AddReview/>*/}
    </>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  myListFilms: PropTypes.array.isRequired
};

export default App;
