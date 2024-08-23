import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import { useUserContext } from "../../store/Auth-Context";
import NavigationBar from "../../components/NavigationBar";
import ScrollToTop from "../../components/ScrollToTop";
import Comments from "../comments/Comments";
import Footer from "../Footer";

import { LuDownload } from "react-icons/lu";

function StringSplitter({ text, delimiter }) {
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
  const [searchedWord, setSearchedWord] = useState("");
  const { state } = useLocation();
  const payload = state?.payload || {};
  const { userData } = useUserContext();

  const id = payload.id;

  const myString = payload.minimumSystemRequirement;
  const myString2 = payload.recommendedSystemRequirement;
  const myString4 = payload.downloadDescription;
  const delimiter = ",";

  return (
    <Fragment>
      <ScrollToTop />
      <div className="max-[767px]:mb-[6.7rem] md:mb-[8.7rem] lg:my-[4.3rem]">
        <NavigationBar
          onHandleInputInNav={(searchWord) => {
            setSearchedWord(searchWord);
          }}
        />
      </div>

      <div className="max-[767px]:w-[95%] md:w-[95%] m-auto mt-0.5">
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

          {payload.minimumSystemRequirement &&
            payload.recommendedSystemRequirement && (
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
            )}
        </section>

        <section className="max-[767px]:my-4">
          <h1 className="max-[767px]:text-3xl max-[767px]:my-2 font-payback underline underline-offset-4 md:text-5xl md:my-4 lg:text-3xl">
            NOTE
          </h1>
          <p className="md:text-xl tracking-wider lg:text-sm">
            {payload.version}
          </p>

          <button className="max-[767px]:my-4 max-[767px]:p-3 font-payback flex justify-center items-center gap-5 text-white bg-blue-600 hover:bg-blue-700 group hover:text-red-600 transition-all duration-300 md:p-4 md:my-4 lg:p-2">
            <span className="text-white md:text-2xl lg:text-xl">Download</span>
            <span className="group-hover:text-red-600">
              <LuDownload className="max-[767px]:text-2xl md:text-3xl lg:text-2xl" />
            </span>
          </button>
        </section>

        <section>
          <section className="max-[767px]:my-8 md:my-10">
            {userData[id] && userData[id].length > 0 && (
              <div className="my-4">
                <div className="my-4">
                  <div className="flex ">
                    <p className="max-[767px]:text-xl text-white bg-blue-600 p-3 font-serif md:text-2xl lg:text-xl">
                      {userData[id].length}
                    </p>
                    <h1 className="font-payback tracking-widest bg-black text-white flex items-center gap-2 max-[767px]:w-[9rem] max-[767px]:p-1 md:w-[14rem] md:p-4 md:text-2xl lg:text-xl lg:w-[12rem] lg:p-3">
                      COMMENTS
                    </h1>
                  </div>

                  <hr className="bg-black h-0.5" />
                </div>
                {userData[id].map((comment, index) => (
                  <div
                    key={index}
                    className="mb-4 max-[767px]:text-[1rem] md:text-2xl lg:text-xl"
                  >
                    <div className="flex items-center max-[767px]:gap-2 md:gap-3 lg:gap-4">
                      <h1 className="font-serif font-bold">
                        {comment.UserName}
                      </h1>
                      <p className="opacity-80 max-[767px]:text-[0.9rem]">
                        {comment.date.toLocaleString()}
                      </p>
                    </div>
                    <p className="">{comment.UserComment}</p>
                    <p className="my-2 opacity-80 lg:text-sm">Reply</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </section>

        <section>
          <Comments id={id} />
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Downloads;
