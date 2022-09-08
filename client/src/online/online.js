import React from "react";

const Online = ({ user }) => {
  return (
    <div>
      <li className="flex items-center mb-4">
        <div className="mr-2.5 relative">
          <img
            src={user.profilePicture}
            alt="/"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="w-3 h-3 rounded-full bg-green-50 absolute -top-0.5 right-0 border-2 border-white"></span>
        </div>
        <span className=" text-lg font-RobotoMedium">{user.username}</span>
      </li>
    </div>
  );
};

export default Online;
