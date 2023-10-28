import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const setActiveStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#007FFF" : "",
    borderRadius: isActive ? "3px" : "",
    fontSize: "24px",
    padding: "6px",
  });
  return (
    <>
      <div className=" text-center bg-orange-200 p-5 space-x-3">
        <NavLink style={setActiveStyle} to="/">
          Volunteer
        </NavLink>
        <NavLink style={setActiveStyle} to="/Events">
          Events
        </NavLink>
        <NavLink style={setActiveStyle} to="/Summary">
          Summary
        </NavLink>

        <a
          href="https://github.com/Nithin3008/assign22"
          className="text-xl text-blue-500 font-bold"
        >
          Github Link
        </a>
        <a
          href="https://replit.com/@nithinrocky30/assign22"
          className="text-xl text-blue-500 font-bold"
        >
          Repl Link
        </a>
      </div>
    </>
  );
};

export default Navigation;
