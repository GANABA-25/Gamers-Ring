import { useState } from "react";
import { useUserContext } from "../../store/Auth-Context";

import { BsFillSendArrowDownFill } from "react-icons/bs";

const Comments = () => {
  const { commentMsg, setCommentMsg } = useUserContext();
  const [formData, setFormData] = useState({
    UserComment: "",
    UserName: "",
    UserEmail: "",
  });

  const textAreaHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, UserComment: e.target.value };
    });
  };

  const nameHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, UserName: e.target.value };
    });
  };

  const emailHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, UserEmail: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setCommentMsg(formData);
    setFormData({
      UserComment: "",
      UserName: "",
      UserEmail: "",
    });
  };

  return (
    <>
      <div className="my-20">
        <form onSubmit={submitHandler}>
          <div className="grid gap-2">
            <labe className="max-[767px]:text-2xl font-payback md:text-4xl lg:text-2xl">
              Leave Comments
            </labe>
            <textarea
              className="max-[767px]:w-[18rem] border border-blue-600 outline-blue-700 p-2 md:w-[20rem]"
              placeholder="Please leave your comment"
              onChange={textAreaHandler}
              value={formData.UserComment}
              required
            />
          </div>
          <div className="max-[767px]:my-4 grid max-[767px]:gap-2 md:my-4 md:gap-4">
            <input
              className="max-[767px]:p-2 border border-blue-600 outline-blue-700 md:p-4 lg:p-3 lg:w-[50%]"
              type="text"
              placeholder="Name: *"
              onChange={nameHandler}
              value={formData.UserName}
              required
            />
            <input
              className="max-[767px]:p-2 border border-blue-600 outline-blue-700 md:p-4 lg:p-3 lg:w-[50%]"
              type="email"
              placeholder="Email: *"
              onChange={emailHandler}
              value={formData.UserEmail}
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
