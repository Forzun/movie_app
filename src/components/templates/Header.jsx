import React from "react";
import { Link } from "react-router-dom";

function Header({data}) {

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ");
    }
    return text;
  };

  const wordLimit = 20;
  const truncatedOverview = truncateText(data.overview, wordLimit); 
  
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.5),rgba(0,0,0,.9)) , url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.Profile_path 
        })`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        objectFit:"cover",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start px-[3%] py-[2%]"
    >
      <h1 className="text-white text-5xl font-bold w-[70%] ">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="text-white w-[70%] ">{truncatedOverview}.+<Link className="text-[#6556CD]">More</Link></p>

      <p className="text-zinc-300 flex gap-x-1 mt-2 mb-3 ">
      <i className=" text-orange-400 ri-megaphone-fill"></i>{data.release_date || "No Information"}
      <i className="ml-4 text-orange-400 ri-album-fill"></i>{data.media_type.toUpperCase()}
      </p>
      <Link className="bg-[#6556CD] p-2 rounded hover:text-zinc-50 duration-200">
          Watch Trailer
      </Link>
    </div>
  );
}

export default Header;
