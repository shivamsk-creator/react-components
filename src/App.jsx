import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Dashboard from "./Dashboard";
import NoPage from "./NoPage";
import Profile from "./Profile";
import Products from "./Products";
import Notification from "./Notification";
import AntdDashboard from "./AntdDashboard";
import Clients from "./contact-page/Clients";
import Portfolio from "./contact-page/Portfolio";
import Story from "./contact-page/Story";
import Login from "./Login";
import Protected from "./Protected";

const App = () => {
  const path = window.location.pathname;
  console.log(path);
  return (
    <>
      <BrowserRouter>
        <Nav />
        {/* <DashSideMenu /> */}
        <Routes>
          <Route
            path="/"
            exact={true}
            element={<Protected Component={Home} />}
          />
          <Route
            path="/dashboard"
            exact={true}
            element={<Protected Component={Dashboard} />}
          />
          <Route path="/about" exact={true} element={<About />} />
          <Route path="/contact" exact={true} element={<Contact />}>
            {/* Nested Routes Of Contact Page  */}
            <Route path="story" exact={true} element={<Story />} />
            <Route path="portfolio" exact={true} element={<Portfolio />} />
            <Route path="clients" exact={true} element={<Clients />} />
          </Route>
          <Route path="/profile" exact={true} element={<Profile />} />
          <Route path="/products" exact={true} element={<Products />} />
          <Route path="/antd" exact={true} element={<AntdDashboard />} />
          <Route path="/login" exact={true} element={<Login />} />
          <Route
            path="/notifications"
            exact={true}
            element={<Notification />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
