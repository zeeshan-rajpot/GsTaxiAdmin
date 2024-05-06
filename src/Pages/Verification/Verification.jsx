import React from "react";
import Otp from "./Otp";
import { Link } from "react-router-dom";

const Verification = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="h-screen hidden lg:flex  justify-center items-center">
          <img
            src="/verification.png"
            alt="verification_background"
            className="w-[80%]"
          />
        </div>
        <div className="container flex flex-col justify-center items-center h-screen">
          <img src="loginIcon.svg" alt="login_Icon" className="w-32 lg:w-52 " />
          <h1 className="font-medium text-xl lg:text-2xl">Verification Code</h1>
          <p className="font-normal text-sm my-1">
            Enter verification code which we sent on your email
          </p>
          <form
            className="space-y-4 md:space-y-6  w-9/12 md:w-6/12 mt-12"
            action="#"
          >
            <Otp />
            <div>
              <Link to="/resetPassword">
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
      </div>
    </>
  );
};

export default Verification;
