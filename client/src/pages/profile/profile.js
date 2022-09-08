import React, { useEffect, useState } from "react";
import Feed from "../../components/feed/feed";
import Header from "../../components/header/header";
import Rightbar from "../../components/rightbar/rightbar";
import Sidebar from "../../components/sidebar/sidebar";
import { useParams } from "react-router";

const Profile = () => {
  const [user, setUser] = useState([]);
  const username = useParams().username;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        `http://localhost:5000/api/users/?username=${username}`
      );
      const data = await res.json();
      setUser(data);
    };
    fetchUser();
  }, [username]);
  return (
    <div className="">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-9">
          <div>
            <div className="h-80 relative">
              <img
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : "/images/coverPic.jpg"
                }
                alt="/"
                className="w-full h-72 object-cover"
              />
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : "/images/defaultProfilePic.svg"
                }
                alt="/"
                className="w-36 h-36 rounded-full object-cover absolute left-0 right-0 top-52 m-auto border-2 border-white"
              />
            </div>
            <div className="flex flex-col items-center py-10">
              <h4 className="text-2xl font-RobotoRegular">{user.username}</h4>
              <span className="font-RobotoThin">{user.desc}</span>
            </div>
          </div>
          <div className="flex">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
