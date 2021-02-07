import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import SignIn from "../sign-in/sign-in.jsx";
import MyList from "../my-list/my-list.jsx";
import Player from "../player/player.jsx";
import AddReview from "../add-review/add-review.jsx";
import Film from "../film/film.jsx";

const App = (props) => {
  const {mainFilms, myListFilms, likeFilms} = props;
  return (
    <>
      {/* <Main mainFilms = {mainFilms}/>*/}
      {/* <MyList myListFilms={myListFilms}/>*/}
      {/* <Player/>*/}
      {/* <AddReview/>*/}
      <Film likeFilms={likeFilms}/>
    </>
  );
};

App.propTypes = {
  mainFilms: PropTypes.array.isRequired,
  myListFilms: PropTypes.array.isRequired,
  likeFilms: PropTypes.array.isRequired
};

export default App;
