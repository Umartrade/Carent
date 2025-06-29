import React from 'react';

const Col = ({ 
  children, 
  className = '', 
  xs, 
  sm, 
  md, 
  lg, 
  xl,
  span,
  offset,
  ...props 
}) => {
  let colClasses = 'px-2 ';
  
  // Handle different breakpoint sizes
  if (xs) colClasses += `w-${xs}/12 `;
  if (sm) colClasses += `sm:w-${sm}/12 `;
  if (md) colClasses += `md:w-${md}/12 `;
  if (lg) colClasses += `lg:w-${lg}/12 `;
  if (xl) colClasses += `xl:w-${xl}/12 `;
  
  // Handle span (for full width columns)
  if (span) colClasses += `w-${span}/12 `;
  
  // Handle offset
  if (offset) colClasses += `ml-${offset}/12 `;
  
  // Handle special Bootstrap-like classes
  if (className.includes('col-6')) colClasses += 'w-1/2 ';
  if (className.includes('col-4')) colClasses += 'w-1/3 ';
  if (className.includes('col-3')) colClasses += 'w-1/4 ';
  if (className.includes('col-12')) colClasses += 'w-full ';
  
  return (
    <div 
      className={`${colClasses} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export default Col;