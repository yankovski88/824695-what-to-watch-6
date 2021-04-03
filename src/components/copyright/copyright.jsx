import React from "react";

import {checkAuthNo} from "../../store/api-actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";


const Copyright = (props)=>{
  return <div className="copyright" onClick={props.onClickLeave}>
    <p>© 2019 What to watch Ltd.</p>
  </div>;
};


Copyright.propTypes = {
  onClickLeave: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch)=>({
  onClickLeave() {
    dispatch(checkAuthNo());
  }
});

export {Copyright};
export default connect(null, mapDispatchToProps)(Copyright);
