import React from 'react';
import {checkAuthNo} from "../../store/api-actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";


const Logout = (props)=>{
  const {onClickLeave} = props;

  return <a className="logout" onClick={onClickLeave}>Logout</a>;
};


Logout.propTypes = {
  onClickLeave: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch)=>({
  onClickLeave() {
    dispatch(checkAuthNo());
  }
});

export {Logout};
export default connect(null, mapDispatchToProps)(Logout);
