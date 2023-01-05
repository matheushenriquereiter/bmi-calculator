import React from "react";

const Button = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-neutral-600 h-14 text-4xl rounded-b-xl"
    >
      Enviar
    </button>
  );
};

export default Button;
