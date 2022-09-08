import React from "react";

const CloseFriends = ({ user }) => {
  return (
    <div className="pb-5">
      <li className="flex items-center mb-2 ml-4">
        <img
          src={user.profilePicture}
          alt="/"
          className="w-8 h-8 rounded-full object-cover mr-2.5"
        />
        <span className="text-base font-RobotoMedium">{user.username}</span>
      </li>
    </div>
  );
};

export default CloseFriends;
