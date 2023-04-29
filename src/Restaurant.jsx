import React from "react";

const Restaurant = () => {
  return (
    <>
      <div>
        <div className="card-container">
          <div className="card border w-72 bg-orange-200 rounded-lg m-2 p-5">
            <div className="card-body">
              <span className="px-2 py-1 bg-red-500 rounded-full mx-2">1 </span>
              <span>Breakfast</span>
              <h2 className="text-2xl font-semibold py-2">Maggie</h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit architecto illum libero, veritatis incidunt
                excepturi laudantium natus eveniet consequuntur sapiente.
              </p>
              <div>Read</div>
              {/* <img src={image} alt="" /> */}
              <span>Order Now</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
