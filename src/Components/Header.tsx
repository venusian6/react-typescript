import React from "react";
// import morse from "...Assets/morse.png";
import Button from "./Button";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className=" flex flex-wrap sm:flex-row gap-5 items-center justify-between bg-gradient-to-r from-myBlue to-myPink px-5 py-5 md:py-2 text-white">
      <img
        className="w-[70px] drop-shadow-md opacity-70 "
        src={require("../Assets/venusinan2.png")}
      />
      <div className="flex">
        <Button text="Add New ListBoard " secondary></Button>
      </div>
    </div>
  );
};

export default Header;
