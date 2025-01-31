import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/MainLayaut";
import Home from "../components/sidebar/home";
import Trending from "../components/sidebar/Trending";
import Subscriptions from "../components/sidebar/Subscriptions";
import Library from "../components/sidebar/Library";
import History from "../components/sidebar/History";
import Yourvideos from "../components/sidebar/Yourvideos";
import Watchlater from "../components/sidebar/Watchlater";
import Likedvideos from "../components/sidebar/Likedvideos";
import NotFound from "../components/notfound";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/library" element={<Library />} />
          <Route path="/history" element={<History />} />
          <Route path="/yourvideos" element={<Yourvideos />} />
          <Route path="/watchlater" element={<Watchlater />} />
          <Route path="/likedvideos" element={<Likedvideos />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
