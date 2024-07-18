import { Fragment, useState } from "react";

import NextPage from "../../components/NextPage";
import Information from "../../components/Information";
import ScrollToTop from "../../components/ScrollToTop";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../Footer";

const ps4GameData = [
  {
    id: "ps4_1",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830539/GAMERS%20RING/PS4%20GAMES/384285_ewelnw.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830546/GAMERS%20RING/PS4%20GAMES/384143_j575sn.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830541/GAMERS%20RING/PS4%20GAMES/384223_u2yu2x.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830534/GAMERS%20RING/PS4%20GAMES/384366_cchybb.jpg",
    title: "The Witcher 3: Wild Hunt",
    description:
      "The Witcher 3: Wild Hunt is an action role-playing game developed by CD Projekt Red...",
    downloadDescription:
      "The Witcher 3: Wild Hunt comes with new features and items including a built-in Photo Mode swords, armor and alternate outfits inspired by The Witcher Netflix series — and more! Behold the dark fantasy, world of the Continent like never before, Embark on an epic journey in The Witcher 3: Wild Hunt. Explore a vast open world, engage in thrilling combat and make impactful choices that shape the course of the story.",
    version: "This game is exclusively available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_2",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830556/GAMERS%20RING/PS4%20GAMES/672041_byrh43.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830505/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_2_xumrtb.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830537/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_yucesb.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830556/GAMERS%20RING/PS4%20GAMES/672041_byrh43.jpg",
    title: "Red Dead Redemption 2",
    description:
      "Red Dead Redemption 2 is an action-adventure game developed by Rockstar Games. Set in the late 1800s...",
    downloadDescription:
      "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games, The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption, Immerse yourself in the vast and detailed world of Red Dead Redemption 2. Experience life as an outlaw, engage in intense shootouts and uncover the mysteries of the Wild West.",
    version: "This game is exclusively available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_3",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713831223/GAMERS%20RING/PS4%20GAMES/spider_man_idft8u.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830524/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_4_c54vqp.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830489/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_5_k4vjcj.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830489/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_6_ankixv.jpg",
    title: "Marvel's Spider-Man",
    description:
      "Marvel's Spider-Man is an action-adventure game developed by Insomniac Games...",
    downloadDescription:
      "Marvel's Spider-Man is a 2018 action-adventure game developed by Insomniac Games, and published by Sony Interactive Entertainment Swing into action as the iconic, web-slinger in Marvel's Spider-Man, Explore a vibrant open world master acrobatic combat, and save the day in this thrilling superhero adventure.",
    version: "This game is exclusively available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_4",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830574/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_7_afrwgi.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830496/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_8_uttjcg.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830470/GAMERS%20RING/PS4%20GAMES/5832720_erc6tl.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830450/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_9_bs8fyy.jpg",
    title: "Horizon Zero Dawn",
    description:
      "Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games. Set in a post-apocalyptic world...",
    downloadDescription:
      "Horizon Zero Dawn is a 2017 action role-playing game developed by Guerrilla Games, and published by Sony Interactive Entertainment. The game was released for PlayStation 4, in 2017 and Windows in 2020. Horizon Zero Dawn is the first game of the Horizon video game series, Embark on a journey of discovery in Horizon Zero Dawn. Traverse breathtaking landscapes, engage in tactical combat and unravel the secrets of a lost civilization in this, visually stunning adventure.",
    version: "This game is exclusively available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_5",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830444/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_10_xqcel7.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830438/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_13_smqjny.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830447/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_11_w7wufw.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830489/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_12_tvymih.jpg",
    title: "God of War",
    description:
      "God of War is an action-adventure game developed by Santa Monica Studio...",
    downloadDescription:
      "God of War is an action-adventure game developed by Santa Monica Studio, and published by Sony Interactive Entertainment. The game was released for the PlayStation 4 in April 2018, with a Windows port released in January 2022, Experience a new chapter in the epic saga of God of War. Journey through Norse mythology, battle legendary creatures and confront the sins of Kratos' past, in this breathtaking adventure.",
    version: "This game is exclusively available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_6",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830411/GAMERS%20RING/PS4%20GAMES/7070023_xfple6.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830431/GAMERS%20RING/PS4%20GAMES/7070052_dljifq.png",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830568/GAMERS%20RING/PS4%20GAMES/7070036_skldon.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830456/GAMERS%20RING/PS4%20GAMES/7070043_v7hxuc.jpg",
    title: "FIFA 22",
    description:
      "FIFA 22 is a football simulation video game published by Electronic Arts...",
    downloadDescription:
      "FIFA 22 is a football simulation video game published by Electronic Arts, It is the 29th installment in the FIFA series and was released worldwide, on 1 October 2021 for Nintendo Switch, PlayStation 4 Experience the thrill of football in FIFA 22. Play as your favorite teams, compete in various modes and showcase your skills on the virtual pitch, in this immersive sports game.",
    version: "This game is available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_7",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830402/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_14_rl1igm.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830480/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_15_xokdet.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830377/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_16_kv2fjo.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830375/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_17_diu5va.jpg",
    title: "Uncharted 4: A Thief's End",
    description:
      "Uncharted 4: A Thief's End is an action-adventure game developed by Naughty Dog...",
    downloadDescription:
      "Uncharted 4: A Thief's End is a 2016 action-adventure game developed by Naughty Dog, and published by Sony Computer Entertainment. It is the fourth main entry in the Uncharted series, Join Nathan Drake in his final quest in Uncharted 4: A Thief's End. Explore exotic locales, solve intricate puzzles and face off against ruthless enemies in this thrilling, conclusion to the series.",
    version: "This game is exclusively available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_8",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830558/GAMERS%20RING/PS4%20GAMES/476265_lsdhnq.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830555/GAMERS%20RING/PS4%20GAMES/476282_gksgcf.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830553/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_1_feccjm.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830549/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_3_fpeweq.jpg",
    title: "Persona 5",
    description:
      "Persona 5 is a role-playing game developed by Atlus. Players control a group of high school students known as the Phantom Thieves...",
    downloadDescription:
      "Persona 5 is a 2016 role-playing video game developed by P-Studio and published by Atlus, The game is the sixth installment in the Persona series itself a part of the larger Megami Tensei franchise, It was released for PlayStation 3 and PlayStation 4 in Japan in September 2016 and worldwide in April 2017, Enter the metaverse and change the hearts of corrupt individuals in Persona 5. Balance daily life as a student, with the thrilling adventures of the Phantom Thieves in this stylish RPG.",
    version: "This game is exclusively available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_9",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830379/GAMERS%20RING/PS4%20GAMES/4522839_fh9pql.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830383/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_18_nyjwg6.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830375/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_19_i7tmsw.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830369/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_20_jflkgk.jpg",
    title: "Ghost of Tsushima",
    description:
      "Ghost of Tsushima is an action-adventure game developed by Sucker Punch Productions. Set in feudal Japan...",
    downloadDescription:
      "Ghost of Tsushima is a 2020 action-adventure game developed by Sucker Punch Productions, and published by Sony Interactive Entertainment. The player controls Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan, Embark on a journey of honor and revenge in Ghost of Tsushima. Explore a vast open world, engage in intense sword fights and embrace the way of the samurai in this epic tale, of warfare and sacrifice.",
    version: "This game is exclusively available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_10",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830377/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_21_ktbhqv.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830337/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_22_f7ot9r.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830375/GAMERS%20RING/PS4%20GAMES/1927941_telqe7.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830338/GAMERS%20RING/PS4%20GAMES/951832_hjhfjx.jpg",
    title: "Death Stranding",
    description:
      "Death Stranding is an action game developed by Kojima Productions. Players control Sam Porter Bridges as he journeys...",
    downloadDescription:
      "Death Stranding is a 2019 action game developed by Kojima Productions and published by Sony, Interactive Entertainment for the PlayStation 4. It is the first game from director Hideo Kojima and Kojima Productions, after their split from Konami in 2015 Embark on a haunting and unforgettable odyssey in Death Stranding, Traverse breathtaking landscapes forge connections with other players, and unravel the mysteries of life death, and rebirth in a world on the brink of collapse.",
    version: "This game is exclusively available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_11",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830334/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_23_lig0jd.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830313/GAMERS%20RING/PS4%20GAMES/1727839_hd4qbo.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830338/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_24_y5i5ks.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830304/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_25_eaywq8.jpg",
    title: "The Last of Us Part II",
    description:
      "The Last of Us Part II is an action-adventure game developed by Naughty Dog. Set in a post-apocalyptic world...",
    downloadDescription:
      "The Last of Us Part II is a 2020 action-adventure game developed by Naughty Dog, and published by Sony Interactive Entertainment Experience the emotional and harrowing journey of survival, in The Last of Us Part II. Navigate through dangerous environments face off against ruthless enemies, and confront the darkness that lies within in this highly anticipated sequel.",
    version: "This game is exclusively available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_12",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830366/GAMERS%20RING/PS4%20GAMES/2024122_hoqtcr.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830315/GAMERS%20RING/PS4%20GAMES/2588297_pxf56p.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830319/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_26_ehxrot.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830297/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_27_fyvwmg.jpg",
    title: "Final Fantasy VII Remake",
    description:
      "Final Fantasy VII Remake is a role-playing game developed by Square Enix. Players control Cloud Strife, a former SOLDIER...",
    downloadDescription:
      "Final Fantasy VII Remake is an action role-playing game by Square Enix, released for PlayStation 4 in April 2020. It is the first in a planned trilogy of games, remaking the 1997 PlayStation game Final Fantasy VII, Return to the city of Midgar in Final Fantasy VII Remake. Experience the iconic story, engage in thrilling combat and explore the sprawling metropolis in this, reimagining of a classic RPG.",
    version: "This game is exclusively available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_13",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830319/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_28_rshi8r.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830319/GAMERS%20RING/PS4%20GAMES/1298638_j2oxop.png",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830294/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_29_r7da3s.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830297/GAMERS%20RING/PS4%20GAMES/1298653_mdes75.jpg",
    title: "The Last Guardian",
    description:
      "The Last Guardian is an action-adventure game developed by genDESIGN and SIE Japan Studio...",
    downloadDescription:
      "The Last Guardian is a 2016 action-adventure game developed by Japan Studio, and GenDesign and published by Sony Interactive Entertainment for the PlayStation 4, Players control a boy who befriends a giant half-bird half-mammal creature, Trico. Team Ico began developing The Last Guardian in 2007, Embark on an emotional journey in The Last Guardian. Solve puzzles, navigate treacherous environments, and form a deep bond with Trico in this unforgettable adventure.",
    version: "This game is exclusively available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_14",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830283/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_30_ky6o2i.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830284/GAMERS%20RING/PS4%20GAMES/7156080_tyavc2.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830281/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_32_li7jzm.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830282/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_31_yfp0nz.jpg",
    title: "Shadow of the Colossus",
    description:
      "Shadow of the Colossus is an action-adventure game developed by Bluepoint Games...",
    downloadDescription:
      "Shadow of the Colossus is a 2005 action-adventure game developed by Japan Studio and Team Ico, and published by Sony Computer Entertainment for the PlayStation 2, Embark on a majestic quest in Shadow of the Colossus. Explore a vast and desolate landscape, engage in epic battles against towering foes, and uncover the secrets of a forgotten civilization.",
    version: "This game is exclusively available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_15",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830276/GAMERS%20RING/PS4%20GAMES/8406384_kj3lxs.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830272/GAMERS%20RING/PS4%20GAMES/8406437_z00jk8.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830273/GAMERS%20RING/PS4%20GAMES/8406386_iphwak.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830270/GAMERS%20RING/PS4%20GAMES/8406497_w4yigq.jpg",
    title: "FIFA 23",
    description:
      "FIFA 23 is a football simulation video game developed and published by EA Sports...",
    downloadDescription:
      "FIFA 23 is a football video game published by EA Sports. It is the 30th installment in the FIFA series, that is developed by EA Sports the final installment under the FIFA banner, and released worldwide Immerse yourself in the beautiful game with FIFA 23, Build your dream team compete in thrilling matches, and rise to the top of the football world in this definitive soccer experience.",
    version: "This game is available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_16",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830266/GAMERS%20RING/PS4%20GAMES/1146381_cp2dx3.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830281/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_35_wqbcmh.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830268/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_34_liulcc.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830294/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_33_jsnocw.jpg",
    title: "Sekiro: Shadows Die Twice",
    description:
      "Sekiro: Shadows Die Twice is an action-adventure game developed by FromSoftware. Set in a dark and twisted...",
    downloadDescription:
      "Hone your skills and embrace the way of the shinobi in Sekiro: Shadows Die Twice. Master swordplay, stealth, and supernatural abilities as you confront deadly enemies and uncover the truth of your past.",
    version: "This game is available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_17",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830269/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_36_sy8rbt.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830252/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_39_ncqqy5.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830274/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_38_fbumpb.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830234/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_37_ozarba.jpg",
    title: "Detroit: Become Human",
    description:
      "Detroit: Become Human is an interactive drama game developed by Quantic Dream. Set in a futuristic Detroit...",
    downloadDescription:
      "Detroit: Become Human is a 2018 adventure game developed by Quantic Dream. The game was released for the PlayStation 4 in May 2018, published by Sony Interactive Entertainment. A port for Windows was released in December 2019, published by Quantic Dream. Make choices that matter in Detroit: Become Human. Explore branching storylines, confront moral dilemmas and shape the fate of humanity in this gripping narrative-driven experience.",
    version: "This game is exclusively available for PlayStation 4.",
    button: "DOWNLOAD",
  },
  {
    id: "ps4_18",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830239/GAMERS%20RING/PS4%20GAMES/2335848_vcma90.png",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830241/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_40_ccga73.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830260/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_42_qlaiih.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713830247/GAMERS%20RING/PS4%20GAMES/wallpaperflare.com_wallpaper_41_z2gyis.jpg",
    title: "Nioh 2",
    description:
      "Nioh 2 is an action role-playing game developed by Team Ninja. Set in a fictionalized version of the Sengoku period...",
    downloadDescription:
      "Nioh 2 is an action role-playing video game developed by Team Ninja for the PlayStation 4., It was published by Koei Tecmo in Japan and Sony Interactive Entertainment worldwide on March 13, 2020. It is a prequel to Nioh Master the way of the samurai in Nioh 2, Customize your character wield powerful weapons and unleash devastating attacks against supernatural foes, in this challenging and rewarding action RPG.",
    version: "This game is exclusively available for PlayStation 4.",
    button: "DOWNLOAD",
  },
];

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
  const [searchedWord, setSearchedWord] = useState("");

  const filteredProducts = ps4GameData.filter((GameData) =>
    GameData.title.toLowerCase().includes(searchedWord.toLowerCase())
  );

  const productsToDisplay = searchedWord.trim()
    ? filteredProducts
    : ps4GameData;

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
                recentGamesData={ps4RecentRelease}
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
