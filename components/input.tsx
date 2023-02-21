import React from 'react';
import { InputHTMLAttributes } from 'react';

// interface Props extends InputHTMLAttributes<HTMLInputElement> {
//   className?: string;
//   children?: HTMLInputElement;
// }


const Input: React.FC<any> = ({ className, children, ...rest }) => {
  return (
    <div>
    {children}
    <input
      className={`bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal ${className}`}
      {...rest}
      />
      </div>
  );
};

export default Input;