import { format } from "date-fns";

const CommentsList = (props) => {
  const formattedDate = format(
    new Date(props.createdAt),
    "MMMM dd, yyyy 'at' hh:mm a"
  );

  return (
    <div className="mb-4 max-[767px]:text-[1rem] md:text-2xl lg:text-xl">
      <div className="flex items-center max-[767px]:gap-2 md:gap-3 lg:gap-4">
        <h1 className="font-serif font-bold lg:text-[0.9rem]">
          {props.userName}
        </h1>
        <p className="opacity-80 max-[767px]:text-[0.9rem] lg:text-sm">
          {formattedDate}
        </p>
      </div>
      <p className="lg:text-[1rem] break-all">{props.comment}</p>
      <p className="my-2 hover:text-blue-600 cursor-pointer opacity-80 lg:text-sm">
        Reply
      </p>
    </div>
  );
};

export default CommentsList;
