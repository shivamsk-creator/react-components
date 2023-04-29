import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h2 className="text-center text-3xl text-green-500 font-semibold my-10">
        This is Contact Page
      </h2>
      <div className="flex">
        <div className="flex flex-col w-48">
          <NavLink
            to="/contact/story"
            className="text-orange-500 mx-3 hover:underline p-3 w-fit rounded-lg"
            style={({ isActive }) => {
              return {
                background: isActive ? "#5cabd1" : "",
              };
            }}
          >
            Our Story{" "}
          </NavLink>
          <NavLink
            to="/contact/portfolio"
            className="text-orange-500 mx-3 hover:underline p-3 w-fit rounded-lg"
            style={({ isActive }) => {
              return {
                background: isActive ? "#5cabd1" : "",
              };
            }}
          >
            Our Portfolio{" "}
          </NavLink>
          <NavLink
            to="/contact/clients"
            className="text-orange-500 mx-3 hover:underline p-3 w-fit rounded-lg"
            style={({ isActive }) => {
              return {
                background: isActive ? "#5cabd1" : "",
              };
            }}
          >
            Our Clients{" "}
          </NavLink>
        </div>
        <div className="flex justify-center items-center w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Contact;
