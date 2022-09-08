import React, { useContext, useEffect, useState } from "react";
import { UserData } from "../../common/conistants";
import { AuthContext } from "../../context/authContext";
import Online from "../../online/online";
import { HiUserAdd, HiUserRemove } from "react-icons/hi";

const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const url = `http://localhost:5000/api/users/friends/${user._id}`;
        const friendsData = await fetch(url);
        const friendsList = await friendsData.json();
        setFriends(friendsList);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        const url = `http://localhost:5000/api/users/${user._id}/unfollow`;
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: currentUser._id,
          }),
        };
        await fetch(url, options);
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        const url = `http://localhost:5000/api/users/${user._id}/follow`;
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: currentUser._id,
          }),
        };
        await fetch(url, options);
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (error) {
      console.log(error);
    }
  };

  const HomeRightbar = () => {
    return (
      <div>
        <div className="flex items-center">
          <img src="/images/gift.png" alt="/" className="w-10 h-10 mr-2.5" />
          <span className="text-sm font-RobotoRegular">
            <b>Rahul</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/images/ad.jpg" alt="/" className="w-full rounded-lg my-7" />
        <h4 className="text-lg font-RobotoMedium mb-4">Online Friends</h4>
        <ul className="p-0 m-0 list-none">
          {UserData.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </div>
    );
  };
  const ProfileRightbar = () => {
    return (
      <div>
        {user.username !== currentUser.username && (
          <button
            className="flex items-center font-RobotoMedium text-base cursor-pointer gap-2 py-2 mt-7  mb-2.5 bg-blue-50 text-white px-4 rounded focus:outline-none"
            onClick={handleClick}
          >
            {followed ? "Unfollow" : "Follow"}
            {followed ? (
              <HiUserRemove className="w-5 h-5" />
            ) : (
              <HiUserAdd className="w-5 h-5" />
            )}
          </button>
        )}
        <h4 className="text-lg font-RobotoMedium mb-2.5">User Information</h4>
        <div className="mb-7">
          <div className="mb-2.5">
            <span className=" font-RobotoMedium mr-3 text-black-50">City:</span>
            <span className=" font-RobotoThin text-grey-50">{user.city}</span>
          </div>
          <div className="mb-2.5">
            <span className=" font-RobotoMedium mr-3 text-black-50">From:</span>
            <span className=" font-RobotoThin text-grey-50">{user.from}</span>
          </div>
          <div className="mb-2.5">
            <span className=" font-RobotoMedium mr-3 text-black-50">
              Relationship:
            </span>
            <span className=" font-RobotoThin text-grey-50">
              {user.relationship}
            </span>
          </div>
        </div>
        <h4 className="text-lg font-RobotoMedium mb-2.5">User friends</h4>
        <div className="flex flex-wrap justify-between">
          {friends.map((friend) => {
            return (
              <div className="flex flex-col mb-5 cursor-pointer">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : "/images/profilePicture1.jpg"
                  }
                  alt="/"
                  className=" w-24 h-24 object-cover rounded-md"
                />
                <span className="mt-0.5 font-RobotoRegular">
                  {friend.username}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-3.5">
      <div className="pt-5 pr-5">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
