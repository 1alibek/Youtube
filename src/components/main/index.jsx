import React from "react";
//icons
import { BiSearch } from "react-icons/bi";
//img
import social from "../../assets/img/social.png";
const Main = () => {
  return (
    <div className="bg-[#212121] w-[850px]">
      <div className="py-2 flex items-center justify-evenly">
        <div className="flex items-center">
          <input
            className=" w-[404px] bg-black text-white opacity-[0.6] h-[32px] pl-2"
            type="text"
            placeholder="Search..."
          />
          <button className="w-[65px] h-[32px] flex items-center justify-center btn">
            <BiSearch className="text-white opacity-[0.6]" />
          </button>
        </div>
        <img className="pl-[100px]" src={social} alt="" />
      </div>
      <div className="relative w-full bg-[#212121] px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            <button className="whitespace-nowrap border-1 rounded-full bg-zinc-800 px-4 py-1.5 text-sm text-white hover:bg-zinc-700">
              Kino
            </button>
            <button className="whitespace-nowrap border-1 rounded-full bg-zinc-800 px-4 py-1.5 text-sm text-white hover:bg-zinc-700">
              Comedy
            </button>
            <button className="whitespace-nowrap border-1 rounded-full bg-zinc-800 px-4 py-1.5 text-sm text-white hover:bg-zinc-700">
              Mix
            </button>
            <button className="whitespace-nowrap border-1 rounded-full bg-zinc-800 px-4 py-1.5 text-sm text-white hover:bg-zinc-700">
              Cartoons
            </button>
            <button className="whitespace-nowrap border-1 rounded-full bg-zinc-800 px-4 py-1.5 text-sm text-white hover:bg-zinc-700">
              Muzik
            </button>
            <button className="whitespace-nowrap border-1 rounded-full bg-zinc-800 px-4 py-1.5 text-sm text-white hover:bg-zinc-700">
              Futbol
            </button>
            <button className="whitespace-nowrap border-1 rounded-full bg-zinc-800 px-4 py-1.5 text-sm text-white hover:bg-zinc-700">
              El sanatlari
            </button>
            <button className="whitespace-nowrap border-1 rounded-full bg-zinc-800 px-4 py-1.5 text-sm text-white hover:bg-zinc-700">
              UX Tasarim
            </button>
            <button className="whitespace-nowrap border-1 rounded-full bg-zinc-800 px-4 py-1.5 text-sm text-white hover:bg-zinc-700">
              Animasyon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
