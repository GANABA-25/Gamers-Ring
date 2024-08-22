import { Fragment } from "react";
import RecentlyAdded from "./RecentlyAdded";
import ReadMoreBtn from "./ReadMoreBtn";
import { MdNotificationAdd } from "react-icons/md";
import { MdOutlineNoiseAware } from "react-icons/md";

const Information = (props) => {
  const { recentGamesData } = props;
  return (
    <Fragment>
      <div className="border-2 border-gray-500">
        <div className="max-[767px]:p-2 shadow-2xl shadow-gray-200 border-b-2 border-gray-500 bg-blue-600 flex justify-center items-center max-[767px]:gap-4 md:gap-5 md:p-3 lg:p-2">
          <MdNotificationAdd className="text-white max-[767px]:text-5xl md:text-6xl lg:text-4xl" />
          <h1 className="max-[767px]:text-[1rem] text-white font-black md:text-3xl lg:text-[1rem]">
            RECENTLY ADDED / RELEASE
          </h1>
        </div>

        <div className="max-[767px]:my-4 grid gap-4 md:my-4">
          {recentGamesData.map((recentGames) => (
            <RecentlyAdded
              key={recentGames.id}
              image={recentGames.image}
              title={recentGames.title}
              date={recentGames.date}
            />
          ))}
        </div>
      </div>

      <div className="max-[767px]:my-4 max-[767px]:p-2 grid max-[767px]:gap-2 text-center bg-gray-300 md:gap-5 md:my-4 md:p-4 lg:gap-4">
        <span className="flex justify-center items-center max-[767px]:gap-4 md:gap-5">
          <h1 className="max-[767px]:text-2xl font-bold md:text-3xl lg:text-xl">
            NOTE
          </h1>
          <MdOutlineNoiseAware className="max-[767px]:text-2xl text-red-600 md:text-4xl" />
        </span>
        <p className="md:text-xl lg:text-base">
          The search box above allows you to such for games on This Page
          only,Please Navigate to other pages to download for other platforms.
        </p>
        <h1 className="max-[767px]:my-2 font-bold lg:text-sm font-payback tracking-widest">
          {props.platform}
        </h1>
      </div>

      <div className="max-[767px]:my-4 max-[767px]:p-2 grid max-[767px]:gap-3 text-center bg-gray-300 md:my-4 md:p-4 md:gap-5">
        <h1 className="max-[767px]:text-2xl font-bold md:text-3xl lg:text-xl">
          ULTIMATE GUIDE TO INSTALL GAMES
        </h1>
        <img
          src={
            "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156036/GAMERS%20RING/PC%20GAMES/farcry_vlh8qb.jpg"
          }
          alt="guidImage"
        />
        <p className="md:text-2xl lg:text-base">
          orem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          quidem.
        </p>
        <ReadMoreBtn />
      </div>

      <div className="max-[767px]:my-4 max-[767px]:p-2 grid max-[767px]:gap-3 text-center bg-gray-300 md:my-4 md:p-4 md:gap-5">
        <h1 className="max-[767px]:text-2xl font-bold md:text-3xl lg:text-xl">
          HOW TO DOWNLOAD
        </h1>
        <p className="md:text-2xl lg:text-base">
          orem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          quidem.
        </p>
        <ReadMoreBtn />
      </div>
    </Fragment>
  );
};

export default Information;
