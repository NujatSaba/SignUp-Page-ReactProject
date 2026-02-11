import React from "react";

const Card = () => {
  return (
    <div className="h-35 w-40 bg-white text-black rounded-2xl p-4 flex flex-col justify-evenly">
      <button className="bg-black text-white rounded-full px-2 h-7 w-7 text-sm">
        1
      </button>
      <h1 className="font-bold text-md mt-2">Sign up your account</h1>
    </div>
  );
};

export default Card;
