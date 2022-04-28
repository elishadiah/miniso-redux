import React from "react";

const Sidenav = (props) => {
  return (
    <div
      className='sidenav'
      style={
        props.state === "entering"
          ? { animation: "moveSideBar .3s forwards" }
          : props.state === "entered"
          ? { transform: "translateX(-0px)" }
          : { animation: "moveSidebar .3s reverse forwards" }
      }
    >
      <div className='sidenavHeader'>
        <i className='fas fa-bars'></i> Categorías
      </div>
    </div>
  );
};

export default Sidenav;
