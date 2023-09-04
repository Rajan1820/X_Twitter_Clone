import Image from "next/image";
import React from "react";
import { BsSearch } from "react-icons/bs";
const trending_list = [
  {
    title : "#TwitterClone",
    no : "600k+"
  },
  {
    title : "#NextJs",
    no : "30k+"
  },

  {
    title : "#NBA",
    no : "1M+"
  },

  {
    title : "#StephCurry",
    no : "890k+"
  },

  {
    title : "#BasketBall",
    no : "1.2M+"
  },

];
const follow_list = [
  {
    name : "Stephen Curry",
    username : "@StephenCurry30",
    image : "https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_400x400.jpg"
  },
  {
    name : "NBA",
    username : "@NBA",
    image: "https://pbs.twimg.com/profile_images/1542667356949819392/IyRCxMgo_400x400.jpg"
  },
  {
    name : "Cristiano Ronaldo",
    username : "@Cristiano",
    image :"https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg",
  },

];
const RightSection = () => {
  return (
    <section className="w-[50%] sticky hidden top-2 overflow-y-auto mt-2 xl:flex flex-col items-stretch h-[90vh] overflow-x-hidden px-6">
      <div>
        <div className="relative w-full h-full group">
          <input
            id="searchBox"
            type="text"
            placeholder="Search"
            className="outline-none peer focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-14 pr-4"
          />
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 peer-focus:text-primary"
          >
            <BsSearch className="w-5 h-5" />
          </label>
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900  my-4">
        <h3 className="font-bold text-xl my-4 px-4">What’s happening</h3>
        <div>
          {trending_list.map((title) => (
            <div
              className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200"
            >
              <div className="font-bold text-lg ">{title.title}</div>
              <div className="text-xs text-neutral-400">{title.no}</div>
            </div>
          ))}
        </div>
        <div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
        <h3 className="font-bold text-xl my-4 px-4">Who to follow</h3>
        <div>
          {follow_list.map((item) => (
            <div
              className="hover:bg-white/10 p-4 flex justify-between items-center last:rounded-b-xl transition duration-200"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-neutral-600 rounded-full flex-none">
                  <img src= {item.image} alt= {item.name} className="rounded-full"/>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-white">{item.name}</div>
                  <div className="text-gray-500 text-xs">{item.username}</div>
                </div>
              </div>
              <button className="rounded-full px-6 py-2 bg-white text-neutral-950">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSection;
