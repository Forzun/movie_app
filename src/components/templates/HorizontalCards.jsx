import React, { useState } from "react";

function HorizontalCards({ d }) {
  return (
    <div className="w-[100%] flex min-h-[48vh] overflow-y-auto mb-4 p-3">
      {d.map((item, index) => (
        <div
          key={index}
          className="min-w-[15%] mr-3 bg-zinc-900 rounded-sm overflow-hidden mb-4"
        >
          <img
            className="w-full h-[45%] object-cover "
            src={`https://image.tmdb.org/t/p/original${
              item.backdrop_path || item.poster_path
            }`}
            alt=""
          />
          <div className="text-white px-1 h-[55%]">
            <h1 className="text-lg font-semibold mb-1">
              {item.name ||
                item.title ||
                item.original_name ||
                item.original_title}
            </h1>
            <p className=" text-sm">
              {item.overview.slice(0, 70)}+
              <span className="text-zinc-500">More</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HorizontalCards;
