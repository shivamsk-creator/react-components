import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const DashSideMenu = () => {
  let navigate = useNavigate();
  const sideMenu = [
    {
      path: "/home",
      name: "Home",
    },
    {
      path: "/profile",
      name: "Profile",
    },
    {
      path: "/products",
      name: "Products",
    },
    {
      path: "/notifications",
      name: "Notifications",
    },
    {
      path: "/settings",
      name: "Settings",
    },
  ];

  return (
    <>
      <div className="w-[15%] border border-orange-600 flex flex-col text-center py-3">
        {sideMenu.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              activeclassname="bg-red-500"
              className="hover:bg-orange-600 hover:text-white transition m-1 p-2 rounded-lg"
              key={index}
            >
              {item.name}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default DashSideMenu;
