import React from "react";
import { FaFolder } from "react-icons/fa";
import { TbGitFork } from "react-icons/tb";
import { IoMdHeart } from "react-icons/io";

const UserRepos = ({ repos }) => {
  return (
    <>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-44 my-12 sm:mx-10">
        {repos.nodes.map((repo) => {
          return (
            <div
              key={repo.id}
              className=" rounded overflow-hidden shadow-lg bg-[#1B191A]"
            >
              <div className="px-6 pt-8 pb-4 bg-[#1B191A]">
                <p className="font-bold lg:text-2xl text-2xl break-all whitespace-normal text-white mb-2 bg-[#1B191A]">
                  {repo.name}
                </p>
                <p className="font-thin text-sm break-all text-[#FD413C] bg-[#1B191A]">
                  {repo.nameWithOwner}
                </p>
                <p className="text-white font-light break-all text-sm bg-[#1B191A] mt-4">
                  {repo.description === null
                    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia ligula id nibh fermentum pharetra. In ipsum turpis, tempor ut sapien in, aliquam congue erat."
                    : repo.description}
                </p>
              </div>
              <div className="px-6 pb-4 bg-[#1B191A]">
                <>
                  {repo.languages.nodes.map((lang) => {
                    return (
                      <span className="inline-block rounded px-3 py-1 text-sm font-extralight border border-yellow-800 text-white mr-2 mb-2">
                        {lang.name}
                      </span>
                    );
                  })}
                </>
              </div>
              <div className="px-6 pb-4 bg-[#1B191A] flex content-end flex-row text-sm text-white">
                <FaFolder
                  className="bg-[#1B191A] mr-2 text-yellow-400"
                  size={18}
                />
                {repo.isPrivate === false ? "Public" : "Private"}
                <IoMdHeart
                  className="bg-[#1B191A] ml-6 mr-2 text-red-600"
                  size={18}
                />
                {repo.stargazerCount}
                <TbGitFork
                  className="bg-[#1B191A] ml-6 mr-2 text-[#009DB8]"
                  size={18}
                />
                {repo.forkCount}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserRepos;
