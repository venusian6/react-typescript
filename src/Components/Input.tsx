import React from "react";

type Inputprops = {
  name: string;
  value?: string;
  type?: string;
  onChange?: (e: any) => void;
  className?: string;
  onKeyDown?: (e: any) => void;
  disabled?: boolean;
};
// This above is typescript
// ({props:Inputprops}) below we destructured the variable
const Input = ({
  name,
  type = "text",
  onChange,
  value,
  className,
  onKeyDown,
  disabled,
}: Inputprops) => {
  return (
    <input
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      type={type}
      disabled={disabled}
      placeholder={"Enter" + " " + name}
      className={`flex-1 px-3 placeholder-gray-300 py-1 bg-transparent border-2 border-gray-300 rounded-full ${className} `}
    />
  );
};

export default Input;
