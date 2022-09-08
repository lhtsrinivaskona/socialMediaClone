import React, { useContext, useEffect, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import moment from "moment";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Post = ({ post, userDetails }) => {
  console.log(userDetails);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        `http://localhost:5000/api/users?userId=${post.userId}`
      );
      const data = await res.json();
      setUser(data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = async () => {
    try {
      const url = `http://localhost:5000/api/posts/${post._id}/like`;
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: currentUser._id,
        }),
      };
      const res = await fetch(url, options);
    } catch (error) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="w-full boxShadow rounded-lg my-7">
      <div className="p-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to={`profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : "/images/defaultPropilePic.png"
                }
                alt="/"
                className="w-8 h-8 rounded-full object-cover mr-2"
              />
            </Link>
            <span className="text-sm font-RobotoMedium mr-2.5">
              {user.username}
            </span>
            <span className="text-xs font-">
              {moment(post.createdAt).fromNow()}
            </span>
          </div>
          <div>
            <FiMoreVertical />
          </div>
        </div>
        <div className="my-5">
          <span>{post?.desc}</span>
          {post?.photo && (
            <img
              src={post.photo}
              alt="/"
              className="mt-5 w-full max-h-125 object-cover"
            />
          )}
        </div>
        <div className="flex items-center justify-between font-RobotoMedium">
          <div className="flex items-center gap-1 ">
            <AiFillLike
              className="w-6 h-6 fill-blue-50 cursor-pointer"
              onClick={likeHandler}
            />
            <FcLike
              className="w-6 h-6 fill-blue-50 cursor-pointer"
              onClick={likeHandler}
            />
            <span className="text-xs font-RobotoRegular">
              {like} people reacted it
            </span>
          </div>
          <div>
            <span className="cursor-pointer border-b border-dashed border-grey-50 text-xs">
              {post?.comment || 0} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
