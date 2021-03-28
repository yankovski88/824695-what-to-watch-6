import React from "react";
import {fetchAllFavoriteFilms} from "../../store/api-actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";
import {Link, useHistory } from "react-router-dom";
// import {SignInForm} from "../sign-in-form/sign-in-form";

const UserBlock = (props)=>{
  // const {redirectToMyList} = props; //
  let history = useHistory();

  function handleClick(evt) {
    evt.preventDefault()
    history.push("/mylist");
  }

  // function handleClickByRedax(evt) {
  //   evt.preventDefault()
  //   redirectToMyList()
  // }

  return (

    <div className="user-block" >
      <div className="user-block__avatar">
        {/*to={"/mylist"}*/}
        <a
          href="#"
          // onClick={handleClickByRedax}

          onClick={handleClick}
        >
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />


        </a>
      </div>
    </div>
  );
};

// export default UserBlock;
// UserBlock.propTypes = {
//   redirectToMyList: PropTypes.func.isRequired,
// };

const mapDispatchToProps = (dispatch)=>({
  // loadAllFavoriteFilms() {
  //   dispatch(fetchAllFavoriteFilms());
  // },


  // redirectToMyList(){
  //   dispatch(ActionCreator.redirectToRoute(`/mylist`))
  // },

});

export {UserBlock};
export default connect(null, mapDispatchToProps)(UserBlock); // mapStateToProps
