import React from "react";

const NavBar = (props) => {
  console.log("NavBar Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="/#" className="navbar-brand">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
