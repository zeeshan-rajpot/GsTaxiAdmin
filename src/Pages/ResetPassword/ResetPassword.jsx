import React from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <div className="container flex flex-col justify-center items-center h-screen">
        <img src="loginIcon.svg" alt="login_Icon" className="w-32 lg:w-52 " />
        <h1 className="font-medium text-xl lg:text-2xl">Reset password</h1>
        <form
          className="space-y-4 md:space-y-6  w-9/12 md:w-5/12 lg:w-4/12 mt-12"
          action="#"
        >
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-normal text-login ml-4"
            >
              New password{" "}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="••••••••"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-normal text-login ml-4"
            >
              Confirm password{" "}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="••••••••"
              required=""
            />
          </div>

          <div>
            <Link to="/verification">
              <button
                type="submit"
                className="w-full text-white bg-lightBlue font-medium rounded-3xl text-sm px-5 py-2.5 text-center "
              >
                Verify
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
