import React from "react";
import { Link } from "react-router-dom";

function Cards({ data, title }) {
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24] ">
      {data.map((item, index) => (
        <Link key={index} className="w-[25vh] relative mr-[5%] mb-[5%] ">
          <img
            className=" rounded-sm shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover "
            src={`https://image.tmdb.org/t/p/original/${
              item.poster_path || item.backdrop_path || item.profile_path
            }`}
            alt=""
          />
          <h1 className="text-lg text-zinc-300 mt-3 font-semibold  ">
            {item.name ||
              item.title ||
              item.original_name ||
              item.original_title}
          </h1>
           
           {item.vote_average && <div className="absolute right-[-13%] rounded-full text-lg bottom-[30%] font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] flex items-center justify-center ">
            {(item.vote_average *10).toFixed()}<sup>%</sup>
           </div> }
        </Link>
      ))}
    </div>
  );
}

export default Cards;
