import React from "react";
import Logo from "../logo/logo";

const Error = ()=>{
  const style = {
    display: `flex`,
    flexDirection: `center`,
    justifyContent: `center`,
    color: `red`
  };
  return (
    <>
      <Logo/>
      <h1 style = {style}>Error</h1>
    </>
  );
};

export default Error;
