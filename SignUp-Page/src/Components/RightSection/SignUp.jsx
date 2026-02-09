import { useState } from "react";

const SignUp = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const formHandler = (elem) => {
    elem.preventDefault();
    

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("")
  };

  return (
    <div className=" flex justify-center  ">
      <form
        onSubmit={(elem) => {
          formHandler(elem);
        }}
        className="flex flex-col items-center w-3/4  "
      >
        <div className="flex space-x-3 mb-2 w-full ">
          <div className="flex flex-col w-full">
            <label className="mb-2 text-[14px]" htmlFor="firstName">
              First Name
            </label>
            <input
              className="bg-gray-900 p-3 rounded-lg  text-sm focus:outline-none focus:bg-gray-800 transition ease-in-out duration-150  placeholder-gray-600 "
              type="text"
              id="firstName"
              value={FirstName}
              onChange={(elem) => {
                setFirstName(elem.target.value);
              }}
              placeholder="eg. Nujat"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="mb-2 text-[14px]" htmlFor="lastName">
              Last Name
            </label>
            <input
              className=" bg-gray-900 p-3 rounded-lg text-sm focus:outline-none focus:bg-gray-800 placeholder-gray-600 "
              id="lastName"
              type="text"
              value={LastName}
              onChange={(elem)=>{
                setLastName(elem.target.value)
              }}
              placeholder="eg. Saba"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label className="mb-2 text-[14px]" htmlFor="email">
            Email
          </label>
          <input
            className=" bg-gray-900 p-3 rounded-lg w-full text-sm focus:outline-none focus:bg-gray-800 placeholder-gray-600 mb-2"
            type="email"
            id="email"
            value={Email}
            onChange={(elem)=>{
              setEmail(elem.target.value)
            }}
            placeholder="eg. sabanujat14@gmail.com"
            name="Email"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="mb-2 text-[15px]" htmlFor="password">
            Password
          </label>
          <input
            className=" bg-gray-900 p-3 rounded-lg w-full text-sm focus:outline-none focus:bg-gray-800 placeholder-gray-600 mb-2"
            type="password"
            name="Password"
            id="password"
            value={password}
            onChange={(elem)=>{
              setPassword(elem.target.value)
            }}
            placeholder="Enter your Password"
          />
          <h3 className="text-[12px] mb-3">Must be at least 8 character</h3>
        </div>

        <button
          className=" bg-gray-50 text-stone-950 font-semibold p-3 rounded-lg w-full text-sm focus:outline-none transition ease-in-out duration-100 mb-7"
          type="submit"
        >
          Sign Up
        </button>

        <h3 className="text-sm mb-10">
          Already have an account?<span className="font-bold">Log In</span>{" "}
        </h3>
      </form>
    </div>
  );
};

export default SignUp;