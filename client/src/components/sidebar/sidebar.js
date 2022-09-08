import React from "react";
import { MdRssFeed } from "react-icons/md";
import { RiSendPlaneFill, RiCalendarEventFill } from "react-icons/ri";
import { MdVideocam, MdGroups, MdBookmark } from "react-icons/md";
import { BsQuestionSquareFill, BsBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { UserData } from "../../common/conistants";
import CloseFriends from "../closeFriends/closeFriends";

const Sidebar = () => {
  return (
    <div className="flex flex-3 height overflow-y-scroll scrollbar sticky top-14">
      <div className="p-2.5">
        <ul className="p-0 m-0">
          <li className="list-none flex items-center gap-3 mb-5">
            <MdRssFeed className="w-6 h-6 ml-4" />
            <span className="text-sm font-RobotoMedium">Feed</span>
          </li>
          <li className="list-none flex items-center gap-3 mb-5">
            <RiSendPlaneFill className="w-6 h-6 ml-4" />
            <span className="text-sm font-RobotoMedium">Chat</span>
          </li>
          <li className="list-none flex items-center gap-3 mb-5">
            <MdVideocam className="w-6 h-6 ml-4" />
            <span className="text-sm font-RobotoMedium">Videos</span>
          </li>
          <li className="list-none flex items-center gap-3 mb-5">
            <MdGroups className="w-6 h-6 ml-4" />
            <span className="text-sm font-RobotoMedium">Groups</span>
          </li>
          <li className="list-none flex items-center gap-3 mb-5">
            <MdBookmark className="w-6 h-6 ml-4" />
            <span className="text-sm font-RobotoMedium">MdBookmarks</span>
          </li>
          <li className="list-none flex items-center gap-3 mb-5">
            <BsQuestionSquareFill className="w-6 h-6 ml-4" />
            <span className="text-sm font-RobotoMedium">Questions</span>
          </li>
          <li className="list-none flex items-center gap-3 mb-5">
            <BsBriefcaseFill className="w-6 h-6 ml-4" />
            <span className="text-sm font-RobotoMedium">Jobs</span>
          </li>
          <li className="list-none flex items-center gap-3 mb-5">
            <RiCalendarEventFill className="w-6 h-6 ml-4" />
            <span className="text-sm font-RobotoMedium">Events</span>
          </li>
          <li className="list-none flex items-center gap-3 mb-5">
            <FaGraduationCap className="w-6 h-6 ml-4" />
            <span className="text-sm font-RobotoMedium">Courses</span>
          </li>
        </ul>
        <button className="w-36 border-none p-2.5 rounded font-RobotoMedium">
          Show More
        </button>
        <hr className="mx-0" />
        <ul className="p-0 m-0 list-none my-5">
          {UserData.map((u) => {
            return <CloseFriends key={u.id} user={u} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
