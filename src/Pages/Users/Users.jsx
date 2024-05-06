import { React, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
// import LineChart from "./LineChart";
// import DonutChart from "./DonutChart";
// import "./overview.css";

const Users = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-2 lg:col-span-2  ">
          <Sidebar />
        </div>
        <div className="col-span-8 lg:col-span-8 ">
          <div className=" mt-1 lg:mt-8 mx-4">
            <h1 className="text-red-400 font-semibold text-3xl lg:text-5xl">
              Users
            </h1>
            <hr className="mt-2 w-full border-red-100" />
          </div>
          {/* <div className="flex justify-between mt-2 lg:mt-6 mx-4">
            <h1 className="font-bold text-2xl md:text-4xl ">App statistic</h1>
            <div className="relative">
              <button
                className="bg-filter-button text-white rounded-3xl py-1 px-4 sm:hidden "
                onClick={toggleDropdown}
              >
                Filter
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-44 bg-white rounded-md shadow-lg">
                  <div className="py-1">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                      30 days
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                      90 days
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                      6 months
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                      12 months
                    </button>
                  </div>
                </div>
              )}
              <div className="sm:block hidden space-x-8 mx-6">
                <button className="bg-filter-button text-white rounded-3xl py-3 px-4">
                  30 days
                </button>
                <button className="bg-gray-100  rounded-3xl py-3 px-4">
                  90 days
                </button>
                <button className="bg-gray-100  rounded-3xl py-3 px-4">
                  6 months
                </button>
                <button className="bg-gray-100  rounded-3xl py-3 px-4">
                  12 months
                </button>
              </div>
            </div>
          </div> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 md:mr-6">
            <div className="mt-0 md:mt-2 mx-2">
              <LineChart />
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2 mt-2 mx-2 mb-0 md:mb-3">
                <div className="bg-gray-100 px-6 py-4 rounded-3xl">
                  <div className="flex justify-between mb-2">
                    <img src="usersIcon.svg" alt="usersIcon" />
                    <div className="flex items-center">
                      <img src="dropUp.svg" alt="dropup_icon" />
                      <p>12%</p>
                    </div>
                  </div>
                  <h1 className="text-xl font-semibold md:text-3xl">326.60k</h1>
                  <p className="">Number of users</p>
                </div>
                <div className="bg-gray-100 px-6 py-4 rounded-3xl">
                  <div className="flex justify-between mb-2">
                    <img src="paymentIcon.svg" alt="payment_icon" />
                    <div className="flex items-center">
                      <img src="dropdown.svg" alt="dropup_icon" />
                      <p>12%</p>
                    </div>
                  </div>
                  <h1 className="text-xl font-semibold md:text-3xl">$42,344</h1>
                  <p className="whitespace-nowrap">Payment Withdraw</p>
                </div>
              </div>
            </div>
            <div className="mb-2 mx-2">
              <DonutChart />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Users;
