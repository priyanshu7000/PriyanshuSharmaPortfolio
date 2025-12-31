import React from "react";

type ButtonProps = {
  content: string;
};

export const Button: React.FC<ButtonProps> = ({ content }) => {
  return (
    <button className="bg-white border text-black rounded-full px-4 py-2">
      {content}
    </button>
  );
};