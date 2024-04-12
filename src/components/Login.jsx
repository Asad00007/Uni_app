import React from "react";
import Vector1 from "../images/Vector1.png";
import Page1 from "../images/Page 1.png";
import Logo from "../images/Logo.png";
import { FaArrowLeft, FaArrowRight, FaEye } from "react-icons/fa";
const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-between p-2 relative flex-1 h-screen">
        <img src={Vector1} alt="" className="absolute top-0 left-0" />
        <FaArrowLeft className="text-[#FFB000] text-2xl" />
        <div className="flex items-center justify-center flex-col">
          <img src={Page1} alt="" className="my-7" />
          <h1 className="font-[600] text-[30px] my-4">Request Ride</h1>
          <p className="text-center">
            Request a ride get picked up by a <br /> nearby community driver
          </p>
        </div>
        <FaArrowRight className="text-[#FFB000] text-2xl" />
      </div>
      <div className="flex h-screen flex-1 bg-[#FFB000] items-center justify-center px-2">
        <div className="flex items-center justify-center flex-col">
          <img src={Logo} alt="" />
          <h1 className="text-xl my-4">
            Sign in to <span className="text-white">UniShare</span>{" "}
          </h1>
          <form action="" className="flex flex-col gap-4">
            <div className="flex justify-between items-center bg-white p-3 rounded-md">
              <input
                type="email"
                placeholder="Email"
                required
                className="outline-none"
              />
            </div>
            <div className="flex justify-between items-center bg-white p-3  rounded-md">
              <input
                type="password"
                placeholder="Password"
                className="outline-none"
                required
              />
              <FaEye />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
