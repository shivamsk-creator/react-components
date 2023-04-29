import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const onLoginClick = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };

  useEffect(() => {
    let login = localStorage.getItem("login");
    console.log(login);

    if (login) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="flex flex-col w-48 justify-center my-20 text-center mx-auto">
        <input
          type="text"
          className="border border-orange-500 rounded-md p-2 m-1"
          name=""
          id=""
          placeholder="Email"
        />
        <input
          type="text"
          className="border border-orange-500 rounded-md p-2 m-1"
          name=""
          id=""
          placeholder="Password"
        />
        <button
          onClick={onLoginClick}
          className="border border-green-500 m-1 p-2 rounded-md"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
