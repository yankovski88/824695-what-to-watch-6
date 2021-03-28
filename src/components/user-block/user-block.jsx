import React from "react";
import {fetchAllFavoriteFilms} from "../../store/api-actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";
// import {SignInForm} from "../sign-in-form/sign-in-form";

const UserBlock = (props)=>{
  const {redirectToMyList} = props; //
  return (
    //
    <div className="user-block" onClick={redirectToMyList}>
      <div className="user-block__avatar">
        <a href="#" >
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />


        </a>
      </div>
    </div>
  );
};

// export default UserBlock;
UserBlock.propTypes = {
  redirectToMyList: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch)=>({
  // loadAllFavoriteFilms() {
  //   dispatch(fetchAllFavoriteFilms());
  // },


  redirectToMyList(){
    dispatch(ActionCreator.redirectToRoute(`/mylist`))
  },

});

export {UserBlock};
export default connect(null, mapDispatchToProps)(UserBlock); // mapStateToProps
