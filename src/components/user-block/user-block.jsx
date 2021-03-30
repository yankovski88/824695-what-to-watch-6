import React from "react";
import {useHistory} from "react-router-dom";

const UserBlock = ()=>{
  let history = useHistory();

  function handleClick(evt) {
    evt.preventDefault();
    history.push(`/mylist`);
  }

  return (
    <div className="user-block" >
      <div className="user-block__avatar">
        <a
          href="#"
          onClick={handleClick}
        >
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </a>
      </div>
    </div>
  );
};


export default UserBlock;
