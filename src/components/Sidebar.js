import React from "react";
import "../styles/index.scss";

const Sidebar = ({SBar, setSBar}) => {

    const displayBarOFF = () => {
        setSBar(false)
    }

  return (
    <div className="body">
      <div className="Sidebar">
        <div className="Sidebar-Part">Abstract</div>
        <div className="Sidebar-Part">Logos</div>
        <div className="Sidebar-Part">Gaming</div>
      </div>
      <div onClick={displayBarOFF} className="else"></div>
    </div>
  );
};

export default Sidebar;
