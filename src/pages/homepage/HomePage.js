import React, { Fragment } from "react";
import NavigationBar from "../../components/NavigationBar";
import RecentlyAdded from "../../components/RecentlyAdded";
import ReadMoreBtn from "../../components/ReadMoreBtn";
import NextPage from "./NextPage";
import ScrollToTop from "../../components/ScrollToTop";
import Footer from "../Footer";

import { MdNotificationAdd } from "react-icons/md";
import { MdOutlineNoiseAware } from "react-icons/md";

const pcGamesData = [
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156035/GAMERS%20RING/PC%20GAMES/fifa_22_u1ue0x.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156046/GAMERS%20RING/PC%20GAMES/fifa-4_vbline.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156044/GAMERS%20RING/PC%20GAMES/fifa-1_p39bet.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156040/GAMERS%20RING/PC%20GAMES/fifa_23_2_xuzmft.jpg",
    title: "FIFA 22",
    description:
      "FIFA 22 is a football simulation video game published by Electronic Arts It is the 29th installment in the FIFA serie",
    downloadDescription:
      "FIFA 22 is a football simulation video game published by Electronic Arts. It is the 29th installment in the FIFA series, and was released worldwide on 1 October 2021 for Microsoft Windows Nintendo ... Wikipedia Initial release date: September 27, 2021Engine: Frostbite Publisher: Electronic Arts Platforms: PlayStation 4 Nintendo Switch Xbox One Xbox Series X and Series S, PlayStation 5 Google Stadia Microsoft Windows Nominations: The Game Award for Best Sports/Racing Game.",
    minimumSystemRequirement:
      "OS : 64-bit Windows 10, Processor (AMD) : Athlon X4 880K @4GHz or Equivalent, Processor (Intel) : Core i3-6100 @3.7GHz or Equivalent, Memory : 8 GB, Graphics card (AMD) : Radeon HD 7850 or, Equivalent, Graphics card (NVIDIA) : GeForce GTX 660 or Equivalent, Online Connection Requirements : 512 KBPS or faster Internet connection Hard-drive space : 50 GB",
    recommendedSystemRequirement:
      "OS : 64-bit Windows 10, Processor (AMD) : FX 8150 @3.6GHz or, Equivalent, Processor (Intel) : Core i5-3550 @3.40GHz or Equivalent, Memory : 8 GB, Graphics card (AMD) : Radeon R9 270x or, Equivalent, Graphics card (NVIDIA) : GeForce GTX 670 or Equivalent, Online Connection Requirements : Broadband Connection Hard-drive space : 50 GB",
    version:
      "This is the PC VERSION OF THE GAME. if You wont another version or on a different platform navigate to that section.",
    button: "Download",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156035/GAMERS%20RING/PC%20GAMES/call_of_duty_4_qksxhs.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647403/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/call_of_duty-1_1_iu1y0z.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647404/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/call_of_duty-2_xakc8g.png",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647403/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/call_of_duty-3_a9agzn.jpg",
    title: "CALL OF DUTY 4",
    description:
      "Call of Duty : Modern Warfare is a 2019 first-person shooter game developed by Infinity Ward.",
    downloadDescription:
      "The new action-thriller from the award-winning team at Infinity Ward, the creators of the Call of Duty® series, delivers the most intense and cinematic action experience ever. Call of Duty 4: Modern Warfare arms gamers with an arsenal of advanced and powerful modern day firepower and transports them to the most treacherous hotspots around the globe to take on a rogue enemy group threatening the world. As both a U.S Marine and British S.A.S. soldier fighting through an unfolding story full of twists and turns, players use sophisticated technology, superior firepower and coordinated land and air strikes on a battlefield where speed, accuracy and communication are essential to victory. The epic title also delivers an added depth of multiplayer action providing online fans an all-new community of persistence, addictive and customizable gameplay.",
    minimumSystemRequirement:
      "OS: 64-bit Windows 10, Processor : (AMD) Athlon X4 880K @4GHz or Equivalent, Processor : (Intel) Core i3-6100 @3.7GHz or Equivalent, Memory : 8 GB, Graphics card : (AMD) Radeon HD 7850 or Equivalent, Graphics card : (NVIDIA) GeForce GTX 660 or Equivalent, Online Connection Requirements : 512 KBPS or faster Internet connection, Hard-drive space : 50 GB",
    recommendedSystemRequirement:
      "OS : 64-bit Windows 10, Processor (AMD): FX 8150 @3.6GHz or Equivalent, Processor (Intel) : Core i5-3550 @3.40GHz or Equivalent, Memory: 8 GB, Graphics card (AMD) : Radeon R9 270x or Equivalent, Graphics card (NVIDIA) : GeForce GTX 670 or Equivalent, Online Connection Requirements : Broadband Connection, Hard-drive space : 50 GB",
    version:
      "This is the PC VERSION OF THE GAME. if You wont another version or on a different platform navigate to that section.",
    button: "Download",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156035/GAMERS%20RING/PC%20GAMES/demon_cq4cqf.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647406/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/demon_soul_readmore_1_pfvbsy.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647405/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/demon_soul_readmore_2_bgnbrr.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647405/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/demon_soul_readmore_3_s31na3.jpg",
    title: "DEMON SOUL",
    description:
      "Demon's Souls is an action role-playing video game developed by Bluepoint Games and published by Sony.",
    downloadDescription:
      "Demons Souls Remake requires a Radeon RX 570 4GB graphics card with a Core i5-2500K 3.3GHz or Ryzen R5 1400 processor to reach the recommended specs, achieving high graphics setting on 1080p. System memory required for Demons Souls Remake is 8 GB performance memory. Taking a look at the min reqs you will require a Radeon HD 7950 graphics card with a Core i3-2100 3.1GHz or FX-6300 processor to reach the minimum Demons Souls Remake specs, run on low graphics setting and 720p. Minimum RAM requirements are 4 GB system memory. Your graphics card will need to be capable of running DirectX 11.00. Recommended needs around a 8 year old PC to run.",
    minimumSystemRequirement:
      "OS : Windows 7 64-bit, Processor : Intel Core i3-2100 3.1GHz, AMD FX-6300 Graphics : AMD Radeon HD 7950 or NVIDIA GeForce GTX 760, VRAM : 2GB, RAM : 4 GB, HDD : 25 GB, DirectX 11 Compatible Graphics Card",
    recommendedSystemRequirement:
      "OS : Windows 7 64-bit, Processor : Intel Core i5-2500K 3.3GHz AMD Ryzen R5 1400, Graphics : AMD Radeon RX 570 4GB or NVIDIA GeForce GTX 970 4GB, VRAM : 4GB, RAM : 8 GB, HDD : 25 GB, DirectX 11 Compatible Graphics Card",
    version:
      "This is the PC VERSION OF THE GAME. if You wont another version or on a different platform navigate to that section.",
    button: "Download",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156061/GAMERS%20RING/PC%20GAMES/halo_gsvsr5.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647425/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/HALO_1_1_wuwexn.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647426/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/HALO_1_2_fibhf9.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647428/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/HALO_1_3_tpw9l5.jpg",
    title: "HALO INFINTE",
    description:
      "Halo Infinite is a 2021 first-person shooter game developed by 343 Industries and published by Xbox Game Studios.",
    downloadDescription:
      "Halo Infinite brings back Xbox's most iconic game after six years. The Halo franchise began in 2001 — as a launch title for the OG Xbox — and ever since, people have gone bonkers playing some of these titles. Halo Infinite had a surprise launch for its free-to-play multiplayer mode on November 15, alongside the 20th anniversary of Xbox. But the Halo Infinite single-player campaign only releases later this week — Tuesday, December 8 to be specific — and we've had the pleasure of spending some time with it ahead of release..",
    minimumSystemRequirement:
      "OS: Windows 10 RS5 x64 (October 2018 Update), CPU: AMD Ryzen 5 1600 or Intel i5-4440, RAM: 8 GB or more, GPU: AMD Radeon RX 570 or Nvidia GeForce GTX, 1050 Ti Storage: 50 GB, Video Memory: 4GB, DirectX: 12",
    recommendedSystemRequirement:
      "OS: Windows 10 64-bit, CPU: AMD Ryzen 7 3700X or Intel i7-9700k, RAM: 16 GB, GPU: Radeon RX 5700 XT or Nvidia RTX 2070, Storage: 50 GB, Video Memory: 8GB, DirectX: 12",
    version:
      "This is the PC VERSION OF THE GAME. if You wont another version or on a different platform navigate to that section.",
    button: "Download",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156056/GAMERS%20RING/PC%20GAMES/little_big_lyopxg.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647434/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/LITTLE_BIG_1_2_tsmqew.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647434/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/LITTLE_BIG_1_1_iudozk.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647438/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/LITTLE_BIG_1_4_bul0f8.jpg",
    title: "LITTLE BIG PLANET",
    description:
      "LittleBigPlanet is a puzzle platform video game series created by British developer Media Molecule and published by Sony.",
    downloadDescription:
      "LittleBigPlanet is a puzzle platform video game series created by British developer Media Molecule and published by Sony Interactive Entertainment, Most games in the series put a strong emphasis on user-generated content and are based on the series' tagline Play Create Share. Wikipedia.",
    minimumSystemRequirement:
      "OS : Windows 7, CPU SPEED: Dual Core, RAM: 2 GB. VIDEO CARD : Intel HD 4000, GeForce GT 330M, Radeon HD 4670 or equivalent, PIXEL SHADER : 4, VERTEX SHADER : 4, SOUND CARD : DirectX compatible, FREE DISK SPACE : 2 GB, DEDICATED VIDEO RAM : 512 MB",
    recommendedSystemRequirement:
      "OS: Windows 10, CPU SPEED: Quad Core, RAM : 4 GB, VIDEO CARD : GeForce GTX 560 or higher, AMD Radeon HD 5830 or higher PIXEL SHADER : 5.0, VERTEX SHADER : 5.0, SOUND CARD : DirectX compatible, FREE DISK SPACE : 2 GB, DEDICATED VIDEO RAM : 1024 MB",
    version:
      "This is the PC VERSION OF THE GAME. if You wont another version or on a different platform navigate to that section.",
    button: "Download",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156061/GAMERS%20RING/PC%20GAMES/prototype_mpydvp.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647442/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/PROTOTYPE_1_3_cp1wkz.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647441/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/PROTOTYPE_1_2_caaakm.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647445/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/PROTOTYPE_1_4_x5d9wk.jpg",
    title: "PROTOTYPE",
    description:
      "Prototype 2 is a 2012 open world action-adventure video game. Developed by Canadian studio Radical Entertainment.",
    downloadDescription:
      "A prototype is an early sample model or release of a product built to test a concept or process. It is a term used in a variety of contexts including semantics design, electronics and software programming. A prototype is generally used to evaluate a new design to enhance precision by system analysts and users. Wikipedia.",
    minimumSystemRequirement:
      " OS : Windows® XP (with Service Pack 3) or Windows Vista®, Memory: 2 GB, Graphics Card : NVIDIA GeForce 7800 GT, CPU : AMD Athlon 64 X2 4000+",
    recommendedSystemRequirement:
      "OS : Windows 10 64-bit, CPU : AMD Ryzen 7 3700X or Intel i7-9700k, RAM : 16 GB, GPU : Radeon RX 5700 XT or Nvidia RTX 2070, Storage : 50 GB, Video Memory : 8GB, DirectX: 12 ",
    version:
      "This is the PC VERSION OF THE GAME. if You wont another version or on a different platform navigate to that section.",
    button: "Download",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156047/GAMERS%20RING/PC%20GAMES/god_fo_war_p4mkhb.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647417/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/GOD_OF_WAR_1_1_x3ay1o.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647418/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/GOD_OF_WAR_1_2_dkdloj.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647418/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/GOD_OF_WAR_1_4_d8grdl.jpg",
    title: "GOD OF WAR 2018",
    description:
      "God of War is an action-adventure video game developed by Santa Monica Studio and published by Sony.",
    downloadDescription:
      "God of War: Ascension is an action-adventure hack and slash video game developed by Santa Monica Studio, and published by Sony Computer Entertainment. The game was first released on March 12 2013 for the, PlayStation 3 console. It is the seventh installment in the God of War series and a prequel to the entire series. Wikipedia",
    minimumSystemRequirement:
      "OS: Windows 7 64-bit, Processor: Intel Core i3-2100 3.1GHz AMD FX-6300, Graphics : AMD Radeon HD 7950 or NVIDIA GeForce GTX 760, VRAM : 2GB, RAM : 4 GB, HDD : 25 GB, DirectX 11 Compatible Graphics Card",
    recommendedSystemRequirement:
      "OS: Windows 10 64-bit, Processor : Intel Core i5-2500K 3.3GHz AMD Ryzen R5 1400, Graphics : AMD Radeon RX 570 4GB or NVIDIA GeForce GTX 970 4GB, VRAM : 4GB, RAM : 8 GB, HDD : 25 GB, DirectX 11 Compatible Graphics Card",
    version:
      "This is the PC VERSION OF THE GAME. if You wont another version or on a different platform navigate to that section.",
    button: "Download",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156047/GAMERS%20RING/PC%20GAMES/ghost_recon_z7lpld.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647411/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/GHOST_RECON_1_1_oln7gf.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647412/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/GHOST_RECON_1_2_afjakx.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647419/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/GHOST_RECON_1_4_prgbig.jpg",
    title: "GHOST RECON BREAKPOINT",
    description:
      "Tom Clancy's Ghost Recon Breakpoint is a tactical shooter video game developed by Ubisoft Paris.",
    downloadDescription:
      "Tom Clancy's Ghost Recon Breakpoint is a tactical shooter video game developed by Ubisoft Paris and published by Ubisoft., The game was released worldwide on 4 October 2019 for Microsoft Windows PlayStation 4 and Xbox One, and on 18 December 2019 for Stadia. Wikipedia.",
    minimumSystemRequirement:
      "OS : Windows 7/8.1/10, CPU: AMD Ryzen 3 1200/Intel Core I5 4460, RAM : 8 GB, GPU : AMD Radeon R9 280X/Nvidia Geforce GTX 960 (4 GB)",
    recommendedSystemRequirement:
      "OS : Windows 7/8.1/10, CPU : AMD Ryzen 5 1600/Intel Core I7 6700K, RAM : 8 GB, GPU : AMD Radeon RX 480/Nvidia Geforce GTX 1060 (6 GB)",
    version:
      "This is the PC VERSION OF THE GAME. if You wont another version or on a different platform navigate to that section.",
    button: "Download",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156035/GAMERS%20RING/PC%20GAMES/fifa_22_u1ue0x.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156046/GAMERS%20RING/PC%20GAMES/fifa-4_vbline.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156044/GAMERS%20RING/PC%20GAMES/fifa-1_p39bet.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156040/GAMERS%20RING/PC%20GAMES/fifa_23_2_xuzmft.jpg",
    title: "CALL OF DUTY 4",
    description:
      "Call of Duty: Modern Warfare is a 2019 first-person shooter game developed by Infinity Ward.",
    downloadDescription: "",
    minimumSystemRequirement: "",
    recommendedSystemRequirement: "",
    version:
      "This is the PC VERSION OF THE GAME. if You wont another version or on a different platform navigate to that section.",
    button: "Download",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156035/GAMERS%20RING/PC%20GAMES/fifa_22_u1ue0x.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156046/GAMERS%20RING/PC%20GAMES/fifa-4_vbline.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156044/GAMERS%20RING/PC%20GAMES/fifa-1_p39bet.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156040/GAMERS%20RING/PC%20GAMES/fifa_23_2_xuzmft.jpg",
    title: "CALL OF DUTY 4",
    description:
      "Call of Duty: Modern Warfare is a 2019 first-person shooter game developed by Infinity Ward.",
    downloadDescription: "",
    minimumSystemRequirement: "",
    recommendedSystemRequirement: "",
    version:
      "This is the PC VERSION OF THE GAME. if You wont another version or on a different platform navigate to that section.",
    button: "Download",
  },
];

