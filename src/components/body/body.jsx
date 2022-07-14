import React from "react";

// import elements
import ComponentList from "../components/componentList";
import Sidebar from "../sideBar/sideBar";

const Body = () => {
  return (
    <div className="appBody content-page">
      <ComponentList />
      <Sidebar />
    </div>
  );
}

export default Body;
