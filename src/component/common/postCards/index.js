import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { TbMessage2 } from "react-icons/tb";
import { RxDot } from "react-icons/rx";
import { Link } from "react-router-dom";
import { PostcardsData } from "../../../utils/alljsonfile/postCards";

function PostCard() {
  return (
    <div className="container mx-auto">
      <div className="p-6">
        <div className="p-[30px] bg-[#ecf2ff] rounded-lg text-left mb-6">
          <h4 className="text-[22px] text-[#2A3547] font-semibold">Blog App</h4>
          <p className="text-[14px] text-[#2A3547]">Get the latest news</p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {PostcardsData?.map((postdata, index) => {
            return (
              <div key={index}>
                <div className="border border-gray-200 rounded-lg shadow">
                  <div className="">
                    <Link className="relative" href="#">
                      <img
                        src={postdata?.postimageblog}
                        className="rounded-t-lg"
                      />
                      <div className="bg-white rounded-full inline-flex h-[24px] justify-center items-center max-w-full absolute bottom-8 right-8">
                        <span className="px-2 text-[12px] font-semibold">
                          {postdata?.postreadtime}
                        </span>
                      </div>
                      <div className="w-10 h-10 absolute  bottom-[-3%] ">
                        <img
                          alt="profileImage"
                          src={postdata?.postuser}
                          className="rounded-full absolute left-7"
                        />
                      </div>
                    </Link>
                    <div className="bg-white p-6 rounded-b-lg text-left">
                      <div className="bg-[#00000014] rounded-full inline-flex h-[24px] justify-center items-center max-w-full">
                        <span className="px-2 text-[12px] font-semibold">
                        {postdata?.posttype}
                        </span>
                      </div>
                      <div className="py-6">
                        <Link className="text-[22px] font-semibold" href="#">
                        {postdata?.posttitle}
                        </Link>
                        <div className="long-and-truncated">
                          <p className="pt-2">
                            <b>Short Content</b> {postdata?.postsub}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div className="flex items-center">
                            <AiOutlineEye className="w-5 h-auto" />{" "}
                            <p className="text-[16px] ml-2 text-[#2a3547]">
                            {postdata?.postviewdata}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <TbMessage2 className="w-5 h-auto" />{" "}
                            <p className="text-[16px] ml-2 text-[#2a3547]">{postdata?.posttotalmsg}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <RxDot className="w-5 h-auto" />{" "}
                          <p className="text-[16px] ml-1 text-[#2a3547]">
                          {postdata?.postdate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
