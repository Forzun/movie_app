import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
  const navigate = useNavigate();
  const [duration, setduration] = useState("day");
  const [category, setcategory] = useState("all");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1)
  const [hasMoer, sethasMoer] = useState(true)

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      if(data.results.length > 0 ){ 
        settrending((prev) =>[...prev , ...data.results])
        setpage(page+1)
      }else{ 
          sethasMoer(false); 
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  const referstHandler = () => { 
    if(trending.length === 0 ){ 
      GetTrending();
    }else{ 
      setpage(1);
      settrending([])
      GetTrending();
    }
  }

  useEffect(() => {
   referstHandler();
  },[category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="px-[5%] w-full flex items-center pb-7">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <div className="w-full">
          <Topnav />
        </div>
        <Dropdown title="category" option={["movie", "tv", "all"]} fun={(e) => setcategory(e.target.value)} />
        <div className="w-[2%]"></div>
        <Dropdown title="duration" option={["week", "day"]} fun={(e) => setduration(e.target.value)} />
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMoer}
        loader={<h1>Loading...</h1>}  
      >
      <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : <h1>Loading</h1>
}
export default Trending;
