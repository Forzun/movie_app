import React from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-3 overflow-y-auto">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="text-2xl">SCSDB</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-lg gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-4">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="mr-1 ri-fire-fill"></i>Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-bard-fill"></i>Pouler
        </Link>
        <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-bard-fill"></i>Movie
        </Link>
        <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-movie-fill"></i>Tv Show
        </Link>
        <Link to="/people" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-team-fill"></i>people
        </Link>
      </nav>
      <div className="line border-b-2 rounded-lg bg-zinc-400 mt-5"></div>
      <nav className="flex flex-col text-zinc-400 text-lg gap-3">
        <h1 className="text-white font-bold text-xl mt-4 mb-4">
          Website information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-1 ri-information-fill"></i>About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-2 ri-phone-fill"></i>Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
