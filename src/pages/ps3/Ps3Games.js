import { Fragment, useState } from "react";

import ScrollToTop from "../../components/ScrollToTop";
import NavigationBar from "../../components/NavigationBar";
import NextPage from "../../components/NextPage";
import Information from "../../components/Information";
import Footer from "../Footer";

const ps3GameData = [
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713700861/GAMERS%20RING/PS3%20GAMES/The_last_of_us_1_uwapj7.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713700879/GAMERS%20RING/PS3%20GAMES/The_last_of_us_3_ou2ivd.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713700880/GAMERS%20RING/PS3%20GAMES/The_last_of_us_2_jorlwk.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713700866/GAMERS%20RING/PS3%20GAMES/The_last_of_us_4_ffmhaa.jpg",
    title: "The Last of Us",
    description:
      "The Last of Us is an action-adventure game developed by Naughty Dog. Set in a post-apocalyptic United States.",
    downloadDescription:
      "The Last of Us is an action-adventure video game series and media franchise created by Naughty Dog, and published by Sony Interactive Entertainment The series is set in a post-apocalyptic United States, ravaged by cannibalistic humans infected by a mutated fungus in the genus Cordyceps",
    version: "This game is exclusively available for PlayStation 3.",
    button: "DOWNLOAD",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713777438/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_cmmsp5.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713777451/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_5_ezpfpf.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713777448/GAMERS%20RING/PS3%20GAMES/KqWeoCW-uncharted-2-among-thieves-wallpaper_kcniwg.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713777506/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_4_rwmd0r.jpg",
    title: "Uncharted 2: Among Thieves",
    description:
      "Uncharted 2: Among Thieves is an action-adventure game developed by Naughty Dog.",
    downloadDescription:
      "Uncharted 2: Among Thieves is a 2009 action-adventure game developed by Naughty Dog, and published by Sony Computer Entertainment. It is the second game in the Uncharted series, and was released in October 2009 for PlayStation 3",
    version: "This game is exclusively available for PlayStation 3.",
    button: "DOWNLOAD",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713777422/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_1_kodbd0.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713777399/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_3_x6ydjn.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713777424/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_2_suls8o.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713777503/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_6_qh92qk.jpg",
    title: "Metal Gear Solid 4",
    description:
      "Metal Gear Solid 4: Guns of the Patriots is a stealth-action game developed by Kojima Productions.",
    downloadDescription:
      "Metal Gear Solid 4: Guns of the Patriots is a 2008 action-adventure stealth video game developed by Kojima Productions, and published by Konami for the PlayStation 3. It is the sixth Metal Gear game directed by Hideo Kojima, Experience the epic conclusion to Solid Snake's story in Metal Gear Solid 4: Guns of the Patriots. Utilize stealth tactics, advanced weaponry and cutting-edge technology to complete your mission.",
    version: "This game is exclusively available for PlayStation 3.",
    button: "DOWNLOAD",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713777433/GAMERS%20RING/PS3%20GAMES/3245562_m4aa1y.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713778351/GAMERS%20RING/PS3%20GAMES/grand_turismo_2_rct5nv.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713778352/GAMERS%20RING/PS3%20GAMES/grand_turismo_3_mq7n7r.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713778343/GAMERS%20RING/PS3%20GAMES/grand_turismo_4_g6oaih.jpg",
    title: "Gran Turismo 6",
    description:
      "Gran Turismo 6 is a racing simulation game developed by Polyphony Digital.",
    downloadDescription:
      "Gran Turismo 6 is a 2013 racing simulation video game developed by Polyphony Digital and published by Sony Computer Entertainment, for the PlayStation 3. It is the sixth main installment and the eleventh overall in the Gran Turismo series, It was released worldwide on December 6 2013, Experience the thrill of realistic racing in Gran Turismo 6. Choose from hundreds of cars customize your vehicles, and compete against AI opponents or online players.",
    version: "This game is exclusively available for PlayStation 3.",
    button: "DOWNLOAD",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713777493/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_9_tenbjn.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713777146/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_7_juwzrl.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713777383/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_10_vpzcyo.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713777493/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_9_tenbjn.jpg",
    title: "God of War III",
    description:
      "God of War III is an action-adventure game developed by Santa Monica Studio.",
    downloadDescription:
      "God of War III is an action-adventure hack and slash video game developed by Santa Monica Studio, and published by Sony Computer Entertainment Embark on a journey of vengeance in God of War III, Battle legendary creatures solve intricate puzzles, and face off against powerful gods in this epic conclusion to the trilogy.",
    version: "This game is exclusively available for PlayStation 3.",
    button: "DOWNLOAD",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713777397/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_11_wbzyzh.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776999/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_12_buyvma.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776983/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_13_oo3eku.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776980/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_14_nt7bvc.jpg",
    title: "Red Dead Redemption",
    description:
      "Red Dead Redemption is an action-adventure game developed by Rockstar San Diego. Set in the Wild West.",
    downloadDescription:
      "Red Dead Redemption is a 2010 action-adventure game developed by Rockstar San Diego, and published by Rockstar Games. A successor to 2004's Red Dead Revolver it is the second game in the Red Dead series, Red Dead Redemption is set during the decline of the American frontier in the year 1911, Experience the untamed wilderness of the Wild West in Red Dead Redemption. Explore vast landscapes, engage in intense shootouts and immerse yourself in an epic story of redemption.",
    version: "This game is exclusively available for PlayStation 3.",
    button: "DOWNLOAD",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776977/GAMERS%20RING/PS3%20GAMES/4500579_hrdvab.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776977/GAMERS%20RING/PS3%20GAMES/4500556_nzjlft.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776976/GAMERS%20RING/PS3%20GAMES/4500549_v7cxkx.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776980/GAMERS%20RING/PS3%20GAMES/4500587_xs0zob.jpg",
    title: "Demon's Souls",
    description:
      "Demon's Souls is an action role-playing game developed by FromSoftware.",
    downloadDescription:
      "Demon's Souls is a 2020 action role-playing game developed by Bluepoint Games and published by Sony Interactive Entertainment, for the PlayStation 5. The game was released as a launch title for the PlayStation 5 in November, Challenge the darkness in Demon's Souls. Navigate treacherous dungeons, face off against terrifying bosses, and discover the true nature of the Demon's Souls.",
    version: "This game is exclusively available for PlayStation 3.",
    button: "DOWNLOAD",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776983/GAMERS%20RING/PS3%20GAMES/7629028_obkfkl.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776982/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_16_e5wsci.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776983/GAMERS%20RING/PS3%20GAMES/7629083_x52ayg.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776981/GAMERS%20RING/PS3%20GAMES/7629031_hnxpjc.jpg",
    title: "Heavy Rain",
    description:
      "Heavy Rain is an interactive drama and action-adventure game developed by Quantic Dream.",
    downloadDescription:
      "Heavy Rain is a 2010 action-adventure video game developed by Quantic Dream and published by Sony Computer Entertainment, The game features four protagonists involved with the mystery of the Origami Killer a serial killer who uses extended periods of rainfall, to drown his victims Immerse yourself in a gripping psychological thriller in Heavy Rain. Make tough choices, solve intricate puzzles and uncover the truth behind the Origami Killer in this narrative-driven experience.",
    version: "This game is exclusively available for PlayStation 3.",
    button: "DOWNLOAD",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776978/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_18_qlvblb.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776980/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_17_k35nvj.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713777112/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_15_fxkr5y.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776982/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_16_e5wsci.jpg",
    title: "Infamous 2",
    description:
      "Infamous 2 is an action-adventure game developed by Sucker Punch Productions.",
    downloadDescription:
      "Infamous 2 is an action-adventure video game developed by Sucker Punch Productions, and published by Sony Computer Entertainment for PlayStation 3 video game console, It is a sequel to the 2009 video game Infamous. Announced on June 4, 2010 the game was released on June 7 2011, Harness the power of electricity in Infamous 2. Explore the city of New Marais, unleash devastating attacks and shape the future of the world in this superhero adventure.",
    version: "This game is exclusively available for PlayStation 3.",
    button: "DOWNLOAD",
  },

  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776979/GAMERS%20RING/PS3%20GAMES/1787648_eu92sj.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776977/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_20_v9ctnb.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776977/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_19_nx89pe.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776975/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_21_gwtlvl.jpg",
    title: "Ni no Kuni",
    description:
      "Ni no Kuni: Wrath of the White Witch is a role-playing game developed by Level-5.",
    downloadDescription:
      "Ni no Kuni is a series of role-playing video games developed and published in Japan by Level-5, Bandai Namco publishes the games outside Japan. The first games in the series chiefly follow the young Oliver, and his journey to another world to save his mother and stop the beckoning evil, Embark on a magical adventure in Ni no Kuni: Wrath of the White Witch. Explore a whimsical world, capture and train familiars and battle alongside colorful companions in this enchanting RPG.",
    version: "This game is exclusively available for PlayStation 3.",
    button: "DOWNLOAD",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713778351/GAMERS%20RING/PS3%20GAMES/RATCHET_4_vdxnl1.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713778347/GAMERS%20RING/PS3%20GAMES/RATCHET_1_xzl3yh.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713778352/GAMERS%20RING/PS3%20GAMES/RATCHET_3_oxmu9p.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713778352/GAMERS%20RING/PS3%20GAMES/LITTLE_BIG_1_3_m2mxox.jpg",
    title: "Ratchet & Clank Future",
    description:
      "Ratchet & Clank Future: A Crack in Time is a platformer and action-adventure game developed by Insomniac Games.",
    downloadDescription:
      "Ratchet & Clank Future: Tools of Destruction is a 2007 action-adventure platform game developed by Insomniac Games, and published by Sony Computer Entertainment for the PlayStation 3. It is the fifth main installment of the Ratchet & Clank series, following spin-off Ratchet & Clank: Size Matters, Join Ratchet and Clank on an epic journey through time and space in A Crack in Time. Uncover the mysteries of the Great Clock, battle intergalactic threats and save the universe from destruction.",
    version: "This game is exclusively available for PlayStation 3.",
    button: "DOWNLOAD",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776984/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_22_mb2wgp.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713778352/GAMERS%20RING/PS3%20GAMES/LITTLE_BIG_1_3_m2mxox.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713778350/GAMERS%20RING/PS3%20GAMES/LITTLE_BIG_1_4_nfewpe.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713778346/GAMERS%20RING/PS3%20GAMES/LITTLE_BIG_1_2_ehhr1t.jpg",
    title: "LittleBigPlanet 2",
    description:
      "LittleBigPlanet 2 is a puzzle-platformer game developed by Media Molecule.",
    downloadDescription:
      "LittleBigPlanet 2 is a puzzle-platform video game developed by Media Molecule and published by Sony Computer Entertainment ,for the PlayStation 3 Explore a world of endless creativity in LittleBigPlanet 2, Play through user-generated levels create your own unique creations, and share them with the community in this charming platformer.",
    version: "This game is exclusively available for PlayStation 3.",
    button: "DOWNLOAD",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713818012/GAMERS%20RING/PS3%20GAMES/1111261_zrjlcf.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713818007/GAMERS%20RING/PS3%20GAMES/741575_ykgtof.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713818014/GAMERS%20RING/PS3%20GAMES/1111267_r2y5mq.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713818034/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_kycsz9.jpg",
    title: "Batman: Arkham City",
    description:
      "Batman: Arkham City is an action-adventure game developed by Rocksteady Studios.",
    downloadDescription:
      "Batman: Arkham City is a 2011 action-adventure game developed by Rocksteady Studios and published by Warner Bros, Interactive Entertainment Based on the DC Comics superhero Batman, it is the sequel to the 2009 video game Batman: Arkham Asylum and the second installment in the Batman: Arkham series, Become the Dark Knight in Batman: Arkham City. Explore the sprawling cityscape, engage in brutal combat and confront iconic villains in this critically acclaimed superhero game.",
    version: "This game is exclusively available for PlayStation 3.",
    button: "DOWNLOAD",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713818022/GAMERS%20RING/PS3%20GAMES/476265_vxo9bp.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713818011/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_1_zshwgn.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713818022/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_3_mktqte.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713818003/GAMERS%20RING/PS3%20GAMES/476282_trj6wn.jpg",
    title: "Persona 5",
    description:
      "Persona 5 is a role-playing game developed by Atlus. Players control a group of high school students known as the Phantom Thieves.",
    downloadDescription:
      "Persona 5 is a 2016 role-playing video game developed by P-Studio and published by Atlus, The game is the sixth installment in the Persona series itself a part of the larger Megami Tensei franchise, It was released for PlayStation 3 and PlayStation 4 in Japan in September 2016 and worldwide in April 2017, Enter the metaverse and change the hearts of corrupt individuals in Persona 5. Balance daily life as a student, with the thrilling adventures of the Phantom Thieves in this stylish RPG.",
    version: "This game is exclusively available for PlayStation 3.",
    button: "DOWNLOAD",
  },
  // {
  //   image: "https://cdn.example.com/ps3_game16_image.jpg",
  //   image1: "https://cdn.example.com/ps3_game16_screenshot1.jpg",
  //   image2: "https://cdn.example.com/ps3_game16_screenshot2.jpg",
  //   image3: "https://cdn.example.com/ps3_game16_screenshot3.jpg",
  //   title: "Ico & Shadow of the Colossus Collection",
  //   description:
  //     "Ico & Shadow of the Colossus Collection is a compilation of two classic adventure games developed by Team Ico.",
  //   downloadDescription:
  //     "The Ico & Shadow of the Colossus Collection is a video game bundle that contains high-definition remasters of two PlayStation 2 games, Ico and Shadow of the Colossus for the PlayStation 3, Relive two timeless classics in the Ico & Shadow of the Colossus Collection. Traverse stunning landscapes, solve intricate puzzles and face off against massive creatures in these unforgettable adventures.",
  //   minimumSystemRequirement: "PlayStation 3 console",
  //   recommendedSystemRequirement: "PlayStation 3 console",
  //   version: "This game is exclusively available for PlayStation 3.",
  //   button: "DOWNLOAD",
  // },
  // {
  //   image: "https://cdn.example.com/ps3_game17_image.jpg",
  //   image1: "https://cdn.example.com/ps3_game17_screenshot1.jpg",
  //   image2: "https://cdn.example.com/ps3_game17_screenshot2.jpg",
  //   image3: "https://cdn.example.com/ps3_game17_screenshot3.jpg",
  //   title: "Valkyria Chronicles",
  //   description:
  //     "Valkyria Chronicles is a tactical role-playing game developed by Sega. Set in an alternate version of World War II.",
  //   downloadDescription:
  //     "Valkyria Chronicles is a tactical role-playing game developed and published by Sega for the PlayStation 3 in 2008, A Windows version was released on November 11 2014. A remastered version for PlayStation 4 was released in Japan on February 10 2016, with a Western release on May 17 2016, Lead your squad to victory in Valkyria Chronicles. Strategize on the battlefield, customize your troops and uncover the truth behind the war in this innovative RPG.",
  //   minimumSystemRequirement: "PlayStation 3 console",
  //   recommendedSystemRequirement: "PlayStation 3 console",
  //   version: "This game is exclusively available for PlayStation 3.",
  //   button: "DOWNLOAD",
  // },
  // {
  //   image: "https://cdn.example.com/ps3_game18_image.jpg",
  //   image1: "https://cdn.example.com/ps3_game18_screenshot1.jpg",
  //   image2: "https://cdn.example.com/ps3_game18_screenshot2.jpg",
  //   image3: "https://cdn.example.com/ps3_game18_screenshot3.jpg",
  //   title: "Kingdom Hearts HD 2.5 Remix",
  //   description:
  //     "Kingdom Hearts HD 2.5 Remix is a compilation of remastered Kingdom Hearts games.",
  //   downloadDescription:
  //     "Kingdom Hearts HD 2.5 Remix is an HD remastered collection of three games in Square Enix's Kingdom Hearts series: Kingdom Hearts II, Birth by Sleep and Re:coded. A successor to the series' HD 1.5 Remix collection, it was released for the PlayStation 3 in Japan in October 2014 and internationally two months later, Embark on a magical journey in Kingdom Hearts HD 2.5 Remix. Relive the adventures of Sora, Donald and Goofy as they travel through beloved Disney worlds and encounter legendary characters.",
  //   minimumSystemRequirement: "PlayStation 3 console",
  //   recommendedSystemRequirement: "PlayStation 3 console",
  //   version: "This game is exclusively available for PlayStation 3.",
  //   button: "DOWNLOAD",
  // },
  // {
  //   image: "https://cdn.example.com/ps3_game19_image.jpg",
  //   image1: "https://cdn.example.com/ps3_game19_screenshot1.jpg",
  //   image2: "https://cdn.example.com/ps3_game19_screenshot2.jpg",
  //   image3: "https://cdn.example.com/ps3_game19_screenshot3.jpg",
  //   title: "Beyond: Two Souls",
  //   description:
  //     "Beyond: Two Souls is an interactive drama and action-adventure game developed by Quantic Dream. Players control Jodie Holmes,",
  //   downloadDescription:
  //     "Beyond: Two Souls is an action-adventure game developed by Quantic Dream, and published by Sony Computer Entertainment. It was released on 8 October 2013 for PlayStation 3, and for PlayStation 4 on 24 November 2015. A Windows port self-published by Quantic Dream was released on 22 July 2019, Unravel the mysteries of life and death in Beyond: Two Souls. Make impactful choices, experience thrilling action sequences and explore the emotional depth of Jodie's story in this cinematic adventure.",
  //   minimumSystemRequirement: "PlayStation 3 console",
  //   recommendedSystemRequirement: "PlayStation 3 console",
  //   version: "This game is exclusively available for PlayStation 3.",
  //   button: "DOWNLOAD",
  // },
];

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
  const [searchedWord, setSearchedWord] = useState("");

  const filteredProducts = ps3GameData.filter((GameData) =>
    GameData.title.toLowerCase().includes(searchedWord.toLowerCase())
  );

  const productsToDisplay = searchedWord.trim()
    ? filteredProducts
    : ps3GameData;

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
                recentGamesData={ps3RecentRelease}
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
