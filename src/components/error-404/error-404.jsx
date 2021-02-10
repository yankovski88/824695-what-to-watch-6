import React from "react";
import Logo from "../logo/logo";

const Error404 = ()=>{
  const style = {
    display: `flex`,
    flexDirection: `center`,
    justifyContent: `center`,
    color: `red`
  };
  return (
    <>
      <Logo/>
      <h1 style = {style}>404 Not Found</h1>
    </>
  );
};

export default Error404;
