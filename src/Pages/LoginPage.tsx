import React from "react";
import Input from "../Components/Input";
import Login from "../Components/Login";

const LoginPage = () => {
  return (
    <div className=" h-[100vh] flex items-center justify-center p-10">
      <Login />
      <div className="h-full w-full bg-gradient-to-r from-myBlue to-myPink opacity-50 absolute top-0 -z-10"></div>
      <div className="h-full w-full absolute bg-pattern -z-20 top-0"></div>
    </div>
  );
};

export default LoginPage;
