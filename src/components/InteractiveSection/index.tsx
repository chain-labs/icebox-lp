import Image from "next/image";
import React from "react";
import Interaction1 from "./Interaction1";

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

const Interaction2 = () => {
  return (
    <div className="md:h-[192px] border border-neutral-800 rounded-[10px] flex justify-center items-center ">
      Interaction 2
    </div>
  );
};
const Interaction3 = () => {
  return (
    <div className="md:h-[192px] border border-neutral-800 rounded-[10px] flex justify-center items-center ">
      Interaction 3
    </div>
  );
};
