import { DocumentArrowUpIcon } from "@heroicons/react/20/solid";
import { Dropdown } from "antd";
import DropdownButton from "antd/es/dropdown/dropdown-button";
import React, { useState } from "react";

const About = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="relative">
        <div
          onClick={dropdown}
          className="cursor-pointer transition"
          onMouseEnter={() => {
            setShowDropdown(true);
          }}
          onMouseLeave={() => {
            setShowDropdown(false);
          }}
        >
          Dropdown
        </div>
        {showDropdown ? (
          <>
            <div className="dropdownlist bg-red-500 w-fit p-3 rounded-lg absolute top-10 left-0 transition-transform">
              <div>Home</div>
              <div>About</div>
              <div>Contact</div>
              <div>Blogs</div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default About;
