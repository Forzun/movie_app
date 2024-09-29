import axios from "../../utils/axios";
import React, { Profiler, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/no_image_found.jpg";

function Topnav() {
  const [query, setquery] = useState("");
  const [search, setsearch] = useState([]);

  const GetSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearch(data.results);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    GetSearch();
  },[query]);

  return (
    <div className="w-100% h-[10vh] relative  flex justify-start items-center ml-[15%] ">
      <i className="text-zinc-400 text-2xl ri-search-line"></i>
      <input
        onChange={(elem) => setquery(elem.target.value)}
        value={query}
        className="w-[60%] mx-4 text-lg text-white p-5 outline-none border-none bg-transparent "
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="cursor-pointer text-zinc-400 text-2xl ri-close-line"
        ></i>
      )}

      <div className="w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[100%] left-[5%] overflow-auto rounded ">
        {search.map((item, index) => (
          <Link
            key={index}
            className="text-zinc-600 font-semibold hover:bg-zinc-300 duration-300 hover:text-black flex items-center justify-start w-[100%] p-8 border-b-2 border-zinc-100"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded-md mr-5 shadow-md "
              src={
                item.backdrop_path || item.Profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      item.backdrop_path || item - Profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {item.name ||
                item.title ||
                item.original_name ||
                item.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;
