import React from "react";
//images
import logo from "../../assets/img/logo.png";
import profile from "../../assets/icons/profile.svg";
//svg
import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";
import icon4 from "../../assets/icons/icon4.svg";
import icon5 from "../../assets/icons/icon5.svg";
import icon6 from "../../assets/icons/icon6.svg";
import icon7 from "../../assets/icons/icon7.svg";
import icon8 from "../../assets/icons/icon8.svg";
//icons
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="bg-[#212121] w-[19  0px]">
      <div className="flex items-center gap-1 px-4 py-2">
        <IoMenu className="text-2xl text-white" />
        <img src={logo} alt="" />
      </div>
      <div>
        <div className="flex flex-col border-b-1 border-gray-600">
          <div className="flex items-center gap-4 px-4 py-3 pages">
            <img src={icon1} alt="" />
            <NavLink to="/" className="text-white font-medium ">
              Home
            </NavLink>
          </div>
          <div className="flex items-center gap-4 px-4 py-3 pages">
            <img src={icon2} alt="" />
            <NavLink to="/trending" className="text-white font-medium ">
              Trending
            </NavLink>
          </div>
          <div className="flex items-center gap-4 px-4 py-3 pages">
            <img src={icon3} alt="" />
            <NavLink to="/subscriptions" className="text-white font-medium ">
              Subscriptions
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col border-b-1 border-gray-600">
          <div className="flex items-center gap-4 px-4 py-3 pages">
            <img src={icon4} alt="" />
            <NavLink to="/library" className="text-white font-medium ">
              Library
            </NavLink>
          </div>
          <div className="flex items-center gap-4 px-4 py-3 pages">
            <img src={icon5} alt="" />
            <NavLink to="/history" className="text-white font-medium ">
              History
            </NavLink>
          </div>
          <div className="flex items-center gap-4 px-4 py-3 pages">
            <img src={icon6} alt="" />
            <NavLink to="/yourvideos" className="text-white font-medium ">
              Your videos
            </NavLink>
          </div>
          <div className="flex items-center gap-4 px-4 py-3 pages">
            <img src={icon7} alt="" />
            <NavLink to="/watchlater" className="text-white font-medium ">
              Watch later
            </NavLink>
          </div>
          <div className="flex items-center gap-4 px-4 py-3 pages">
            <img src={icon8} alt="" />
            <NavLink to="/likedvideos" className="text-white font-medium ">
              Liked videos
            </NavLink>
          </div>
        </div>
      </div>
      <div className=" border-b-1 border-gray-600">
        <p className="font-medium text-white pl-4 pt-3">SUBSCRIPTION</p>
        <div className="flex items-center gap-4 px-4 py-3">
          <img src={profile} alt="" />
          <p className="text-white">The Game</p>
        </div>
        <div className="flex items-center gap-4 px-4 py-3">
          <img src={profile} alt="" />
          <p className="text-white">Lean Yo </p>
        </div>
        <div className="flex items-center gap-4 px-4 py-3">
          <img src={profile} alt="" />
          <p className="text-white">Best Kuaför</p>
        </div>
        <div className="flex items-center gap-4 px-4 py-3">
          <img src={profile} alt="" />
          <p className="text-white">Meyau Seu</p>
        </div>
        <div className="flex items-center gap-4 px-4 py-3">
          <img src={profile} alt="" />
          <p className="text-white">Discover Design</p>
        </div>
      </div>
      <div className="flex items-center gap-4 px-4 py-3 pages">
        <img src={icon2} alt="" />
        <p className="text-white font-medium ">
          Youtube Premium
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
