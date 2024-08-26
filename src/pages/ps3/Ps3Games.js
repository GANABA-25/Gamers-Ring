import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Lottie from "lottie-react";

import ScrollToTop from "../../components/ScrollToTop";
import NavigationBar from "../../components/NavigationBar";
import Information from "../../components/Information";
import loadingAnimation from "../../lottie/Animation - loading.json";
import Pagination from "../../components/Pagination";
import GameComp from "../components/GameComp";
import Footer from "../Footer";

const ps3RecentRelease = [
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776984/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_22_mb2wgp.jpg",
    title: "LittleBigPlanet 2",
    date: "March 5, 2022",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713818012/GAMERS%20RING/PS3%20GAMES/1111261_zrjlcf.jpg",
    title: "Batman: Arkham City",
    date: "January 25, 2021",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776979/GAMERS%20RING/PS3%20GAMES/1787648_eu92sj.jpg",
    title: "Ni no Kuni",
    date: "December 30, 2023",
  },
];

const backgroundImages = [
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713700861/GAMERS%20RING/PS3%20GAMES/The_last_of_us_1_uwapj7.jpg",
    alt: "Image1",
  },
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713917187/GAMERS%20RING/PS3%20GAMES/5077394_cufo9r.jpg",
    alt: "Image 2",
  },
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713916964/GAMERS%20RING/PS3%20GAMES/5077310_un2tvi.jpg",
    alt: "Image 3",
  },
];

const Ps3Games = () => {
  const [ps3GamesData, setPs3GamesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const platform = "PlayStation 3";
  const fetchPcGames = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:8090/games/ps3Games/${platform}?page=${page}`
      );

      const { totalPages, Ps3Games } = response.data;
      setTotalPages(totalPages);
      setPs3GamesData(Ps3Games);
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
            {ps3GamesData.length === 0 ? (
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
                  {ps3GamesData.map((ps3Game) => (
                    <GameComp
                      key={ps3Game._id}
                      gameId={ps3Game._id}
                      image={ps3Game.image}
                      image1={ps3Game.image1}
                      image2={ps3Game.image2}
                      image3={ps3Game.image3}
                      title={ps3Game.title}
                      description={ps3Game.description}
                      downloadDescription={ps3Game.downloadDescription}
                      minimumSystemRequirement={
                        ps3Game.minimumSystemRequirement
                      }
                      recommendedSystemRequirement={
                        ps3Game.recommendedSystemRequirement
                      }
                      platform={ps3Game.platform}
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
              recentGamesData={ps3RecentRelease}
              platform="THIS PAGE CONTAINS ONLY PS3 GAMES"
            />
          </section>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Ps3Games;
