import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";

function Home() {
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  const DetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("error:", error); 
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    !wallpaper && DetHeaderWallpaper();
    GetTrending();
  },[category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />

        <div className="flex justify-between my-3 p-4">
          <h1 className="text-lg mb-2 text-zinc-400">Trendibg</h1>
          <Dropdown
            title="filter"
            option={["tv", "movie", "all"]}
            fun={(e) => setcategory(e.target.value)}
          />
        </div>

        <HorizontalCards d={trending} />
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
}

export default Home;