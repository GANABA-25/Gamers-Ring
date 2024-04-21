import React, { Fragment } from "react";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { GiLoveHowl } from "react-icons/gi";

const Footer = () => {
  return (
    <Fragment>
      <div className="text-center font-serif bg-gray-300 grid gap-4">
        {/* <div>
          <h1 className="max-[767px]:text-2xl font-bold md:text-3xl md:my-4">
            CONTACT US
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
            repellendus! Eum natus qui molestiae ratione molestias culpa
            inventore sint itaque necessitatibus delectus debitis, sapiente
            fugiat dolores ut sed quis quasi iste labore animi repudiandae
            laboriosam quisquam ad. Omnis quod possimus esse dicta architecto
            vel vero earum cum, quasi, ipsum eum?
          </p>
        </div> */}

        {/* <div>
          <h1 className="max-[767px]:text-2xl font-bold max-[767px]:my-4 md:my-5 md:text-2xl">
            KEEP CONNECTED
          </h1>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8">
            <span className="flex justify-center items-center max-[767px]:gap-4">
              <FaSquareFacebook className="max-[767px]:text-3xl text-blue-600 md:text-4xl" />
              <h1 className="text-xl">FaceBook : Gamers_Ring</h1>
            </span>
            <span className="flex justify-center items-center max-[767px]:gap-4">
              <FaSquareTwitter className="max-[767px]:text-3xl text-blue-600 md:text-4xl" />
              <h1 className="text-xl">Twitter : Gamers_Ring</h1>
            </span>
            <span className="flex justify-center items-center max-[767px]:gap-4">
              <FaInstagramSquare className="max-[767px]:text-3xl text-blue-600 md:text-4xl" />
              <h1 className="text-xl">Instagram : Gamers_Ring</h1>
            </span>
            <span className="flex justify-center items-center max-[767px]:gap-4">
              <BsTelegram className="max-[767px]:text-3xl text-blue-600 md:text-4xl" />
              <h1 className="text-xl">Telegram : Gamers_Ring</h1>
            </span>
          </div>
        </div> */}

        <h1 className="max-[767px]:text-xs md:text-2xl md:my-2">
          Gamers ring copyright © 2023 / Made with Nathaniel Owusu
        </h1>
      </div>
    </Fragment>
  );
};

export default Footer;
