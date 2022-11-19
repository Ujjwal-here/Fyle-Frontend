import React, { useState } from "react";

const Navbar = ({ setUsername }) => {
  // Get username from input
  const [user, setUser] = useState("");

  return (
    <nav className="flex items-center md:flex-nowrap sm:justify-between md:justify-between flex-wrap sm:flex-nowrap bg-[#1B191A] sm:px-10 py-6 lg:px-20">
      <div className="flex items-center flex-shrink-0 text-white bg-[#1B191A] mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2 bg-[#1B191A]"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl bg-[#1B191A] tracking-tight">
          GitFyle
        </span>
      </div>
      <div className="w-full block flex lg:items-center lg:w-auto bg-[#1B191A]">
        <input
          class="w-72 appearance-none block w-full bg-[#101010] text-sm text-white border border-yellow-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:text-black"
          id="username"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          name="username"
          placeholder="Enter Username"
        />

        <button
          onClick={() => setUsername(user)}
          className="self-stretch inline-block text-sm ml-7 px-5 py-1 leading-none border rounded text-white border-[#FD413C] hover:border-transparent hover:bg-[#FD413C] lg:mt-0"
        >
          Fetch
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
