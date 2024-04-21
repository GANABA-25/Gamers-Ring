import { Fragment } from "react";
import { useLocation } from "react-router-dom";

import NavigationBar from "../../components/NavigationBar";
import ScrollToTop from "../../components/ScrollToTop";
import Footer from "../Footer";

import { LuDownload } from "react-icons/lu";

// import image from "../../images/pcImages/BATTLEFIED V (5).jpg";
// import image2 from "../../images/pcImages/MORTAL KOMBAT 1 (3).jpg";
// import image3 from "../../images/pcImages/farcry.jpg";
// import image4 from "../../images/pcImages/little big.jpg";

function StringSplitter({ text, delimiter }) {
  // Split the text using the specified delimiter
  const parts = text.split(delimiter);

  return (
    <div>
      {parts.map((part, index) => (
        <div key={index}>{part}</div>
      ))}
    </div>
  );
}

const Downloads = () => {
  const { state } = useLocation();
  const payload = state && state.payload;

  const myString = payload.minimumSystemRequirement;
  const myString2 = payload.recommendedSystemRequirement;
  const myString4 = payload.downloadDescription;
  const delimiter = ",";

  console.log(payload);
  return (
    <Fragment>
      <ScrollToTop />

      <div className="max-[767px]:w-[95%] md:w-[95%] m-auto mt-0.5">
        <div className="my-2">
          <NavigationBar />
        </div>

        <img
          className="lg:w-screen lg:h-[25rem]"
          src={payload.image}
          alt="downloadPage"
        />
        <div className="max-[767px]:my-2 grid grid-cols-3 gap-2 md:my-2 lg:my-2">
          <img src={payload.image1} alt="downloadPage" />
          <img src={payload.image2} alt="downloadPage" />
          <img src={payload.image3} alt="downloadPage" />
        </div>

        <section>
          <div className="max-[767px]:mb-4 md:mb-6">
            <h1 className="max-[767px]:text-3xl max-[767px]:my-2 font-bold font-payback tracking-wider md:text-5xl md:my-4 lg:text-3xl">
              {payload.title}
            </h1>
            <p className="font-serif md:text-xl tracking-wider lg:text-sm">
              <StringSplitter text={myString4} delimiter={delimiter} />
            </p>
          </div>

          <div>
            <h1 className="max-[767px]:text-3xl underline underline-offset-4 font-payback tracking-wider md:text-5xl lg:text-3xl">
              SYSTEM REQUIREMENTS
            </h1>

            <span className="font-serif">
              <h1 className="max-[767px]:my-2 font-bold tracking-wider md:text-xl md:my-3">
                MINIMUM REQUIREMENTS
              </h1>
              <span className="md:text-xl tracking-wider lg:text-sm">
                <StringSplitter text={myString} delimiter={delimiter} />
              </span>

              <h1 className="max-[767px]:my-2 font-bold tracking-wider md:text-xl md:my-3">
                RECOMMENDED REQUIREMENTS
              </h1>
              <span className="md:text-xl tracking-wider lg:text-sm">
                <StringSplitter text={myString2} delimiter={delimiter} />
              </span>
            </span>
          </div>
        </section>

        <section className="max-[767px]:my-4">
          <h1 className="max-[767px]:text-3xl max-[767px]:my-2 font-payback underline underline-offset-4 md:text-5xl md:my-4 lg:text-3xl">
            NOTE
          </h1>
          <p className="md:text-xl tracking-wider lg:text-sm">
            {payload.version}
          </p>

          <button className="max-[767px]:my-4 max-[767px]:p-3 font-payback flex justify-center items-center gap-5 text-white bg-blue-600 hover:bg-blue-700 group hover:text-red-600 relative transition-all duration-300 md:p-4 md:my-4 lg:p-2">
            <span className="text-white md:text-2xl lg:text-xl">
              {payload.button}
            </span>
            <span className="group-hover:text-red-600">
              <LuDownload className="max-[767px]:text-2xl md:text-3xl lg:text-2xl" />
            </span>
          </button>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Downloads;
