import React from 'react';

const Form = ({ children, className = '', ...props }) => {
  return (
    <form className={className} {...props}>
      {children}
    </form>
  );
};

const FormGroup = ({ children, className = '', ...props }) => {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

const FormLabel = ({ children, className = '', ...props }) => {
  return (
    <label className={`form-label ${className}`} {...props}>
      {children}
    </label>
  );
};

const FormControl = ({ 
  type = 'text', 
  className = '', 
  placeholder = '',
  as,
  style,
  ...props 
}) => {
  const baseClasses = 'form-control';
  
  if (as === 'textarea') {
    return (
      <textarea 
        className={`${baseClasses} ${className}`}
        placeholder={placeholder}
        style={style}
        {...props}
      />
    );
  }
  
  return (
    <input 
      type={type}
      className={`${baseClasses} ${className}`}
      placeholder={placeholder}
      {...props}
    />
  );
};

const FormSelect = ({ children, className = '', ...props }) => {
  return (
    <select className={`form-select ${className}`} {...props}>
      {children}
    </select>
  );
};

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Control = FormControl;
Form.Select = FormSelect;

export default Form;