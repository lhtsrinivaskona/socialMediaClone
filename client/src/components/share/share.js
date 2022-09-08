import React, { useContext, useRef, useState } from "react";
import { MdPermMedia } from "react-icons/md";
import { AiFillTag } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { AuthContext } from "../../context/authContext";

const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;

      try {
        const url = "http://localhost:5000/api/upload";
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data,
          }),
        };
        const res = await fetch(url, options);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const url = "http://localhost:5000/api/posts";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newPost,
        }),
      };
      const res = await fetch(url, options);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-44 rounded-lg border py-5 boxShadow border-none">
      <div className="p-2.5">
        <div className="flex items-center">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : "/images/profilePicture.jpg"
            }
            alt="/"
            className="w-12 h-12 rounded-full object-cover mr-2.5"
          />
          <input
            placeholder={`What's in your mind ${user.username} ?`}
            className="border-none w-10/12 focus:outline-none"
            ref={desc}
          />
        </div>
        <hr className="m-5" />
        <form
          className="flex items-center justify-between"
          onSubmit={submitHandler}
        >
          <div className="flex ml-5 gap-6">
            <label
              htmlFor="file"
              className="flex items-center gap-1 cursor-pointer"
            >
              <MdPermMedia className="w-6 h-6 fill-red-150" />
              <span className="text-sm font-RobotoMedium">Photo or Video</span>
              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="flex items-center gap-1 cursor-pointer">
              <AiFillTag className="w-6 h-6 fill-blue-100" />
              <span className="text-sm font-RobotoMedium">Tag</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <ImLocation2 className="w-6 h-6 fill-green-50" />
              <span className="text-sm font-RobotoMedium">Location</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <BsFillEmojiSmileFill className="w-6 h-6 fill-gold-50" />
              <span className="text-sm font-RobotoMedium">feelings</span>
            </div>
          </div>
          <button
            className="border-none cursor-default text-white p-2 rounded bg-green-50 font-RobotoMedium"
            type="submit"
          >
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
