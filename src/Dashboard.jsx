import React, { useEffect, useState } from "react";
import DashSideMenu from "./DashSideMenu";
import { useSearchParams } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("age"));
  console.log(searchParams.get("city"));
  console.log(searchParams);

  useEffect(() => {
    //   Fetch API
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
        //   console.log(json);
      });
  }, []);

  return (
    <>
      <section className="pb-20 pt-10">
        <div className="dashboard flex">
          <DashSideMenu />

          <div className="w-full flex flex-col justify-center">
            <h2 className="text-center text-3xl my-4">My Data</h2>

            <table className="table-auto bg-gray-300 rounded-md p-5 w-fit mx-auto shadow-2xl">
              <thead>
                <tr>
                  <th className="px-3 text-center py-2 border">Name</th>
                  <th className="px-3 text-center py-2 border">Email</th>
                  <th className="px-3 text-center py-2 border">Password</th>
                  <th className="px-3 text-center py-2 border">Mobile</th>
                  <th className="px-3 text-center py-2 border">Date</th>
                  <th className="px-3 text-center py-2 border">Time</th>
                </tr>
              </thead>
              <tbody>
                {users.map((cust, index) => {
                  console.log(cust);
                  return (
                    <tr key={index}>
                      <td className="px-3 text-center py-2 border">
                        {cust.name}
                      </td>
                      <td className="px-3 text-center py-2 border">
                        {cust.email}
                      </td>
                      <td className="px-3 text-center py-2 border">
                        {cust.password}
                      </td>
                      <td className="px-3 text-center py-2 border">
                        {cust.mobile}
                      </td>
                      <td className="px-3 text-center py-2 border">
                        {cust.date}
                      </td>
                      <td className="px-3 text-center py-2 border">
                        {cust.time}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
