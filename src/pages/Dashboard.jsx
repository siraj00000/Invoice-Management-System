import React from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Sidebar } from "../components";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content={"Settings"} position={"Top"}>
          <button
            type="button"
            className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
            style={{ background: "#404041", borderRadius: "50%" }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
        <Sidebar />
      </div>
      <div
        className={
          "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full overflow-hidden"
        }
      >
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;