import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";

function Popular() {
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [populer, setpopuler] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMoer, sethasMoer] = useState(true);

  const getPopuler = async () => {
    try {
      const { data } = await axios.get(
        `${category}/popular?page=${page}`
      );
      if (data.results.length > 0) {
        setpopuler((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMoer(false);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  const referstHandler = () => {
    if (populer.length === 0) {
      getPopuler();
    } else {
      setpage(1);
      setpopuler([]);
      getPopuler();
    }
  };

  useEffect(() => {
    referstHandler();
  }, [category]);

  return populer.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="px-[5%] w-full flex items-center pb-7">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Popular
        </h1>
        <div className="w-full">
          <Topnav />
        </div>
        <Dropdown title="category" option={["movie", "tv"]} fun={(e) => setcategory(e.target.value)} />
        <div className="w-[2%]"></div>
      </div>

      <InfiniteScroll
        dataLength={populer.length}
        next={getPopuler}
        hasMore={hasMoer}
        loader={<h1>Loading...</h1>}  
      >
      <Cards data={populer} title={category} />
      </InfiniteScroll>
    </div>
  ) : <h1>Loading</h1>
}

export default Popular;
