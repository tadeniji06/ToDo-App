import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button
      className='w-[105px] h-[35px] text-primary bg-coral-red'
      onClick={onClick}
    >
      {title && <p className='text-sm'>{title}</p>}
    </button>
  );
};

export default Button;
