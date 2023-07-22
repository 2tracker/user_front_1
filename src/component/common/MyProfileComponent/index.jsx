import React from "react";
import { BsFillFileEarmarkPostFill , BsFacebook } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { SlUserFollowing } from "react-icons/sl";
import { RiComputerLine } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLogoFacebook , BiLogoTwitter , BiBriefcase } from "react-icons/bi";


function MyProfileComponent() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="p-6">
          <div className="bg-white rounded-lg  box-profile">
              <img src="images/profilebg.jpg" className="rounded-tr-lg rounded-tl-lg" />
            
            <div className="grid grid-cols-3 relative items-center py-0 px-6 ">
          
   
          
            <div className="flex items-center m-6 gap-16 justify-center">
                <div>
                    <BsFillFileEarmarkPostFill className="mx-auto w-6 h-auto mb-1"/>
                    <h4 className="text-[25px] font-medium">938</h4>
                    <h6 className="text-[16px] font-normal">post</h6>
                </div>
                <div>
                    <CgProfile className="mx-auto w-6 h-auto mb-1"/>
                    <h4 className="text-[25px] font-medium">3,586</h4>
                    <h6 className="text-[16px] font-normal">Total Members</h6>
                </div>
                {/* <div>
                    <SlUserFollowing className="mx-auto w-6 h-auto mb-1"/>
                    <h4 className="text-[25px] font-medium">2,659</h4>
                    <h6 className="text-[16px] font-normal">Following</h6>
                </div> */}

            </div>
            <div className="relative left-0 right-0 bottom-12">
              <div className="">
                <div className="w-24 h-24 rounded-full p-1.5 profile-bg mx-auto">
                  <img
                    alt="profileImage"
                    src="/images/user-2.jpg"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="pt-2">
                <h5 className="text-[18px] font-medium">Julia Roberts</h5>
                <h6 className="text-[16px] font-normal">Project Manager</h6>
              </div>
            </div>
            <div className="flex items-center justify-end gap-4">
                <div className="bg-[#1877f2]  rounded-full w-[30px] h-[30px] p-1">
                  <BiLogoFacebook className="text-white w-[22px] h-auto  "/>
                </div>
                <div className="bg-[#1877f2]  rounded-full w-[30px] h-[30px] p-1">
                  <BiLogoTwitter className="text-white w-[22px] h-auto"/>
                </div>
                <div className="bg-[#1877f2]  rounded-full w-[30px] h-[30px] p-1">
                  <AiFillYoutube className="text-white w-[22px] h-auto"/>
                </div>
                <div>
                  <button className="text-[14px] text-white bg-[#5d87ff] px-4 py-1.5 rounded-lg">Add To Story</button>
                </div>
            </div>
            </div>
          </div>
        </div>
          <div className="grid grid-cols-12 p-6 gap-6">
              <div className="col-span-4 p-6 border rounded-lg text-left">
                <h4 className="text-[22px] font-medium">Introduction</h4>
                <p className="text-[14px] mb-4">Hello, I am Julia Roberts. I love making websites and graphics. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="mb-6 flex items-center gap-2">
                  <BiBriefcase className="w-5 h-auto"/>
                    <p className="text-[16px] text-[#2a3547] font-medium">Sir, P P Institute Of Science</p>
                </div>
                <div className="mb-6 flex items-center gap-2">
                  <MdOutlineEmail className="w-5 h-auto"/>
                    <p className="text-[16px] text-[#2a3547] font-medium">xyzjonathan@gmail.com</p>
                </div>
                <div className="mb-6 flex items-center gap-2">
                  <RiComputerLine className="w-5 h-auto"/>
                    <p className="text-[16px] text-[#2a3547] font-medium">www.xyz.com</p>
                </div>
                <div className="mb-6 flex items-center gap-2">
                  <HiOutlineLocationMarker className="w-5 h-auto"/>
                    <p className="text-[16px] text-[#2a3547] font-medium">Newyork, USA - 100001</p>
                </div>
              </div>
              <div className="col-span-8  rounded-lg border">
                sdjchdcdckdscdschdsc
              </div>
          </div>
      </div>
    </div>
  );
}

export default MyProfileComponent;
