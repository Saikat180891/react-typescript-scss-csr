const Label = ({ children, id }: any) => {
  return <label  className="text-xs text-gray-500" htmlFor={id}>{children}</label>;
};

export default Label;
