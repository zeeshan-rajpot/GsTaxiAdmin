import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
              src="sideLogo.svg"
              alt="sidebar_logo"
              className="w-24 md:28 xl:w-48 2xl:w-56  "
            />
          </div>
          <ul className="space-y-3 font-medium">
            <li>
              <NavLink to="/overview" className="flex items-center ">
                <span className="mr-3">
                  <img src="dotIcon.svg" alt="dot_Icon" className="hidden" />
                </span>
                <img
                  src="overviewIcon.svg"
                  alt="overview_Icon"
                  className="w-8"
                />
                <span className="ms-3 text-white font-normal ">Overview</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className="flex items-center ">
                <span className="mr-3">
                  <img src="dotIcon.svg" alt="dot_Icon" className="hidden" />
                </span>
                <img src="userIcon.svg" alt="user_Icon" className="w-8" />
                <span className="ms-3 text-white ">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/videos" className="flex items-center">
                <span className="mr-3">
                  <img src="dotIcon.svg" alt="dot_Icon" className="hidden" />
                </span>
                <img src="videoIcon.svg" alt="Video_Icon" className="w-8" />
                <span className="ms-3 text-white ">Videos</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/withdawl" className="flex items-center ">
                <span className="mr-3">
                  <img src="dotIcon.svg" alt="dot_Icon" className="hidden" />
                </span>
                <img src="moneyIcon.svg" alt="money_Icon" className="w-8" />
                <span className="ms-3 text-white ">Withdraw Request</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/passwordChange" className="flex items-center ">
                <span className="mr-3">
                  <img src="dotIcon.svg" alt="dot_Icon" className="hidden" />
                </span>
                <img src="lockIcon.svg" alt="lock_Icon" className="w-8" />
                <span className="ms-3 text-white ">Change Password</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/reported" className="flex items-center ">
                <span className="mr-3">
                  <img src="dotIcon.svg" alt="dot_Icon" className="hidden" />
                </span>
                <img src="reportIcon.svg" alt="report_Icon" className="w-8" />
                <span className="ms-3 text-white ">Reported video</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/conditions" className="flex items-center ">
                <span className="mr-3">
                  <img src="dotIcon.svg" alt="dot_Icon" className="hidden" />
                </span>
                <img src="termsIcon.svg" alt="Terms_Icon" className="w-8" />
                <span className="ms-3 text-white ">Terms & Conditions</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/policy" className="flex items-center ">
                <span className="mr-3">
                  <img src="dotIcon.svg" alt="dot_Icon" className="hidden" />
                </span>
                <img src="privacyIcon.svg" alt="Policy_Icon" className="w-8" />
                <span className="ms-3 text-white ">Privacy Policy</span>
              </NavLink>
            </li>
            <li>
              <Link to="/" className="flex items-center ">
                <span className="mr-3">
                  <img src="dotIcon.svg" alt="dot_Icon" className="hidden" />
                </span>
                <img src="logoutIcon.svg" alt="logout_Icon" className="w-8" />
                <span className="ms-3 text-white ">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
