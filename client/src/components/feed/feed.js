import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import Post from "../post/post";
import Share from "../share/share";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await fetch("http://localhost:5000/api/posts/profile/" + username)
        : await fetch(`http://localhost:5000/api/posts/timeline/${user._id}`);
      const data = await res.json();
      setPosts(
        data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="flex flex-5.5">
      <div className="w-full p-5">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => {
          return <Post key={p._id} post={p} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
