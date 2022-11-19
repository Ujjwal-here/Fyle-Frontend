import React from "react";
import { MdLocationPin } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BiLink } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FcOrganization } from "react-icons/fc";

const Details = ({ details }) => {
  return (
    <div className="lg:mx-44 my-24 sm:mx-10">
      <div className="flex lg:flex-wrap sm:flex-nowrap mb-4 ">
        <img
          className="inline object-cover sm:h-32 sm:w-32 lg:w-40 lg:h-40  mr-2 rounded-full"
          src={details.avatarUrl}
          alt="avatar"
        />
        <div className="sm:ml-10 lg:ml-20 my-2 md:max-w-md sm:max-w-sm lg:max-w-lg">
          {details.name && (
            <h1 className="font-black justify-self-start bg-blue text-white break-all lg:text-3xl sm:text-2xl">{details.name}</h1>
          )}
          {details.login && (
            <h1 className="font-thin text-white break-all lg:text-xl sm:text-lg">{details.login}</h1>
          )}
          {details.bio && (
            <h1 className="font-light text-white break-all lg:text-md my-2 sm:text-sm">
              {details.bio}
            </h1>
          )}
          <div className="flex flex-row">
            {details.location && (
              <>
                <MdLocationPin size={20} className="mr-2 text-yellow-400" />
                <h1 className="font-normal break-all text-yellow-400 sm:text-sm">
                  {details.location}
                </h1>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="bg-[#1B191A] my-12 p-4 rounded">
        {details.email && (
          <div className="bg-[#1B191A] my-1 flex flex-row">
            <HiOutlineMail
              size={20}
              className="mr-2 bg-[#1B191A] text-yellow-400"
            />
            <h1 className="bg-[#1B191A] break-all font-light text-white text-sm">
              {details.email}
            </h1>
          </div>
        )}
        {details.company && (
          <div className="bg-[#1B191A] my-2 flex flex-row">
            <FcOrganization
              size={20}
              className="mr-2 bg-[#1B191A] text-yellow-400"
            />
            <h1 className="bg-[#1B191A] break-all font-light text-white text-sm">
              {details.company}
            </h1>
          </div>
        )}
        {details.twitterUsername && (
          <div className="bg-[#1B191A] my-2 flex flex-row">
            <AiFillTwitterCircle
              size={20}
              className="mr-2 bg-[#1B191A] text-yellow-400"
            />
            <h1 className="bg-[#1B191A] break-all font-light text-white text-sm">
              {details.twitterUsername}
            </h1>
          </div>
        )}
        {details.url && (
          <div className="bg-[#1B191A] my-2 flex flex-row">
            <BiLink size={20} className="mr-2 bg-[#1B191A] text-yellow-400" />
            <h1 className="bg-[#1B191A] break-all font-light text-white text-sm">
              {details.url}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
