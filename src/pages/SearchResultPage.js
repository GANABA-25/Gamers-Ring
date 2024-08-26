import { Fragment } from "react";
import { useUserContext } from "../store/Auth-Context";

import NavigationBar from "../components/NavigationBar";
import Information from "../components/Information";
import GameComp from "./components/GameComp";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "./Footer";

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

const SearchResultPage = () => {
  const { fetchedGames, fetchedGamesErrorMessage } = useUserContext();

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
            {fetchedGames.length === 0 ? (
              <div className="grid gap-4 justify-center items-center">
                <div className="flex gap-3">
                  <h1>{fetchedGamesErrorMessage.message}</h1>
                  <h1 className="text-red-600">
                    {fetchedGamesErrorMessage.searchedTerm}
                  </h1>
                </div>

                <div className="grid gap-4 justify-center items-center w-full">
                  <h1 className="border-2 text-center p-4">No Results</h1>
                </div>
              </div>
            ) : (
              <>
                <div className="grid max-[767px]:grid-cols-2 max-[767px]:gap-1 max-[767px]:gap-y-2 md:grid-cols-2 md:gap-2 md:gap-y-3 lg:grid-cols-3 transition-opacity duration-500">
                  {fetchedGames.map((game) => (
                    <GameComp
                      key={game._id}
                      gameId={game._id}
                      image={game.image}
                      image1={game.image1}
                      image2={game.image2}
                      image3={game.image3}
                      title={game.title}
                      description={game.description}
                      downloadDescription={game.downloadDescription}
                      minimumSystemRequirement={game.minimumSystemRequirement}
                      recommendedSystemRequirement={
                        game.recommendedSystemRequirement
                      }
                      category={game.category}
                    />
                  ))}
                </div>
                {/* <Pagination
                  totalPages={totalPages}
                  handlePageClick={handlePageClick}
                /> */}
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

export default SearchResultPage;
