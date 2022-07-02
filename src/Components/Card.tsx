import React from 'react';

const Card = ({ children, title = '', ...props }: any) => {
  return (
    <div
      className="bg-[#6c9A8B] rounded-md p-2 m-2 shadow-sm shadow-black"
      {...props}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Card;
