import React from 'react';

const Row = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`flex flex-wrap -mx-2 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export default Row;