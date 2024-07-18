import { Fragment, useState } from "react";

import ScrollToTop from "../../components/ScrollToTop";
import NavigationBar from "../../components/NavigationBar";
import NextPage from "../../components/NextPage";
import Information from "../../components/Information";
import Footer from "../Footer";

const ps5GameData = [
  {
    id: "ps5_1",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870424/GAMERS%20RING/PS5%20GAMES/4500579_sgqcih.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870422/GAMERS%20RING/PS5%20GAMES/4500556_jfu9gm.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870426/GAMERS%20RING/PS5%20GAMES/4500549_t1pdck.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870467/GAMERS%20RING/PS5%20GAMES/4500587_u7srog.jpg",
    title: "Demon's Souls",
    description:
      "Demon's Souls is an action role-playing game developed by Bluepoint Games and SIE Japan Studio...",
    downloadDescription:
      "Demon's Souls is a 2009 action role-playing game developed by FromSoftware for the PlayStation 5, under the supervision of Japan Studio. It was published in Japan by Sony Computer Entertainment, in February in North America by Atlus USA in October and in PAL territories, by Namco Bandai Partners in June 2010 Challenge the darkness in Demon's Souls. Navigate treacherous dungeons, face off against terrifying bosses and discover the true nature of your character, in this stunning remake of a PlayStation classic.",
    version: "This game is exclusively available for PlayStation 5.",
    button: "DOWNLOAD",
  },
  {
    id: "ps5_2",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870386/GAMERS%20RING/PS5%20GAMES/5871398_ftqfav.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870357/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_1_n8loic.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870385/GAMERS%20RING/PS5%20GAMES/5871400_belaxc.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870356/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_b8ikqo.jpg",
    title: "Ghostwire: Tokyo",
    description:
      "Ghostwire: Tokyo is an action-adventure game developed by Tango Gameworks. Players investigate the disappearance...",
    downloadDescription:
      "Ghostwire: Tokyo is a 2022 action-adventure game developed by Tango Gameworks, and published by Bethesda Softworks. The game is directed by Kenji Kimura, who also co-wrote the narrative with Syoji Ishimine and Seiji Ebihara, Unravel the mysteries of Tokyo in Ghostwire: Tokyo. Use supernatural powers, solve paranormal puzzles and fend off otherworldly entities in this atmospheric, and immersive adventure.",
    version: "This game is exclusively available for PlayStation 5.",
    button: "DOWNLOAD",
  },
  {
    id: "ps5_3",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870353/GAMERS%20RING/PS5%20GAMES/10921943_ainu9r.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870329/GAMERS%20RING/PS5%20GAMES/10765008_vpaimk.png",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870327/GAMERS%20RING/PS5%20GAMES/10482391_p2pc5y.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870322/GAMERS%20RING/PS5%20GAMES/10921966_bndlri.jpg",
    title: "FC 24",
    description:
      "FC 24 is a football simulation video game developed and published by EA Sports. Experience the excitement...",
    downloadDescription:
      "Moves looks and plays like football. EA SPORTS FC™ 24 brings you closer to football than ever before, powered by a trinity of technologies driving gameplay realism in every match, Immerse yourself in the beautiful game with FC 24. Build your dream team, compete in thrilling matches, and rise to the top of the football world in this definitive soccer experience.",
    version: "This game is exclusively available for PlayStation 5.",
    button: "DOWNLOAD",
  },
  {
    id: "ps5_4",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870201/GAMERS%20RING/PS5%20GAMES/1146381_q8ardx.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870405/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_35_nnnnjs.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870428/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_33_zbop64.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870419/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_34_xgueo8.jpg",
    title: "Sekiro: Shadows Die Twice",
    description:
      "Sekiro: Shadows Die Twice is an action-adventure game developed by FromSoftware...",
    downloadDescription:
      "Sekiro: Shadows Die Twice is a 2019 action-adventure game developed by FromSoftware, It was released in Japan by FromSoftware and internationally by Activision for the PlayStation 5, Windows and Xbox One in March 2019 and for Stadia in October 2020, Hone your skills and embrace the way of the shinobi in Sekiro: Shadows Die Twice. Master swordplay, stealth and supernatural abilities as you confront deadly enemies, and uncover the truth of your past.",
    version: "This game is available for PlayStation 5.",
    button: "DOWNLOAD",
  },
  {
    id: "ps5_5",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870198/GAMERS%20RING/PS5%20GAMES/7787663_enpgyv.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870204/GAMERS%20RING/PS5%20GAMES/7950359_ye3orb.png",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870204/GAMERS%20RING/PS5%20GAMES/7950358_tetia7.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870187/GAMERS%20RING/PS5%20GAMES/7950367_pmydns.jpg",
    title: "Gran Turismo 7",
    description:
      "Gran Turismo 7 is a racing game developed by Polyphony Digital. Players compete in various racing events...",
    downloadDescription:
      "Gran Turismo 7 is a 2022 racing simulation video game developed by Polyphony Digital, and published by Sony Interactive Entertainment. The game is the eighth main installment, and the thirteenth overall in the Gran Turismo series It was released for the PlayStation 4 and PlayStation 5, Experience the thrill of high-speed racing in Gran Turismo 7. Choose from a wide selection of cars, master challenging tracks and compete against friends and rivals in this, iconic racing franchise.",
    version: "This game is exclusively available for PlayStation 5.",
    button: "DOWNLOAD",
  },
  {
    id: "ps5_6",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870187/GAMERS%20RING/PS5%20GAMES/4063084_b0qgb8.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870185/GAMERS%20RING/PS5%20GAMES/4063095_zfexnr.png",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870187/GAMERS%20RING/PS5%20GAMES/4063090_w1rat2.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870185/GAMERS%20RING/PS5%20GAMES/4063094_pbzl6y.jpg",
    title: "Horizon Forbidden West",
    description:
      "Horizon Forbidden West is an action role-playing game developed by Guerrilla Games. Players embark on a journey...",
    downloadDescription:
      "Horizon Forbidden West is a 2022 action role-playing game developed by Guerrilla Games, and published by Sony Interactive Entertainment Explore a vibrant and dangerous world, in Horizon Forbidden West. Encounter majestic wildlife, battle mechanical foes and discover the secrets, of a lost civilization in this epic open-world adventure.",
    version: "This game is exclusively available for PlayStation 5.",
    button: "DOWNLOAD",
  },
  {
    id: "ps5_7",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870201/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_2_zdv8cj.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870147/GAMERS%20RING/PS5%20GAMES/3420069_d0qgko.png",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870161/GAMERS%20RING/PS5%20GAMES/3420013_dsuimo.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870161/GAMERS%20RING/PS5%20GAMES/3419940_djyhse.jpg",
    title: "Godfall",
    description:
      "Godfall is a looter-slasher action role-playing game developed by Counterplay Games. Players engage in melee combat...",
    downloadDescription:
      "Godfall is an action role-playing game developed by Counterplay Games, and published by Gearbox Publishing. The game was released for PlayStation 5 and Windows on November 12, 2020. It was also released for the PlayStation 4 on August 10 2021, Become a godlike warrior in Godfall. Master powerful combat techniques, customize your character with divine gear, and challenge formidable foes in this high-octane fantasy adventure.",
    version: "This game is exclusively available for PlayStation 5.",
    button: "DOWNLOAD",
  },
  {
    id: "ps5_8",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870143/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_3_ujmnmz.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870077/GAMERS%20RING/PS5%20GAMES/3711894_mf7fjm.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870144/GAMERS%20RING/PS5%20GAMES/3712308_y8xu7w.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713871537/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_11_dacqs4.jpg",
    title: "Sackboy: A Big Adventure",
    description:
      "Sackboy: A Big Adventure is a platformer developed by Sumo Digital. Players control Sackboy...",
    downloadDescription:
      "Sackboy: A Big Adventure is a 2020 platform game developed by Sumo Digital, and published by Sony Interactive Entertainment. A spin-off of the LittleBigPlanet series, it follows Sackboy and features 3D platforming as opposed to 2.5D, in previous entries Join Sackboy on a whimsical journey in Sackboy, A Big Adventure Traverse colorful worlds solve imaginative puzzles and team, up with friends in this delightful and charming platforming escapade.",
    version: "This game is exclusively available for PlayStation 5.",
    button: "DOWNLOAD",
  },
  {
    id: "ps5_9",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870074/GAMERS%20RING/PS5%20GAMES/5871383_c68ead.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870030/GAMERS%20RING/PS5%20GAMES/5871333_wqh5r6.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870032/GAMERS%20RING/PS5%20GAMES/5871358_w8ki1e.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870034/GAMERS%20RING/PS5%20GAMES/5871360_iv2j9n.jpg",
    title: "Returnal",
    description:
      "Returnal is a roguelike third-person shooter developed by Housemarque. Players control Selene...",
    downloadDescription:
      "Returnal is a 2021 roguelike third-person shooter video game developed by Housemarque, and published by Sony Interactive Entertainment. The game was released for the PlayStation 5, on 30 April 2021 and for Windows on 15 February 2023 Survive the cycle in Returnal, Explore a shifting landscape battle nightmarish creatures and uncover the truth behind, Selene's never-ending struggle in this atmospheric and challenging adventure.",
    version: "This game is exclusively available for PlayStation 5.",
    button: "DOWNLOAD",
  },
  {
    id: "ps5_10",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713872139/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_12_ubzzyk.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713872143/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_13_sn1hrg.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870028/GAMERS%20RING/PS5%20GAMES/5981794_ochnd8.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870038/GAMERS%20RING/PS5%20GAMES/5981808_rwzqyl.png",
    title: "Deathloop",
    description:
      "Deathloop is an action-adventure game developed by Arkane Studios. Players control Colt...",
    downloadDescription:
      "Deathloop is a first-person shooter immersive sim video game developed by Arkane, Lyon and published by Bethesda Softworks Break the loop and change your fate in Deathloop., Explore a stylish and immersive world experiment with supernatural abilities and outmaneuver deadly, adversaries in this mind-bending thriller.",
    version: "This game is exclusively available for PlayStation 5.",
    button: "DOWNLOAD",
  },
  {
    id: "ps5_11",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870000/GAMERS%20RING/PS5%20GAMES/4112670_b0wrgh.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713869998/GAMERS%20RING/PS5%20GAMES/4112735_hiy6yx.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713869997/GAMERS%20RING/PS5%20GAMES/4112739_rabffu.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870039/GAMERS%20RING/PS5%20GAMES/4112639_hmr0pg.png",
    title: "Resident Evil Village",
    description:
      "Resident Evil Village is a survival horror game developed and published by Capcom...",
    downloadDescription:
      "Resident Evil Village is a 2021 survival horror game developed and published by Capcom., It is the sequel to Resident Evil 7: Biohazard and the tenth main game of the Resident Evil series., Players control Ethan Winters who searches for his kidnapped daughter in a village filled with mutant creatures, Experience fear in its purest form in Resident Evil Village. Explore a haunting village, solve puzzles and fight for survival against unimaginable horrors, in this chilling entry in the iconic franchise.",
    version: "This game is exclusively available for PlayStation 5.",
    button: "DOWNLOAD",
  },
  {
    id: "ps5_12",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870401/GAMERS%20RING/PS5%20GAMES/spider_man_ghlcq4.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870421/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_6_nw3grq.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870426/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_4_uy7cpk.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870428/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_5_lgva08.jpg",
    title: "Marvel's Spider-Man",
    description:
      "Marvel's Spider-Man: Remastered is an action-adventure game developed by Insomniac Games...",
    downloadDescription:
      "Marvel's Spider-Man is a 2018 action-adventure game developed by Insomniac Games, and published by Sony Interactive Entertainment Swing into action in Marvel's Spider-Man, Remastered. Experience the beloved superhero adventure with stunning visuals improved performance, and all-new content in this enhanced version of the classic game.",
    version: "This game is exclusively available for PlayStation 5.",
    button: "DOWNLOAD",
  },
  {
    id: "ps5_13",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713869994/GAMERS%20RING/PS5%20GAMES/8406384_dxo4bz.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713869993/GAMERS%20RING/PS5%20GAMES/8406437_xyyevx.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713869989/GAMERS%20RING/PS5%20GAMES/8406497_cgpn3c.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713869991/GAMERS%20RING/PS5%20GAMES/8406483_w8qnrc.jpg",
    title: "FIFA 23",
    description:
      "FIFA 23 is a football simulation video game developed and published by EA Sports...",
    downloadDescription:
      "FIFA 23 is a football video game published by EA Sports. It is the 30th installment in the FIFA series, that is developed by EA Sports the final installment under the FIFA banner, and released worldwide. Immerse yourself in the beautiful game with FIFA 23., Build your dream team compete in thrilling matches and rise to the top of the football world, in this definitive soccer experience.",
    version: "This game is exclusively available for PlayStation 5.",
    button: "DOWNLOAD",
  },
  {
    id: "ps5_14",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713869988/GAMERS%20RING/PS5%20GAMES/3618387_qgxhel.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713869986/GAMERS%20RING/PS5%20GAMES/3618438_l2tyno.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870002/GAMERS%20RING/PS5%20GAMES/3618447_lux3rd.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870003/GAMERS%20RING/PS5%20GAMES/3618459_wxbjnt.jpg",
    title: "Far Cry 6",
    description:
      "Far Cry 6 is an open-world first-person shooter developed and published by Ubisoft...",
    downloadDescription:
      "Far Cry 6 is a 2021 first-person shooter game developed by Ubisoft Toronto, and published by Ubisoft. It is the sixth main installment in the Far Cry series, and the successor to 2018's Far Cry 5 Join the fight for freedom in Far Cry 6., Explore a vast tropical paradise forge alliances and liberate the island from tyranny, in this thrilling and action-packed adventure.",
    version: "This game is available for PlayStation 5.",
    button: "DOWNLOAD",
  },
  {
    id: "ps5_15",
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713869984/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_7_smugbj.jpg",
    image1:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713869979/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_9_cnrbn9.jpg",
    image2:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713869984/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_8_mytzrn.jpg",
    image3:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870000/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_10_xnf3te.jpg",
    title: "God of War Ragnarok",
    description:
      "God of War Ragnarok is an action-adventure game developed by Santa Monica Studio...",
    downloadDescription:
      "God of War Ragnarök is an action-adventure game developed by Santa Monica Studio, and published by Sony Interactive Entertainment. It was released worldwide on November 9 2022, for both the PlayStation 4 and PlayStation 5, marking the first cross-gen release, in the God of War series Prepare for the epic conclusion in God of War Ragnarok., Embark on a journey across the Nine Realms uncover ancient prophecies, and confront powerful adversaries in this breathtaking sequel to the acclaimed God of War.",
    version: "This game is exclusively available for PlayStation 5.",
    button: "DOWNLOAD",
  },
];

