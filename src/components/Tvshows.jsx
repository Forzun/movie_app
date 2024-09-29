import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";

function Tvshows() {
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMoer, sethasMoer] = useState(true);
  
    const getTv = async () => {
      try {
        const { data } = await axios.get(`/tv/${category}?page=${page}`);
        if (data.results.length > 0) {
          settv((prev) => [...prev, ...data.results]);
          setpage(page + 1);
        } else {
          sethasMoer(false);
        }
      } catch (error) {
        console.log("error:", error);
      }
    };
  
    const referstHandler = () => {
      if (tv.length === 0) {
        getTv();
      } else {
        setpage(1);
        settv([]);
        getTv();
      }
    };
  
    useEffect(() => {
      referstHandler();
    }, [category]);

  return tv.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="px-[5%] w-full flex items-center pb-7">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Tv(<span className="mr-1 text-lg text-zinc-600">{category}</span>)
        </h1>
        <div className="w-full">
          <Topnav />
        </div>
        <Dropdown
          title="category"
          option={["popular", "top_rated", "upcoming", "now_playing"]}
          fun={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={getTv}
        hasMore={hasMoer}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tv} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

export default Tvshows