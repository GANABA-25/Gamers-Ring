import { Fragment, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { FaBars } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";

import "../pages/components/Offcanvas.css";
import SearchInput from "./SearchInput";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NavigationBar = ({ onHandleInputInNav, background, images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);
  let sliderRef = useRef(null);

  const location = useLocation();
  const [pcPage, setPcPage] = useState("text-white");
  const [ps3Page, setPs3Page] = useState("text-white");
  const [ps4Page, setPs4Page] = useState("text-white");
  const [ps5Page, setPs5Page] = useState("text-white");
  // const [contactPage, setContactPageColor] = useState("text-white");

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearchBar = () => {
    setIsShown(!isShown);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: "",
    nextArrow: "",
  };
  const NextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const PrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  useEffect(() => {
    location.pathname === "/"
      ? setPcPage("underline underline-offset-4 decoration-blue-600")
      : setPcPage("");

    location.pathname === "/Ps3Games"
      ? setPs3Page("underline underline-offset-4 decoration-blue-600")
      : setPs3Page("");

    location.pathname === "/Ps4Games"
      ? setPs4Page("underline underline-offset-4 decoration-blue-600")
      : setPs4Page("");

    location.pathname === "/Ps5Games"
      ? setPs5Page("underline underline-offset-4 decoration-blue-600")
      : setPs5Page("");
  }, [location.pathname]);

  return (
    <Fragment>
      <nav>
        <div
          className={`offcanvas  max-[767px]:px-4 md:px-6 ${
            isOpen ? "open" : ""
          }`}
        >
          <div className="text-black text-md flex justify-between py-2 cursor-pointer md:text-xl border-b-4 ">
            <div>
              <h1 className="font-payback max-[767px]:text-2xl md:text-4xl">
                Gamers Ring
              </h1>
            </div>

            <button onClick={toggleOffcanvas}>
              <FaTimes className="hover:text-red-600 text-3xl active:text-white" />
            </button>
          </div>
          <div className="offcanvas-content font-serif max-[767px]:my-8 md:my-10">
            <ul className="text-black grid text-2xl max-[767px]:gap-10 md:gap-14 md:text-4xl ">
              <li
                className={`hover:decoration-red-600 max-[767px]:hover:text-red-600 max-[767px]:active:text-blue-600 cursor-pointer flex items-center gap-2 ${pcPage}`}
              >
                <AiOutlineHome />
                <Link to="/">Pc Games</Link>
              </li>
              <li
                className={`hover:decoration-red-600 max-[767px]:hover:text-red-600 max-[767px]:active:text-blue-600 cursor-pointer flex items-center gap-2 ${ps3Page}`}
              >
                <IoGameControllerOutline />
                <Link to="/Ps3Games">Ps3 Games</Link>
              </li>
              <li
                className={`hover:decoration-red-600 max-[767px]:hover:text-red-600 max-[767px]:active:text-blue-600 cursor-pointer flex items-center gap-2 ${ps4Page}`}
              >
                <IoGameControllerOutline />
                <Link to="/Ps4Games">Ps4 Games</Link>
              </li>
              <li
                className={`hover:decoration-red-600 max-[767px]:hover:text-red-600 max-[767px]:active:text-blue-600 cursor-pointer flex items-center gap-2 ${ps5Page}`}
              >
                <IoGameControllerOutline />
                <Link to="/Ps5Games">Ps5 Games</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          onClick={toggleOffcanvas}
          className={`overlay ${isOpen ? "open" : ""}`}
        />
      </nav>

      {location.pathname === "/Downloads" ? (
        <section className="bg-blue-700 max-[767px]:p-2 fixed top-0 left-0 w-full md:p-4 lg:p-4 z-50">
          <div className="text-white inset-0">
            <div className="max-[767px]:mt-3 flex justify-between lg:hidden ">
              <span className="flex justify-end gap-1 text-xl md:text-3xl md:gap-3">
                <h1 className="font-payback tracking-wider hidden md:block">
                  Gamers Ring
                </h1>
                <PiInstagramLogoFill className="border-2 rounded-sm p-[1px]" />
                <BsTwitterX className="border-2 rounded-sm p-[1px]" />
                <FaYoutube className="border-2 rounded-sm p-[1px]" />
                <FaLinkedin className="border-2 rounded-sm p-[1px]" />
              </span>

              <span className="flex md:gap-2">
                <div
                  onClick={toggleSearchBar}
                  className="font-bold bg-white text-blue-600 max-[767px]:px-2 flex justify-center items-center max-[767px]:mx-2 md:px- md:mx-2 md:text-4xl"
                >
                  <IoMdSearch className="hover:text-red-600" />
                </div>
                <FaBars
                  onClick={toggleOffcanvas}
                  className="max-[767px]:text-2xl cursor-pointer md:text-4xl"
                />
              </span>
            </div>

            <div className="hidden lg:flex md:justify-between">
              <div className="lg:flex justify-center items-center lg:gap-8">
                <span className="md:flex md:items-center md:gap-2 md:text-xl">
                  <h1 className="font-nostrum tracking-wider">Gamers Ring</h1>
                  <PiInstagramLogoFill className="border-2 rounded-sm p-[1px]" />
                  <BsTwitterX className="border-2 rounded-sm p-[1px]" />
                  <FaYoutube className="border-2 rounded-sm p-[1px]" />
                  <FaLinkedin className="border-2 rounded-sm p-[1px]" />
                </span>
                <SearchInput />
              </div>

              <ul className="md:flex md:gap-4 font-serif md:justify-end md:text-md">
                <li
                  className={`transition-all duration-300 hover:underline hover:underline-offset-4 ${pcPage}`}
                >
                  <Link to="/">Pc Games</Link>
                </li>
                <li
                  className={`transition-all duration-300 hover:underline hover:underline-offset-4 ${ps3Page}`}
                >
                  <Link to="/Ps3Games">Ps3 Games</Link>
                </li>
                <li
                  className={`transition-all duration-300 hover:underline hover:underline-offset-4 ${ps4Page}`}
                >
                  <Link to="/Ps4Games">Ps4 Games</Link>
                </li>
                <li
                  className={`transition-all duration-300 hover:underline hover:underline-offset-4 ${ps5Page}`}
                >
                  <Link to="/Ps5Games">Ps5 Games</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-[767px]:my-2 md:mt-4 lg:hidden">
            <SearchInput
              onHandleInput={(searchWord) => onHandleInputInNav(searchWord)}
            />
          </div>
        </section>
      ) : (
        <section className="mb-2 relative flex justify-center items-center overflow-hidden text-white my-0.5">
          <div className="grid grid-cols-2">
            <div className="relative">
              <img
                src={background}
                alt="ghost recon"
                className="max-[767px]:h-[15rem] w-full md:h-[30rem]"
              />

              <div className="max-[767px]:h-[15rem] max-[767px]:w-full md:h-[30rem] absolute inset-0 bg-whiteGray backdrop-blur-[10px]" />
              <div className="mx-3 absolute top-0 bottom-0 flex justify-center items-center max-[767px]:text-xs">
                <span>
                  <h1 className="font-nostrum max-[767px]:text-[3.3rem] tracking-wide md:text-8xl lg:text-[9rem]">
                    Gamers
                  </h1>
                  <p className="hidden md:block md:text-xl lg:text-sm">
                    Welcome to Gamers Ring - where gaming dreams come alive!
                    Download your favorite titles for
                    <span className="hidden lg:block md:hidden">
                      PS4, and PS5. Join our vibrant community for discussions,
                      tips, and the latest updates.
                    </span>
                  </p>
                </span>
              </div>
            </div>

            <div>
              <div className="slider-container">
                <Slider {...settings} ref={sliderRef}>
                  {images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image.url}
                        alt={image.alt || `Slide ${index + 1}`}
                        className="max-[767px]:h-[15rem] w-full md:h-[30rem]"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="mx-3 absolute top-0 bottom-0 flex justify-center items-center">
                <div className="">
                  <h1 className="font-nostrum max-[767px]:text-[3.3rem] tracking-wide md:text-8xl lg:text-[9rem]">
                    Ring
                  </h1>
                  <p className="hidden md:block md:text-xl lg:text-sm">
                    <span className="lg:hidden">
                      PS4, and PS5. Join our vibrant community for discussions,
                      tips, and the latest updates.
                    </span>
                    <span className="hidden lg:block">
                      Explore our vast library of games covering various genres
                      such as action, adventure, RPG, and more.
                      <br className="hidden md:block" /> Whether you're a casual
                      gamer or a hardcore enthusiast, Gamers Ring has something
                      for everyone!
                    </span>
                  </p>
                </div>
              </div>
              <div className="mx-3 absolute z-10 max-[767px]:top-48 max-[767px]:text-2xl flex gap-2 right-2 md:text-4xl md:top-[25rem]">
                <BsArrowLeft
                  onClick={PrevSlide}
                  className="border border-blue-600 hover:text-blue-600 active:text-red-300"
                />
                <BsArrowRight
                  onClick={NextSlide}
                  className="bg-blue-600 hover:bg-white hover:text-blue-600 active:text-red-300"
                />
              </div>
            </div>
          </div>
          <div className="mx-3 absolute text-white inset-0 my-2">
            <div className="flex justify-between lg:hidden ">
              <span className="flex justify-end gap-3 md:gap-3">
                <h1 className="font-payback tracking-wider hidden md:block md:text-3xl">
                  Gamers Ring
                </h1>
                <PiInstagramLogoFill className="text-2xl md:text-3xl border-2 rounded-sm" />
                <BsTwitterX className="text-2xl md:text-3xl border-2 rounded-sm" />
                <FaYoutube className="text-2xl md:text-3xl border-2 rounded-sm" />
                <FaLinkedin className="text-2xl md:text-3xl border-2 rounded-sm" />
              </span>

              <span className="flex gap-3">
                <div
                  onClick={toggleSearchBar}
                  className="flex items-center font-bold text-blue-600 md:text-4xl"
                >
                  <IoMdSearch className="hover:text-red-600 max-[767px]:text-2xl bg-white" />
                </div>
                <div>
                  <FaBars
                    onClick={toggleOffcanvas}
                    className="max-[767px]:text-3xl cursor-pointer md:text-4xl"
                  />
                </div>
              </span>
            </div>

            <div className="hidden lg:flex md:justify-between lg:my-2">
              <div className="lg:flex lg:gap-8">
                <span className="md:flex md:items-center md:gap-2 md:text-xl">
                  <h1 className="font-nostrum">Gamers Ring</h1>
                  <PiInstagramLogoFill className="border-2 rounded-sm p-[1px]" />
                  <BsTwitterX className="border-2 rounded-sm p-[1px]" />
                  <FaYoutube className="border-2 rounded-sm p-[1px]" />
                  <FaLinkedin className="border-2 rounded-sm p-[1px]" />
                </span>
                <SearchInput
                  onHandleInput={(searchWord) => onHandleInputInNav(searchWord)}
                />
              </div>

              <ul className="md:flex md:items-center md:gap-4 font-serif md:justify-end md:text-md">
                <li
                  className={`transition-all duration-300 hover:underline hover:underline-offset-4 ${pcPage}`}
                >
                  <Link to="/">Pc Games</Link>
                </li>
                <li
                  className={`transition-all duration-300 hover:underline hover:underline-offset-4 ${ps3Page}`}
                >
                  <Link to="/Ps3Games">Ps3 Games</Link>
                </li>
                <li
                  className={`transition-all duration-300 hover:underline hover:underline-offset-4 ${ps4Page}`}
                >
                  <Link to="/Ps4Games">Ps4 Games</Link>
                </li>
                <li
                  className={`transition-all duration-300 hover:underline hover:underline-offset-4 ${ps5Page}`}
                >
                  <Link to="/Ps5Games">Ps5 Games</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}
      {isShown && (
        <div className="lg:hidden bg-blue-600 max-[767px]:py-1 my-1 max-[767px]:px-2 max-[767px]:mb-1 md:mb-2 md:p-2">
          <SearchInput
            onHandleInput={(searchWord) => onHandleInputInNav(searchWord)}
          />
        </div>
      )}
    </Fragment>
  );
};

export default NavigationBar;
