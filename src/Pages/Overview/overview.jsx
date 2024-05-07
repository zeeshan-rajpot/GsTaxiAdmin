import { React, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Searchbar from "../../Components/Searchbar";
import CoulmnChart from "./CoulmnChart";
import DonutChart from "./DonutChart";
// import "./overview.css";

const OverView = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-2 lg:col-span-2  ">
          <Sidebar
          actTab='overview'
           />
        </div>
        <div className="col-span-8 lg:col-span-8 bg-[#F2FAFF] h-screen">
          <div className="flex justify-between mt-1 lg:mt-8 w-[95%] m-auto">
            <div>
              <Searchbar />
            </div>
            <div className="flex space-x-3">
              <img src="notification.svg" alt="norification_icon" />
              <img src="person.svg" alt="person_icon" />
            </div>
          </div>
          <hr className="mt-2 w-[95%] m-auto" />
          <div className="w-[95%] m-auto">
            <h1 className="text-2xl md:text-4xl	mt-6 mb-2 font-semibold">Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 md:mr-6">
            <div className="mt-0 md:mt-2 mx-2">
             <CoulmnChart/>
            </div>
            <div className="mb-2 mx-2">
              <DonutChart />
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverView;
