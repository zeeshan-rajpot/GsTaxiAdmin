import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex lg:hidden">
          <img
            src="/iArab_is_the_goto_platform_for_Arab_content_cre 1 1.svg"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 w-[54px] "
          />
          <img
            src="/Group 1171274935.svg"
            alt=""
            className="inline-flex items-center p-2 mt-2  w-[74px] "
          />
        </div>
        <button
          onClick={toggleSidebar}
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 mr-3"
        >
          <span className="sr-only">
            {isOpen ? "Close sidebar" : "Open sidebar"}
          </span>

          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-[17rem] 2xl:w-80 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-screen md:h-[98vh] px-3 py-4  overflow-y-auto bg-sidebar md:m-3 md:rounded-3xl">
          <div className="flex justify-center items-center mb-4">
            <img
              src="loginIcon.svg"
              alt="loginIcon_logo"
              className="w-32 md:w-40"
            />
          </div>
          <ul className="space-y-3 font-medium flex flex-col  ">
            <li>
              <NavLink
                to="/overview"
                className={`flex items-center justify-center ${
                  activeTab === "overview" ? "active-tabbbb" : ""
                }`}
                onClick={() => handleTabClick("overview")}
              >
                <img
                  src="ic_round-dashboard.svg"
                  alt="overview_Icon"
                  className="w-8"
                />
                <span className="ms-3 text-trueGray text-xl lg:text-xl font-normal justify-center">
                  Overview
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className="pl-8 flex items-center mx-2 rounded-xl py-2 px-1"
              >
                <img
                  src="solar_user-bold.svg"
                  alt="user_Icon"
                  className="w-8"
                />
                <span className="ms-3 text-trueGray text-xl lg:text-xl font-normal justify-center ">
                  Users
                </span>
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group"
                onClick={toggleDropDown}
              >
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Driver
                </span>
                <svg
                  className={`w-3 h-3 transform transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              z
              {isOpen && (
                <ul className="py-2 space-y-2">
                  <li>
                    <Link
                      to="/approve"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group "
                    >
                      Approve
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pending"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group "
                    >
                      Pending
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="/rates" className="flex items-center ">
                <span className="mr-3">
                  <img src="dotIcon.svg" alt="dot_Icon" className="hidden" />
                </span>
                <img src="lockIcon.svg" alt="lock_Icon" className="w-8" />
                <span className="ms-3  ">Ride Rates</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/restaurants" className="flex items-center ">
                <span className="mr-3">
                  <img src="dotIcon.svg" alt="dot_Icon" className="hidden" />
                </span>
                <img src="reportIcon.svg" alt="report_Icon" className="w-8" />
                <span className="ms-3  ">Notification</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
