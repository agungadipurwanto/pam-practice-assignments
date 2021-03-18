import React from "react";
import { NavLink } from "react-router-dom";

function SideMenu() {
  return (
    <div className="list-group shadow-sm">
      <NavLink
        exact
        to="/"
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        Dashboard
      </NavLink>
      <NavLink
        exact
        to="/users"
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        Users
      </NavLink>
    </div>
  );
}

export default SideMenu;
