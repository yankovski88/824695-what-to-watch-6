import React from "react";

import {checkAuthNo} from "../../store/api-actions";
import {connect} from "react-redux";


const Copyright = (props)=>{
  return <div className="copyright" onClick={props.onClickLeave}>
    <p>© 2019 What to watch Ltd.</p>
  </div>;
};

// export default Copyright;


const mapDispatchToProps = (dispatch)=>({
  onClickLeave() {
    dispatch(checkAuthNo());
  }
});
// onClickLeave: PropTypes.func.isRequired,

export {Copyright};
export default connect(null, mapDispatchToProps)(Copyright); // mapStateToProps
