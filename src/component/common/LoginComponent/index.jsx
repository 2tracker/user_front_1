import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";

function Login() {
  const [loginData, setLoginData] = useState([{ email: "" }]);
  const [otpPage, setOtpPage] = useState(false);
  const [otp, setOtp] = useState("");

  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center relative">
        <div className="absolute bg-login-page inset-0 z-0 max-[479px]:!h-full"></div>
        <div className="container mx-auto !px-20 max-[1200px]:!px-0 max-[1024px]:!px-8  max-[991px]:min-w-full max-[479px]:px-4">
          <div className="min-h-screen grid grid-cols-2 mx-0 justify-center gap-8 max-[991px]:gap-0 max-[576px]:grid-cols-1  max-[576px]:content-center	">
            <div className="flex-col flex  self-center p-10 max-[1024px]:!px-0 sm:max-w-5xl xl:max-w-2xl  z-10 max-[479px]:!pt-0">
              <div className="self-start  lg:flex flex-col  text-black max-[576px]:self-center max-[576px]:text-center">
                <img src="" className="mb-3" alt=""/>
                <h1 className="mb-3 font-bold text-5xl opacity-[0.6] max-[991px]:text-[42px] max-[771px]:text-[36px] max-[479px]:text-[32px]">
                  Hi ? Welcome Back{" "}
                </h1>
                <p className="pr-3 max-[576px]:pr-0">
                  To keep connected with us please login with your personal
                  details
                </p>
              </div>
            </div>
            <div className="flex justify-center self-center  z-10 w-[80%] mx-auto max-[1024px]:w-full">
              <div className="p-12 bg-login-box mx-auto max-[576px]:p-8 ">
                <div className="mb-4">
                  <h3 className="font-semibold text-2xl text-gray-800">
                    {otpPage ? "Otp For Login" : "Sign In to Track"}
                  </h3>
                  <p className="text-gray-500 pt-1">
                    Please sign in to your account.
                  </p>
                </div>
                {!otpPage ? (
                  <div className="space-y-5">
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                        Email OR Number
                      </label>
                      <input
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                        type="email"
                        placeholder="mail@gmail.com"
                        onChange={(e) => {
                          setLoginData({ ...loginData, email: e.target.value });
                        }}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center bg-blue-400  hover:bg-blue-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                        
                      >
                        Sign in
                      </button>
                    </div>
                    <div className="!mt-0 ">
                      <p className="text-center text-[12px] pt-4">
                        If You Have No Account{" "}
                        <Link to="/signup">
                          <span className="text-blue-400 text-[14px] cursor-pointer">
                            Sign Up
                          </span>{" "}
                        </Link>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div>
                      <p  className="mb-4 font-semibold">Enter OTP</p>
                      </div>
                    <OTPInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={4}
                      renderSeparator={<span> </span>}
                      renderInput={(props) => <input {...props} />}
                      inputStyle="border text-black border-blue-200 text-[16px] rounded-lg mx-3 h-[46px] otp-width"
                    />
                    <div>
                      <button
                        type="submit"
                        className="w-full mt-10 flex justify-center bg-blue-400  hover:bg-blue-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                      
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
