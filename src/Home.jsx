import { DatePicker } from "antd";
import React from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("city"));
  return (
    <>
      <div className="flex space-x-5">
        <div>Home</div>
        <DatePicker />
      </div>
    </>
  );
};

export default Home;
