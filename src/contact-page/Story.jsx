import React, { useState } from "react";
import nature from "../img/trees-gb7d91a379_640.jpg";
import { NavLink } from "react-router-dom";

const Story = () => {
  const [isWishlist, setIsWishlist] = useState(false);

  console.log(isWishlist);
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-center text-3xl text-green-500 font-semibold my-10">
          This is Story component
        </h2>
        <div>
          <div className="course p-3 border flex flex-col max-w-sm sm:max-w-none lg:flex-row sm:w-80 md:w-80 lg:w-fit justify-between mx-5 my-5 sm:mx-2 mb-5 shadow-md relative">
            <div className="flex flex-col lg:flex-row">
              <img
                className="lg:h-full lg:w-56  rounded-sm"
                src={nature}
                alt=""
              />
              {/* course content */}
              <div className="course-content px-3 py-3 lg:py-0  lg:max-w-sm">
                <h3 className="font-semibold text-gray-900 text-lg">
                  Personality Development
                </h3>
                <div className="course-benefits text-gray-600 flex space-x-4 my-1">
                  <div className="">Advanced</div>
                  <div className="">12 Lessons</div>
                  <div className="">4 hrs</div>
                </div>
                <p className="text-gray-500 mt-3 lg:block">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                  mollitia magnam hic voluptatibus molestias magni! Ut amet fuga
                  odit iusto. &nbsp;
                  <NavLink
                    className="text-blue-600 cursor-pointer hover:underline hover:underline-blue-600 hover:underline-offset-1"
                    to="/"
                  >
                    more
                  </NavLink>
                </p>
              </div>
            </div>
            {/* course Buying options */}
            <div className="courseBuyingOptions flex flex-row lg:flex-col justify-around space-x-3 lg:justify-end space-y-1 items-center align-middle">
              {/* Course Price */}
              <div className="coursePrice text-center my-1 font-semibold text-lg">
                Rs. 200
              </div>
              {/* Course Rating */}
              <div className="courseRating">
                <div className="flex items-center justify-center"></div>
                <p className="ml-2 my-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  4.0 / 5.0
                </p>
              </div>
              {/* Enroll Now Option */}
              <div className=" text-black hover:text-black flex items-center">
                <NavLink to="/">
                  Enroll Now <span className="text-xl">&gt;</span>
                </NavLink>
              </div>
            </div>

            <div
              className="wishlist absolute top-5 left-5 cursor-pointer bg-[#ffffff9c] rounded-full p-1 w-8 h-8 flex justify-center items-center"
              onClick={() => {
                setIsWishlist(!isWishlist);
              }}
            >
              {isWishlist ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 47.5 47.5"
                    id="heart"
                    className="w-7 h-7"
                  >
                    <defs>
                      <clipPath id="a">
                        <path d="M0 38h38V0H0v38Z" />
                      </clipPath>
                    </defs>
                    <g
                      clipPath="url(#a)"
                      transform="matrix(1.25 0 0 -1.25 0 47.5)"
                    >
                      <path
                        fill="#dd2e44"
                        d="M3.067 25.68c0 8.799 12.184 12.06 15.933 1.874 3.749 10.186 15.933 6.925 15.933-1.874C34.933 16.12 19 3.999 19 3.999S3.067 16.12 3.067 25.68"
                      />
                    </g>
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 512 512"
                    id="heart"
                  >
                    <path d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-80.764 329.257l-4.219 3.873-8.617 7.773-8.616-7.772-4.214-3.869c-50.418-46.282-93.961-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.931 23.715-59.316C118.957 104.445 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.661l24.489-29.116C297.63 108.167 323.465 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.229 432 179.095c0 29.033-12.467 57.459-40.422 92.171-28.784 35.74-72.325 75.709-122.742 121.991z"></path>
                  </svg>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
