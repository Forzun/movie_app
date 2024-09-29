import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";

function Movie() {
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [movie, setmovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMoer, sethasMoer] = useState(true);

  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setmovie((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMoer(false);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  const referstHandler = () => {
    if (movie.length === 0) {
      getMovie();
    } else {
      setpage(1);
      setmovie([]);
      getMovie();
    }
  };

  useEffect(() => {
    referstHandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="px-[5%] w-full flex items-center pb-7">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Movie(<span className="mr-1 text-lg text-zinc-600">{category}</span>)
        </h1>
        <div className="w-full">
          <Topnav />
        </div>
        <Dropdown
          title="category"
          option={["popular", "top_rated", "upcoming", "airing_today" ,"on_the_ air"]}
          fun={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={getMovie}
        hasMore={hasMoer}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={movie} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

export default Movie;
