import React, { useContext } from "react";
import { FiInstagram } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Header = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="flex justify-between items-center h-14 gap-4 w-full px-4 bg-blue-50 sticky top-0 z-50">
      <div className="flex items-center gap-2 flex-3 cursor-pointer">
        <Link to="/">
          <FiInstagram className="fill-blue-50 text-white w-10 h-10" />
        </Link>
        <Link to="/">
          <span className="font-RobotoBold text-xl text-white italic">
            Instagram
          </span>
        </Link>
      </div>
      <div className="flex flex-5">
        <div className="flex items-center gap-2 w-full h-8 bg-white rounded-4xl px-4">
          <BiSearch className="w-5" />
          <input
            placeholder="Search for friends, posts or video"
            className="focus:outline-none border-none w-10/12"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 flex-4 justify-around text-white">
        <div className="flex gap-2 mr-2.5 text-sm cursor-pointer font-RobotoMedium">
          <Link to="/">
            <span>Homepage</span>
          </Link>
          <Link>
            <span>Timeline</span>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex gap-4">
            <div className="flex cursor-pointer relative">
              <BsPersonFill className="fill-white w-7 h-7" />
              <span className="w-4 h-4 bg-red-100 rounded-full text-white absolute -top-1 -right-1 text-xs flex items-center justify-center">
                1
              </span>
            </div>
            <div className="flex cursor-pointer relative">
              <RiSendPlaneFill className="fill-white w-7 h-7" />
              <span className="w-4 h-4 bg-red-100 rounded-full text-white absolute -top-1 -right-1 text-xs flex items-center justify-center">
                2
              </span>
            </div>
            <div className="flex cursor-pointer relative">
              <IoMdNotificationsOutline className="fill-white w-7 h-7" />
              <span className="w-4 h-4 bg-red-100 rounded-full text-white absolute -top-1 -right-1 text-xs flex items-center justify-center">
                1
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : "/images/defaultPropilePic.png"
              }
              alt="/"
              className="cursor-pointer w-8 h-8 rounded-full bg-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
