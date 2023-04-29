import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(3);
  const [counts, setCounts] = useState(3);
  useEffect(() => {
    document.title = `Chats (${count})`;
    console.log("Use Efffect Rendered");
  }, [count]);
  return (
    <>
      <div className="border max-w-sm text-center m-10 p-5 flex flex-col justify-center">
        <span className="font-semibold text-4xl">{count}</span>
        <div className="flex space-3 justify-center my-3">
          <button
            type="button"
            className=" w-20 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            INCR
          </button>
          <button
            type="button"
            className=" w-20 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={() => {
              {
                count > 0 ? setCount(count - 1) : setCount(count);
              }
            }}
          >
            DECR
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
