import React from "react";
import Card from "./Card";
import LeftHeading from "./LeftHeading";

const LeftSection = (props) => {
  return (
    <div className="h-screen w-[60%] bg-black text-white p-4 ">
      <div
        className="h-full w-full
       bg-[url('https://i.pinimg.com/736x/98/40/6a/98406a41c6b66dc9291d62f42b7a86a4.jpg')] 
       bg-cover bg-center bg-no-repeat
       flex flex-col justify-end px-14 pb-14"
      >
        <LeftHeading />

        <div className="flex gap-5 justify-between">
          {props.cardContent.map(function (elem,idx) {
            return <Card key={idx} id={idx} tag={elem.tag} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
