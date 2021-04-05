import React from "react";

const Copyright = ()=>{
  return <div className="copyright">
    <p>© 2019 What to watch Ltd.</p>
  </div>;
};

export default React.memo(Copyright); // React.memo пропсы не меняются значит не нужно все время компонент перерисовывать