const ps5RecentRelease = [
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713869984/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_7_smugbj.jpg",
    title: "GOD OF WAR RAGNAROCK",
    date: "March 5, 2022",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713869988/GAMERS%20RING/PS5%20GAMES/3618387_qgxhel.jpg",
    title: "FAR CRY 6",
    date: "January 25, 2021",
  },
  {
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713872139/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_12_ubzzyk.jpg",
    title: "DEATHLOOP",
    date: "December 30, 2023",
  },
];

const backgroundImages = [
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713713873/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_od6ovp.jpg",
    alt: "Image1",
  },
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870386/GAMERS%20RING/PS5%20GAMES/5871398_ftqfav.jpg",
    alt: "Image 2",
  },
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870356/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_b8ikqo.jpg",
    alt: "Image 3",
  },
];

const Ps5Games = () => {
  const [searchedWord, setSearchedWord] = useState("");

  const filteredProducts = ps5GameData.filter((GameData) =>
    GameData.title.toLowerCase().includes(searchedWord.toLowerCase())
  );

  const productsToDisplay = searchedWord.trim()
    ? filteredProducts
    : ps5GameData;

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
                recentGamesData={ps5RecentRelease}
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
              recentGamesData={ps5RecentRelease}
              platform="THIS PAGE CONTAINS ONLY PS5 GAMES"
            />
          </section>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Ps5Games;
