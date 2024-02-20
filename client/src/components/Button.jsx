import React from "react";

const Button = ({ label, variant, onClick }) => {
  const contained =
    "text-white bg-yellow-500 hover:text-yellow-500 hover:bg-white";
  const outlined =
    "text-yellow-500 bg-white hover:text-white hover:bg-yellow-500";
  return (
    <>
      <button
        onClick={onClick}
        className={`border border-yellow-500 font-bold rounded-md font-palanquin px-2 py-1 mx-4 ${
          variant == "outlined" ? outlined : contained
        } max-sm:text-sm max-sm:px-2 max-sm:py-1`}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
