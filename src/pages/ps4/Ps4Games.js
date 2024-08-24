import { Fragment, useState, useEffect } from "react";
import Lottie from "lottie-react";
import axios from "axios";

import Information from "../../components/Information";
import loadingAnimation from "../../lottie/Animation - loading.json";
import GameComp from "../components/GameComp";
import Pagination from "../../components/Pagination";
import ScrollToTop from "../../components/ScrollToTop";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../Footer";

const ps4RecentRelease = [
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830276/GAMERS%20RING/PS4%20GAMES/8406384_kj3lxs.jpg",
    title: "FIFA 23",
    date: "March 5, 2022",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830239/GAMERS%20RING/PS4%20GAMES/2335848_vcma90.png",
    title: "NIOH 2",
    date: "January 25, 2021",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830266/GAMERS%20RING/PS4%20GAMES/1146381_cp2dx3.jpg",
    title: "SEKIRO: SHADWOS DIE TWICE",
    date: "December 30, 2023",
  },
];

const backgroundImages = [
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713708077/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_1_rdx894.jpg",
    alt: "Image1",
  },
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713917622/GAMERS%20RING/PS4%20GAMES/8468587_c6puwy.jpg",
    alt: "Image 2",
  },
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830489/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_6_ankixv.jpg",
    alt: "Image 3",
  },
];

const Ps4Games = () => {
  const [ps4GamesData, setPs4GamesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const platform = "PlayStation 4";
  const fetchPcGames = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:8090/games/ps4Games/${platform}?page=${page}`
      );
      console.log(response);
      const { totalPages, Ps4Games } = response.data;

      setTotalPages(totalPages);
      setPs4GamesData(Ps4Games);
    } catch (error) {
      console.log("Error getting PcGames", error);
    }
  };

  useEffect(() => {
    fetchPcGames(currentPage + 1);
  }, [currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <ScrollToTop />
      <NavigationBar
        background="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647417/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/GHOST_RECON_1_3_cxqjai.jpg"
        images={backgroundImages}
      />
      <div className="max-[767px]:w-[95%] md:w-[95%] m-auto">
        <div className="font-serif lg:grid lg:grid-cols-4 lg:gap-3 ">
          <section className="col-span-3">
            {ps4GamesData.length === 0 ? (
              <div className="flex justify-center items-center w-full">
                <Lottie
                  className="w-[6rem]"
                  animationData={loadingAnimation}
                  loop={true}
                />
              </div>
            ) : (
              <>
                <div className="grid max-[767px]:grid-cols-2 max-[767px]:gap-1 max-[767px]:gap-y-2 md:grid-cols-2 md:gap-2 md:gap-y-3 lg:grid-cols-3 transition-opacity duration-500">
                  {ps4GamesData.map((ps4Game) => (
                    <GameComp
                      key={ps4Game._id}
                      image={ps4Game.image}
                      image1={ps4Game.image1}
                      image2={ps4Game.image2}
                      image3={ps4Game.image3}
                      title={ps4Game.title}
                      description={ps4Game.description}
                      downloadDescription={ps4Game.downloadDescription}
                      minimumSystemRequirement={
                        ps4Game.minimumSystemRequirement
                      }
                      recommendedSystemRequirement={
                        ps4Game.recommendedSystemRequirement
                      }
                      platform={ps4Game.platform}
                    />
                  ))}
                </div>
                <Pagination
                  totalPages={totalPages}
                  handlePageClick={handlePageClick}
                />
              </>
            )}
          </section>
          <section className="max-[767px]:my-4 col-span-1 md:my-8 lg:my-0">
            <Information
              recentGamesData={ps4RecentRelease}
              platform="THIS PAGE CONTAINS ONLY PS4 GAMES"
            />
          </section>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Ps4Games;
