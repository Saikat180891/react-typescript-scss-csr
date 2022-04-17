interface MainProps {
  children: any;
  className?: string;
}

const Main = ({ children, className }: MainProps) => {
  return <div className={className}>{children}</div>;
};

export default Main;
