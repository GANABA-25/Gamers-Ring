import React, { Fragment } from "react";
import NavigationBar from "../../components/NavigationBar";

const Ps4Games = () => {
  return (
    <Fragment>
      <NavigationBar />
      <div className="max-[767px]:w-[95%] md:w-[90%] m-auto">
        <h1>Ps4Games</h1>
      </div>
    </Fragment>
  );
};

export default Ps4Games;
