import React from "react";

const Card = (props) => {
 
  const isGlassy= props.id=== 1 || props.id===2;

  return (
    <div className= {`h-35 w-42 rounded-2xl p-5 flex flex-col
      ${
        isGlassy? "bg-white/15 backdrop-blur-sm border-2 border-white/20 text-gray-300"  : "bg-white text-black"
      }
    `}>
      <button className={` rounded-full px-2 h-8 w-8 text-sm flex justify-center items-center

      ${
        isGlassy? "bg-white/15 backdrop-blur-lg text-gray-100":"bg-gray-900 text-white"


      }
      
      
      `}>
        {props.id+1}
      </button>
      <h1 className="font-bold text-md mt-4">{props.tag}</h1>
    </div>
  );
};

export default Card;
