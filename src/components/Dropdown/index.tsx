import * as React from "react";

const Dropdown = ({ children, onSelect, handleRef }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef();

  const clickedOutside = (e: any) => {
    if (!isOpen) return;
    if (!e.target.contains(ref.current)) {
      setIsOpen(!isOpen);
    }
  };

  const select = (...itemProps: any[]) => {
    onSelect(itemProps);
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    document.addEventListener("click", clickedOutside);

    return () => {
      document.removeEventListener("click", clickedOutside);
    };
  }, []);

  return (
    <div ref={ref} className="flex flex-col">
      {children(select)}
    </div>
  );
};

export default Dropdown;
