import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Lottie from "lottie-react";

import ScrollToTop from "../../components/ScrollToTop";
import NavigationBar from "../../components/NavigationBar";
import GameComp from "../components/GameComp";
import Information from "../../components/Information";
import loadingAnimation from "../../lottie/Animation - loading.json";
import Pagination from "../../components/Pagination";
import Footer from "../Footer";

const RecentlyAddedData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686308/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_8_t1ayqo.jpg",
    title: "CYBERPUNK 2077",
    date: "March 5, 2022",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686251/GAMERS%20RING/PC%20GAMES/Starfield_plxbeu.jpg",
    title: "Starfield",
    date: "January 25, 2021",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686251/GAMERS%20RING/PC%20GAMES/Witcher_lxflpj.jpg",
    title: "THE WITCHER III",
    date: "December 30, 2023",
  },
];

const backgroundImages = [
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647412/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/GHOST_RECON_1_2_afjakx.jpg",
    alt: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156047/GAMERS%20RING/PC%20GAMES/ghost_recon_z7lpld.jpg",
  },
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713916008/GAMERS%20RING/PC%20GAMES/3916609_swcds6.jpg",
    alt: "Image 2",
  },
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713916009/GAMERS%20RING/PC%20GAMES/wallpaperflare.com_wallpaper_jgwmc1.jpg",
    alt: "Image 3",
  },
];

const HomePage = () => {
  const [pcGamesData, setPcGamesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const platform = "Pc";
  const fetchPcGames = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:8090/games/PcGames/${platform}?page=${page}`
      );

      const { totalPages, pcGames } = response.data;
      setTotalPages(totalPages);
      setPcGamesData(pcGames);
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
        <div className="font-serif lg:grid lg:grid-cols-4 lg:gap-3">
          <section className="col-span-3">
            {pcGamesData.length === 0 ? (
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
                  {pcGamesData.map((pcGame) => (
                    <GameComp
                      key={pcGame._id}
                      gameId={pcGame._id}
                      image={pcGame.image}
                      image1={pcGame.image1}
                      image2={pcGame.image2}
                      image3={pcGame.image3}
                      title={pcGame.title}
                      description={pcGame.description}
                      downloadDescription={pcGame.downloadDescription}
                      minimumSystemRequirement={pcGame.minimumSystemRequirement}
                      recommendedSystemRequirement={
                        pcGame.recommendedSystemRequirement
                      }
                      platform={pcGame.platform}
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
              recentGamesData={RecentlyAddedData}
              platform="THIS PAGE CONTAINS ONLY PC GAMES"
            />
          </section>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
