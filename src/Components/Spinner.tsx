import React from "react";

type Props = {};

const Spinner = (props: Props) => {
  return (
    <div className="border-2 border-t-myBlue w-5 h-5 rounded-full animate-spin"></div>
  );
};

export default Spinner;
