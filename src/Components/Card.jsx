import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className='max-w-[500px] border-x-black border-y-black rounded-lg max-h-screen border flex justify-center m-auto'>
      <div>
        <div>
          {title && (
            <p className='text-3xl text-coral-red text-center'>
              {title}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
