import { PropsWithChildren, ReactElement } from "react";

interface InputBoxProps {
  placeholder: any;
  className?: string;
}

const InputBox = ({ placeholder, className }: InputBoxProps) => {
  return (
    <input
      className={`p-1 w-full text-gray-800 h-8 border-b border-gray-500 outline-none focus:border-green-600 ${className}`}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default InputBox;
