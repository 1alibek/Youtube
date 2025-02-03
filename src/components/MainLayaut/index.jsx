import React from "react";
import Sidebar from "../sidebar";
import Main from "../main";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="bg-black">
          <Main />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
