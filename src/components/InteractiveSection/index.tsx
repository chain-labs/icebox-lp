import Image from "next/image";
import React from "react";
import Interaction1 from "./Interaction1";
import Interaction2 from "./Interaction2";
import Interaction3 from "./Interaction3";

type Props = {};

const InteractiveSection = (props: Props) => {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-[90%] md:w-[700px] flex flex-col md:flex-row gap-4">
        <Interaction1 />
        <div className="order-1 md:order-2 md:flex-1 flex flex-col gap-4">
          <Interaction2 />
          <Interaction3 />
        </div>
      </div>
    </div>
  );
};

export default InteractiveSection;
