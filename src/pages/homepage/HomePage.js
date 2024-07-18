import { Fragment, useState } from "react";

import NavigationBar from "../../components/NavigationBar";
import NextPage from "../../components/NextPage";
import Information from "../../components/Information";
import ScrollToTop from "../../components/ScrollToTop";
import Footer from "../Footer";

const pcGamesData = [
  {
    id: "pc1",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686252/GAMERS%20RING/PC%20GAMES/Assassins_creed_uwxj0o.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686315/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_2_bpzodd.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686315/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_1_cwawp3.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686313/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_3_lrixed.jpg",
    title: "Assassin's Creed: Ragnarok",
    description:
      "Assassin's Creed: Ragnarok is an action-adventure game developed and published by Ubisoft. Set in the Viking Age.",
    downloadDescription:
      "Embark on an epic journey through the Viking Age in Assassin's Creed: Ragnarok. Sail across the open seas, raid enemy settlements, and forge alliances in this immersive action-adventure game.",
    minimumSystemRequirement:
      "OS: Windows 10, Processor: Intel Core i5-4460 or AMD Ryzen 3 1200, Memory: 8 GB RAM, Graphics: NVIDIA GeForce GTX 960 or AMD Radeon R9 380, DirectX: Version 11, Storage: 50 GB available space",
    recommendedSystemRequirement:
      "OS: Windows 11, Processor: Intel Core i7-6700 or AMD Ryzen 5 1600, Memory: 16 GB RAM, Graphics: NVIDIA GeForce GTX 1060 or AMD Radeon RX 570, DirectX: Version 11, Storage: 50 GB available space",
    version:
      "This is the PC version of the game. For other platforms, check respective stores.",
    button: "Download",
  },
  {
    id: "pc2",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686252/GAMERS%20RING/PC%20GAMES/Elden_ring_yjmgs7.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686312/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_6_wdodoj.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686313/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_7_a8mhso.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686312/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_5_dnrt86.jpg",
    title: "Elden Ring",
    description:
      "Embark on a journey across the Lands Between in Elden Ring. Explore mythical realms, battle formidable foes.",
    downloadDescription:
      "Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. Set in a fantasy world created by George R. R. Martin and Hidetaka Miyazaki, players explore vast landscapes and engage in challenging combat.",
    minimumSystemRequirement:
      "OS: Windows 10, Processor: Intel Core i5-2500K or AMD FX-6300, Memory: 8 GB RAM, Graphics: NVIDIA GeForce GTX 770 2GB / AMD Radeon R9 280, DirectX: Version 11, Storage: 60 GB available space",
    recommendedSystemRequirement:
      "OS: Windows 11, Processor: Intel Core i7-4770K or AMD Ryzen 5 1500X, Memory: 16 GB RAM, Graphics: NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 480 8GB, DirectX: Version 11, Storage: 60 GB available space",
    version:
      "This is the PC version of the game. For other platforms, check respective stores.",
    button: "Download",
  },
  {
    id: "pc3",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686251/GAMERS%20RING/PC%20GAMES/Witcher_lxflpj.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686302/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_13_zqrihp.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686301/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_14_mywxjf.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686300/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_15_hbld11.jpg",
    title: "The Witcher III",
    description:
      "The Witcher II: is an action role-playing game developed and published by CD Projekt. Continuing the story of Geralt of Rivia.",
    downloadDescription:
      "Return to the world of The Witcher in this thrilling new installment. Navigate treacherous landscapes, encounter mythical creatures, and make choices that shape the fate of the realm.",
    minimumSystemRequirement:
      "OS: Windows 10, Processor: Intel Core i5-8400 or AMD Ryzen 5 2600, Memory: 16 GB RAM, Graphics: NVIDIA GeForce GTX 1060 or AMD Radeon RX 580, DirectX: Version 12, Storage: 70 GB available space",
    recommendedSystemRequirement:
      "OS: Windows 11, Processor: Intel Core i7-9700 or AMD Ryzen 7 3700X, Memory: 32 GB RAM, Graphics: NVIDIA GeForce RTX 3060 or AMD Radeon RX 6700 XT, DirectX: Version 12, Storage: 70 GB available space",
    version:
      "This is the PC version of the game. For other platforms, check respective stores.",
    button: "Download",
  },
  {
    id: "pc4",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686251/GAMERS%20RING/PC%20GAMES/Starfield_plxbeu.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686297/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_17_uwi0ec.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686296/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_18_wh5qer.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686295/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_19_udknpp.jpg",
    title: "Starfield",
    description:
      "Starfield is a space exploration game developed by Bethesda Game Studios. Set in an open universe, players take on the role of a space explorer.",
    downloadDescription:
      "Embark on an interstellar journey in Starfield. Explore alien worlds, encounter strange creatures, and uncover the secrets of the universe in this epic space adventure.",
    minimumSystemRequirement:
      "OS: Windows 10, Processor: Intel Core i5-8400 or AMD Ryzen 5 3600, Memory: 16 GB RAM, Graphics: NVIDIA GeForce GTX 1070 or AMD Radeon RX 5700 XT, DirectX: Version 12, Storage: 100 GB available space",
    recommendedSystemRequirement:
      "OS: Windows 11, Processor: Intel Core i7-9700K or AMD Ryzen 7 3700X, Memory: 32 GB RAM, Graphics: NVIDIA GeForce RTX 2080 or AMD Radeon RX 6800 XT, DirectX: Version 12, Storage: 100 GB available space",
    version:
      "This is the PC version of the game. For other platforms, check respective stores.",
    button: "Download",
  },
  {
    id: "pc5",
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
    id: "pc6",
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
    id: "pc7",
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
    id: "pc8",
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
    id: "pc9",
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
    id: "pc10",
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
    id: "pc11",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686308/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_8_t1ayqo.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686303/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_9_k3n2fn.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686303/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_10_jrenlv.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686303/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_11_cgepkg.jpg",
    title: "Cyberpunk 2077",
    description:
      "Cyberpunk 2078 is an action role-playing game developed and published by CD Projekt. Set in the dystopian Night City.",
    downloadDescription:
      "Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt Red and published by CD Projekt, and based on Mike Pondsmith's Cyberpunk tabletop game series. The plot is set in the fictional metropolis of Night City, California within the dystopian Cyberpunk universe.",
    minimumSystemRequirement:
      "OS: Windows 10, Processor: Intel Core i5-3570K or AMD FX-8310, Memory: 8 GB RAM, Graphics: NVIDIA GeForce GTX 780 or AMD Radeon RX 470, DirectX: Version 12, Storage: 70 GB available space",
    recommendedSystemRequirement:
      "OS: Windows 11, Processor: Intel Core i7-4790 or AMD Ryzen 5 2600, Memory: 16 GB RAM, Graphics: NVIDIA GeForce GTX 1070 or AMD Radeon RX Vega 64, DirectX: Version 12, Storage: 70 GB available space",
    version:
      "This is the PC version of the game. For other platforms, check respective stores.",
    button: "Download",
  },
  {
    id: "pc12",
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
    id: "pc13",
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
    id: "pc14",
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

  // {
  //   image: "https://cdn.example.com/game7_image.jpg",
  //   image1: "https://cdn.example.com/game7_screenshot1.jpg",
  //   image2: "https://cdn.example.com/game7_screenshot2.jpg",
  //   image3: "https://cdn.example.com/game7_screenshot3.jpg",
  //   title: "Final Fantasy XVI",
  //   description:
  //     "Final Fantasy XVI is a role-playing game developed and published by Square Enix. Set in the world of Valisthea, players embark on a journey of redemption and revenge amidst political turmoil.",
  //   downloadDescription:
  //     "Experience the next chapter in the iconic Final Fantasy series. Dive into a richly detailed world, battle fearsome foes, and uncover the truth behind the struggle for power in Final Fantasy XVI.",
  //   minimumSystemRequirement:
  //     "OS: Windows 10, Processor: Intel Core i5-8400 or AMD Ryzen 5 1600, Memory: 16 GB RAM, Graphics: NVIDIA GeForce GTX 1060 or AMD Radeon RX 570, DirectX: Version 12, Storage: 100 GB available space",
  //   recommendedSystemRequirement:
  //     "OS: Windows 11, Processor: Intel Core i7-9700 or AMD Ryzen 7 3700X, Memory: 32 GB RAM, Graphics: NVIDIA GeForce RTX 3070 or AMD Radeon RX 6700 XT, DirectX: Version 12, Storage: 100 GB available space",
  //   version:
  //     "This is the PC version of the game. For other platforms, check respective stores.",
  //   button: "Download",
  // },
  // {
  //   image: "https://cdn.example.com/game8_image.jpg",
  //   image1: "https://cdn.example.com/game8_screenshot1.jpg",
  //   image2: "https://cdn.example.com/game8_screenshot2.jpg",
  //   image3: "https://cdn.example.com/game8_screenshot3.jpg",
  //   title: "The Elder Scrolls VI",
  //   description:
  //     "The Elder Scrolls VI is an upcoming action role-playing game developed by Bethesda Game Studios. Set in the vast continent of Tamriel, players embark on an epic quest to uncover the secrets of the land.",
  //   downloadDescription:
  //     "Prepare to return to the world of Tamriel in the highly anticipated Elder Scrolls VI. Explore diverse landscapes, encounter legendary creatures, and shape the fate of the realm in this epic RPG.",
  //   minimumSystemRequirement:
  //     "OS: Windows 10, Processor: Intel Core i5-8400 or AMD Ryzen 5 2600, Memory: 16 GB RAM, Graphics: NVIDIA GeForce GTX 1070 or AMD Radeon RX 5700 XT, DirectX: Version 12, Storage: 100 GB available space",
  //   recommendedSystemRequirement:
  //     "OS: Windows 11, Processor: Intel Core i7-9700K or AMD Ryzen 7 3700X, Memory: 32 GB RAM, Graphics: NVIDIA GeForce RTX 3080 or AMD Radeon RX 6800 XT, DirectX: Version 12, Storage: 100 GB available space",
  //   version:
  //     "This is the PC version of the game. For other platforms, check respective stores.",
  //   button: "Download",
  // },
  // {
  //   image: "https://cdn.example.com/game9_image.jpg",
  //   image1: "https://cdn.example.com/game9_screenshot1.jpg",
  //   image2: "https://cdn.example.com/game9_screenshot2.jpg",
  //   image3: "https://cdn.example.com/game9_screenshot3.jpg",
  //   title: "Horizon Forbidden West",
  //   description:
  //     "Horizon Forbidden West is an action role-playing game developed by Guerrilla Games. Set in a post-apocalyptic world inhabited by robotic creatures, players assume the role of Aloy as she ventures into the Forbidden West.",
  //   downloadDescription:
  //     "Explore the mysteries of the Forbidden West in this highly anticipated sequel to Horizon Zero Dawn. Battle mechanical beasts, uncover ancient secrets, and discover the truth about Aloy's origins.",
  //   minimumSystemRequirement:
  //     "OS: Windows 10, Processor: Intel Core i5-6600K or AMD Ryzen 5 1600, Memory: 16 GB RAM, Graphics: NVIDIA GeForce GTX 1060 6GB or AMD Radeon RX 580 8GB, DirectX: Version 12, Storage: 100 GB available space",
  //   recommendedSystemRequirement:
  //     "OS: Windows 11, Processor: Intel Core i7-9700K or AMD Ryzen 7 3700X, Memory: 32 GB RAM, Graphics: NVIDIA GeForce RTX 3060 12GB or AMD Radeon RX 6700 XT 12GB, DirectX: Version 12, Storage: 100 GB available space",
  //   version:
  //     "This is the PC version of the game. For other platforms, check respective stores.",
  //   button: "Download",
  // },
  // {
  //   image: "https://cdn.example.com/game10_image.jpg",
  //   image1: "https://cdn.example.com/game10_screenshot1.jpg",
  //   image2: "https://cdn.example.com/game10_screenshot2.jpg",
  //   image3: "https://cdn.example.com/game10_screenshot3.jpg",
  //   title: "God of War: Ragnarok",
  //   description:
  //     "God of War: Ragnarok is an action-adventure game developed by Santa Monica Studio. Continuing the story of Kratos and Atreus, players journey to the realm of Norse mythology to confront the Norse gods.",
  //   downloadDescription:
  //     "Enter the realm of Norse mythology in God of War: Ragnarok. Embark on a journey of vengeance and redemption, battle gods and monsters, and uncover the truth behind Ragnarok.",
  //   minimumSystemRequirement:
  //     "OS: Windows 10, Processor: Intel Core i5-8400 or AMD Ryzen 5 2600, Memory: 16 GB RAM, Graphics: NVIDIA GeForce GTX 1060 6GB or AMD Radeon RX 580 8GB, DirectX: Version 12, Storage: 100 GB available space",
  //   recommendedSystemRequirement:
  //     "OS: Windows 11, Processor: Intel Core i7-9700K or AMD Ryzen 7 3700X, Memory: 32 GB RAM, Graphics: NVIDIA GeForce RTX 3070 8GB or AMD Radeon RX 6800 XT 16GB, DirectX: Version 12, Storage: 100 GB available space",
  //   version:
  //     "This is the PC version of the game. For other platforms, check respective stores.",
  //   button: "Download",
  // },
  // {
  //   image: "https://cdn.example.com/game11_image.jpg",
  //   image1: "https://cdn.example.com/game11_screenshot1.jpg",
  //   image2: "https://cdn.example.com/game11_screenshot2.jpg",
  //   image3: "https://cdn.example.com/game11_screenshot3.jpg",
  //   title: "Grand Theft Auto VI",
  //   description:
  //     "Grand Theft Auto VI is an action-adventure game developed and published by Rockstar Games. Set in the fictional city of Vice City, players embark on a criminal underworld journey filled with heists, car chases, and mayhem.",
  //   downloadDescription:
  //     "Return to the vibrant streets of Vice City in Grand Theft Auto VI. Explore a sprawling open-world, engage in thrilling missions, and build your criminal empire in this highly anticipated sequel.",
  //   minimumSystemRequirement:
  //     "OS: Windows 10, Processor: Intel Core i5-8400 or AMD Ryzen 5 3600, Memory: 16 GB RAM, Graphics: NVIDIA GeForce GTX 1060 6GB or AMD Radeon RX 5700 XT 8GB, DirectX: Version 12, Storage: 100 GB available space",
  //   recommendedSystemRequirement:
  //     "OS: Windows 11, Processor: Intel Core i7-9700K or AMD Ryzen 7 3700X, Memory: 32 GB RAM, Graphics: NVIDIA GeForce RTX 3070 8GB or AMD Radeon RX 6800 XT 16GB, DirectX: Version 12, Storage: 100 GB available space",
  //   version:
  //     "This is the PC version of the game. For other platforms, check respective stores.",
  //   button: "Download",
  // },
];

const RecentlyAddedData = [
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686308/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/wallpaperflare.com_wallpaper_8_t1ayqo.jpg",
    title: "CYBERPUNK 2077",
    date: "March 5, 2022",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713686251/GAMERS%20RING/PC%20GAMES/Starfield_plxbeu.jpg",
    title: "Starfield",
    date: "January 25, 2021",
  },
  {
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
  const [searchedWord, setSearchedWord] = useState("");

  const filteredProducts = pcGamesData.filter((gameData) =>
    gameData.title.toLowerCase().includes(searchedWord.toLowerCase())
  );

  const productsToDisplay = searchedWord.trim()
    ? filteredProducts
    : pcGamesData;

  if (productsToDisplay.length === 0) {
    return (
      <>
        <ScrollToTop />
        <NavigationBar
          onHandleInputInNav={(searchWord) => {
            setSearchedWord(searchWord);
          }}
          background="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647417/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/GHOST_RECON_1_3_cxqjai.jpg"
          images={backgroundImages}
        />
        <div className="max-[767px]:w-[95%] md:w-[95%] m-auto">
          <div className="font-serif lg:grid lg:grid-cols-4 lg:gap-3 ">
            <section className="col-span-3">
              <h1 className="text-xl">No results for {searchedWord}</h1>
              <p>Try checking your spelling or use more general terms</p>
            </section>

            <section className="max-[767px]:my-4 col-span-1 md:my-8 lg:my-0">
              <Information
                recentGamesData={RecentlyAddedData}
                platform="THIS PAGE CONTAINS ONLY PC GAMES"
              />
            </section>
          </div>
        </div>
      </>
    );
  }

  return (
    <Fragment>
      <ScrollToTop />
      <NavigationBar
        onHandleInputInNav={(searchWord) => {
          setSearchedWord(searchWord);
        }}
        background="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647417/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/GHOST_RECON_1_3_cxqjai.jpg"
        images={backgroundImages}
      />
      <div className="max-[767px]:w-[95%] md:w-[95%] m-auto">
        <div className="font-serif lg:grid lg:grid-cols-4 lg:gap-3 ">
          <section className="col-span-3">
            <NextPage data={productsToDisplay} itemsPerPage="9" />
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
