import React from "react";

export const PrimaryButton = ({ children, onSubmit, className = "" }) => {
  return (
    <button
      className={`w-full text-black border-black border-2 rounded-lg bg-yellow-400 hover:bg-yellow-600 h-16 ${className}`}
      onClick={onSubmit}
    >
      {children}
    </button>
  );
};
