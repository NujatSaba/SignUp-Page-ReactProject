import React from "react";

const AutoLogIn = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex gap-5 justify-center mt-3">
        <button className="border rounded-lg py-2 px-4 flex items-center gap-2">
          <img
            className="h-5 w-5"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png"
            alt="Google"
          />
          Google
        </button>
        <button className="border rounded-lg py-2 px-4 flex gap-2 items-center">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png" alt="Github" className="h-5 w-5" />
            Github</button>
      </div>
      <div className="flex justify-between items-center pl-17 pr-17 h-12 w-full mb-2">
        <div className="bg-white h-px w-1/2"></div>
        <h3 className="mx-4">or</h3>
        <div className="bg-white h-px w-1/2"></div>
      </div>
    </div>
  );
};

export default AutoLogIn;