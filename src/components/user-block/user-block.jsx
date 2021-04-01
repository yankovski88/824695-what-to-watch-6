import React from "react";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";


const UserBlock = (props)=>{
  const {dataLoggedIn} = props;

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
          <img src={dataLoggedIn.avatarUrl} alt="User avatar" width="63" height="63" />
        </a>
      </div>
    </div>
  );
};

UserBlock.propTypes = {
  dataLoggedIn: PropTypes.object.isRequired,
};

const mapStateToProps = (state)=>({
  dataLoggedIn: state.dataLoggedIn, // взято из reduce
});


export {UserBlock};
export default connect(mapStateToProps, null)(UserBlock);
