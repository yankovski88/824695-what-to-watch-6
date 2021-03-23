import React from 'react';
import Logo from "../logo/logo";
import SignInLink from "../sign-in-link/sign-in-link";
import UserBlock from "../user-block/user-block";


const Header = ()=>{
  return(
    <>
      <header className="page-header movie-card__head">
        <Logo/>
        <SignInLink/>
        {/*<UserBlock/>*/}
      </header>
    </>
  )
}

export default Header;
