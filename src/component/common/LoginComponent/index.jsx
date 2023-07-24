import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import { LoginApi, SendOtp } from "../../../auth/userApi";
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const [loginData, setLoginData] = useState([]);
  const [otpPage, setOtpPage] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate()

  // ------------useEffect-----------

  useEffect(()=>{
    setLoginData({
      ...loginData,
      otp:otp
    })
  },[otp])

  // ============= handle Function ============

  const handleChange = (e) =>{
    var str = e.target.value;
   const numberRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
   if(numberRegex.test(str.charAt(0))){
    setLoginData({
      ...loginData,
      mobileNumber:e.target.value
    })
   }else{
    setLoginData({
      ...loginData,
      email:e.target.value
    })
   }
  }
  const handleClick = () =>{
    SendOtp({loginData}).then((res)=>{
      console.log('page calling',res)
      if(res){
        toast.success(`Success OTP :-${res.otp}`);
        setTimeout(()=>{
          setOtpPage(true)
        },[2000])
      }
    }).catch((err)=>{
      console.log(err,"err");
      toast.error(err.response.data.error);
      setLoginData([])
    })
  }
  
  const handleLogin = () =>{
    if(loginData?.otp){
    LoginApi({loginData}).then((res)=>{
      if(res){
        toast.success(res?.MSG);
        localStorage.setItem('token',res.Token);
        setTimeout(()=>{
          navigate('/dashboard')
        },[2000])
      }
      console.log('login api page :-',res);
    }).catch((err)=>{
      console.log(err,"err");
    })
  }
  }
  return (
    <div>
      <Toaster />
      <div className="bg-no-repeat bg-light-blue bg-cover bg-center relative">
        <div className="container mx-auto !px-20 max-[1200px]:!px-0 max-[1024px]:!px-8  max-[991px]:min-w-full max-[479px]:!px-4 ">
          <div className="min-h-screen mx-0 py-20 max-[1600px]:py-16 max-[576px]:py-10 justify-center gap-8 max-[991px]:gap-0 max-[576px]:content-center flex" >
            <div className="	grid grid-cols-2 py-20  items-center bg-white rounded-xl max-[834px]:px-4 max-[576px]:grid-cols-1 max-[576px]:gap-4 max-[479px]:py-8">

            <div className=" h-full">
            <img src="images/login-side-img.svg" className="w-[80%] mx-auto h-full max-[834px]:w-[90%]"/>
            </div>
            <div>
              <div className="pb-5">
                <h3 className="font-semibold text-2xl text-gray-800">
                  Sign In to Company Name
                </h3>
              </div>

              <div className="flex justify-center self-center  z-10 w-[80%] mx-auto max-[1024px]:w-full">
                <div className="p-12 bg-login-box mx-auto max-[576px]:p-8 bg-light-blue rounded-lg shadow-lg ">
                  <div className="mb-4">
                    <p className="text-gray-500 pt-1">
                      Please sign in to your account.
                    </p>
                  </div>
                  {!otpPage ? (
                    <div className="space-y-5">
                      <div className="space-y-5 text-left">
                        <label className="text-sm font-medium text-gray-700 tracking-wide">
                          Email OR Number
                        </label>
                        <input
                          className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                          type="email"
                          placeholder="mail@gmail.com"
                          onChange={(e) => {
                           handleChange(e)
                          }}
                        />
                      </div>
                      {/* <div className="space-y-2 text-left">
                        <label className="text-sm font-medium text-gray-700 tracking-wide">
                          Password
                        </label>
                        <input
                          className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                          type="password"
                          placeholder="password"
                        />
                      </div> */}
                      <div>
                        <button
                          type="button"
                          onClick={(e)=>handleClick(e)}
                          className="w-full flex justify-center bg-blue-400  hover:bg-blue-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                        >
                          Sign in
                        </button>
                      </div>
                      {/* <div className="!mt-0 ">
                        <p className="text-center text-[12px] pt-4">
                          If You Have No Account{" "}
                          <Link to="/signup">
                            <span className="text-blue-400 text-[14px] cursor-pointer">
                              Sign Up
                            </span>{" "}
                          </Link>
                        </p>
                      </div> */}
                    </div>
                  ) : (
                    <div>
                      <div>
                        <p className="mb-4 font-semibold">Enter OTP</p>
                      </div>
                      <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        renderSeparator={<span> </span>}
                        renderInput={(props) => <input {...props}/>}
                        inputStyle="border text-black border-blue-200 text-[16px] rounded-lg mx-3 h-[46px] otp-width"
                      />
                      <div>
                        <button
                          type="button"
                          onClick={handleLogin}
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
      </div>
    </div>
  );
}

export default Login;
