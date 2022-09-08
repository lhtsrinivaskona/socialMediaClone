import React from "react";

import Feed from "../../components/feed/feed";
import Header from "../../components/header/header";
import Rightbar from "../../components/rightbar/rightbar";
import Sidebar from "../../components/sidebar/sidebar";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="flex justify-between w-full">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