const RecentGamesData = [
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156035/GAMERS%20RING/PC%20GAMES/fifa_22_u1ue0x.jpg",
    title: "FIFA 23",
    date: "March 20, 2023",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156035/GAMERS%20RING/PC%20GAMES/fifa_22_u1ue0x.jpg",
    title: "FIFA 23",
    date: "March 20, 2023",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1712156035/GAMERS%20RING/PC%20GAMES/fifa_22_u1ue0x.jpg",
    title: "FIFA 23",
    date: "March 20, 2023",
  },
];

const HomePage = (props) => {
  const productsPerPage = 9;

  return (
    <Fragment>
      <NavigationBar />
      <div className="max-[767px]:w-[95%] md:w-[95%] m-auto">
        <ScrollToTop />
        <div className="font-serif lg:grid lg:grid-cols-4 lg:gap-3 ">
          <section className="col-span-3">
            <NextPage
              pcGamesData={pcGamesData}
              productsPerPage={productsPerPage}
            />
          </section>
          <section className="max-[767px]:my-4 col-span-1 md:my-8 lg:my-0">
            <div className="border-2 border-gray-500">
              <div className="max-[767px]:p-2 shadow-2xl shadow-gray-200 border-b-2 border-gray-500 bg-blue-600 flex justify-center items-center max-[767px]:gap-4 md:gap-5 md:p-3 lg:p-2">
                <MdNotificationAdd className="text-white max-[767px]:text-5xl md:text-6xl lg:text-4xl" />
                <h1 className="max-[767px]:text-2xl text-white font-black md:text-4xl lg:text-xl">
                  RECENTLY ADDED
                </h1>
              </div>

              <div className="max-[767px]:my-4 grid gap-4 md:my-4">
                {RecentGamesData.map((recentgames) => (
                  <RecentlyAdded
                    image={recentgames.image}
                    title={recentgames.title}
                    date={recentgames.date}
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
                only,Please Navigate to other pages to download for other
                platforms.
              </p>
              <h1 className="max-[767px]:my-2 font-bold lg:text-sm">
                THIS PAGE CONTAINS ONLY PC GAMERS
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
                orem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, quidem.
              </p>
              <ReadMoreBtn />
            </div>

            <div className="max-[767px]:my-4 max-[767px]:p-2 grid max-[767px]:gap-3 text-center bg-gray-300 md:my-4 md:p-4 md:gap-5">
              <h1 className="max-[767px]:text-2xl font-bold md:text-3xl lg:text-xl">
                HOW TO DOWNLOAD
              </h1>
              <p className="md:text-2xl lg:text-base">
                orem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, quidem.
              </p>
              <ReadMoreBtn />
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
};

export default HomePage;
