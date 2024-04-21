import React, { Fragment } from "react";
import NavigationBar from "../../components/NavigationBar";

const Ps3Games = () => {
  return (
    <Fragment>
      <NavigationBar />
      <div className="max-[767px]:w-[95%] md:w-[90%] m-auto">
        <h1>Ps3Games</h1>
      </div>
    </Fragment>
  );
};

export default Ps3Games;
