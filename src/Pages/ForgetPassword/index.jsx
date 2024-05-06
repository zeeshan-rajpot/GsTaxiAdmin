import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="h-screen hidden lg:flex  justify-center items-center">
          <img
            src="/forgetPassword.png"
            alt="forgetPassword_background"
            className="w-[80%]"
          />
        </div>
        <div className="container flex flex-col justify-center items-center h-screen">
          <img src="loginIcon.svg" alt="login_Icon" className="w-32 lg:w-52 " />
          <h1 className="font-medium text-xl lg:text-2xl">Forget Password</h1>
          <form
            className="space-y-4 md:space-y-6  w-9/12 md:w-6/12 mt-12"
            action="#"
          >
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-normal text-login ml-4"
              >
                Enter Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com"
                required=""
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full text-white bg-lightBlue font-medium rounded-3xl text-sm px-5 py-2.5 text-center "
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default index;
