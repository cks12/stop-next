import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const BtnStyle = 'bg-blue-500 hover:bg-blue-700 text-[1.2rem] text-white font-title shadow font-bold py-3 px-5 rounded-full';

const Button: React.FC<ButtonProps> = ({ className,children, ...props }) => (
  <button
    className={`${BtnStyle} ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
