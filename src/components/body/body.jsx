import React from "react";

// import elements
import ComponentList from "../componentList/componentList";
import Template from "../template/template";
import Sidebar from "../sideBar/sideBar";

const Body = (props) => {
  return (
    <div className="appBody content-page">
      {props.display === 0 ? <ComponentList /> : <Template />}
      <Sidebar />
    </div>
  );
}

export default Body;
