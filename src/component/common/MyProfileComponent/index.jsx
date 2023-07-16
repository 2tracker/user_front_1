import React from "react";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { SlUserFollowing } from "react-icons/sl";


function MyProfileComponent() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="p-6">
          <div className="bg-white rounded-lg  box-profile">
              <img src="images/profilebg.jpg" className="rounded-tr-lg rounded-tl-lg" />
            
            <div className="grid grid-cols-3 relative items-end p-0 ">
          
            <div className="flex items-center m-6 gap-16 justify-center">
                <div>
                    <BsFillFileEarmarkPostFill className="mx-auto w-6 h-auto mb-1"/>
                    <h4 className="text-[25px] font-medium">938</h4>
                    <h6 className="text-[16px] font-normal">post</h6>
                </div>
                <div>
                    <CgProfile className="mx-auto w-6 h-auto mb-1"/>
                    <h4 className="text-[25px] font-medium">3,586</h4>
                    <h6 className="text-[16px] font-normal">Followers</h6>
                </div>
                <div>
                    <SlUserFollowing className="mx-auto w-6 h-auto mb-1"/>
                    <h4 className="text-[25px] font-medium">2,659</h4>
                    <h6 className="text-[16px] font-normal">Following</h6>
                </div>

            </div>
            <div className="absolute left-0 right-0 bottom-12">
              <div class="">
                <div class="w-24 h-24 rounded-full p-1.5 profile-bg mx-auto">
                  <img
                    alt="profileImage"
                    src="/images/user-2.jpg"
                    class="rounded-full"
                  />
                </div>
              </div>
              <div class="pt-2">
                <h5 class="">Julia Roberts</h5>
                <h6 class="">Project Manager</h6>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfileComponent;
