import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";


function People() {
  const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMoer, sethasMoer] = useState(true);
  
    const getPerson = async () => {
      try {
        const { data } = await axios.get(`/person/${category}?page=${page}`);
        if (data.results.length > 0) {
          setperson((prev) => [...prev, ...data.results]);
          setpage(page + 1);
        } else {
          sethasMoer(false);
        }
      } catch (error) {
        console.log("error:", error);
      }
    };
  
    const referstHandler = () => {
      if (person.length === 0) {
        getPerson();
      } else {
        setpage(1);
        setperson([]);
        getPerson();
      }
    };
  
    useEffect(() => {
      referstHandler();
    }, [category]);

  return person.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="px-[5%] w-full flex items-center pb-7">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          person(<span className="mr-1 text-lg text-zinc-600">{category}</span>)
        </h1>
        <div className="w-full">
          <Topnav />
        </div>
        <div className="w-[2%]"></div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={getPerson}
        hasMore={hasMoer}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={person} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

export default People; 

