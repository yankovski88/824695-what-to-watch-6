import React from 'react';
import Logo from "../logo/logo";
import SignInLink from "../sign-in-link/sign-in-link";
import UserBlock from "../user-block/user-block";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../constants/constants";
import Logout from "../logout/logout";


const Header = (props)=>{
  const {authorizationStatus} = props;
  return (
    <>
      <header className="page-header movie-card__head">
        <Logo/>
        {authorizationStatus === AuthorizationStatus.AUTH ?
          <><UserBlock/><Logout/></>

          : <SignInLink/>}
      </header>
    </>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER})=>({
  authorizationStatus: USER.authorizationStatus,
});

export {Header};
export default connect(mapStateToProps, null)(Header); // если есть defalt то импорт со скобками
