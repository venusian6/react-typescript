import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handlesignup = () => {
    const data = { confirmPassword, email, password };
    console.log(data);
  };

  const handlesignin = () => {
    const data = { email, password };
    console.log(data);
  };

  return (
    <div className="w-full border-1 border-red-700 md:w-[450px]">
      <h1 className="text-white text-center font-bold text-4xl md:text-6xl mb-10">
        {login ? "Login" : "Register"}
      </h1>
      <div className="flex flex-col gap-3 bg-white w-full p-6 min-h[150px] rounded-xl drop-shadow-xl ">
        <Input
          name="email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          name="password"
          type="password"
          onChange={(e) => setpassword(e.target.value)}
        />
        {!login ? (
          <Input
            name="Confirm password"
            type="password"
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
        ) : (
          ""
        )}

        {login ? (
          <>
            {" "}
            <Button text="Login" onClick={() => handlesignin()} />
            <Button
              text="Register"
              secondary
              onClick={() => {
                setLogin(false);
              }}
            />
          </>
        ) : (
          <>
            {" "}
            <Button text="Register" onClick={handlesignup} />
            <Button
              text="Login"
              secondary
              onClick={() => {
                setLogin(true);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
