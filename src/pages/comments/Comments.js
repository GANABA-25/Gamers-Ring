import { useState, useEffect } from "react";
import { useUserContext } from "../../store/Auth-Context";
import axios from "axios";

import { BsFillSendArrowDownFill } from "react-icons/bs";

const Comments = ({ gameId, refreshComments }) => {
  const [userComment, setUserComment] = useState({
    comment: "",
    userName: "",
    userEmail: "",
  });

  const textAreaHandler = (e) => {
    setUserComment((prevState) => {
      return { ...prevState, comment: e.target.value };
    });
  };

  const nameHandler = (e) => {
    setUserComment((prevState) => {
      return { ...prevState, userName: e.target.value };
    });
  };

  const emailHandler = (e) => {
    setUserComment((prevState) => {
      return { ...prevState, userEmail: e.target.value };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8090/user/comment/${gameId}`,
        userComment
      );

      if (refreshComments) refreshComments();
    } catch (error) {
      console.log("error posting comment", error);
    }

    setUserComment({
      comment: "",
      userName: "",
      userEmail: "",
    });
  };

  return (
    <>
      <div className="my-10">
        <form onSubmit={submitHandler}>
          <div className="grid gap-2">
            <labe className="max-[767px]:text-2xl font-payback md:text-4xl lg:text-2xl">
              Leave Comments
            </labe>
            <textarea
              className="max-[767px]:w-[18rem] border border-blue-600 outline-blue-700 p-2 md:w-[20rem]"
              placeholder="Please leave your comment"
              onChange={textAreaHandler}
              value={userComment.comment}
              required
            />
          </div>
          <div className="max-[767px]:my-4 grid max-[767px]:gap-2 md:my-4 md:gap-4">
            <input
              className="max-[767px]:p-2 border border-blue-600 outline-blue-700 md:p-4 lg:p-3 lg:w-[50%]"
              type="text"
              placeholder="Name: *"
              onChange={nameHandler}
              value={userComment.userName}
              required
            />
            <input
              className="max-[767px]:p-2 border border-blue-600 outline-blue-700 md:p-4 lg:p-3 lg:w-[50%]"
              type="email"
              placeholder="Email: *"
              onChange={emailHandler}
              value={userComment.userEmail}
              required
            />
          </div>
          <button className="max-[767px]:w-[12rem] max-[767px]:text-xl max-[767px]:p-2 font-serif bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 md:w-[14rem md text-3xl md:p-4 lg:text-xl lg:p-3">
            Post Comment
            <BsFillSendArrowDownFill className="flex justify-center items-center" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Comments;
