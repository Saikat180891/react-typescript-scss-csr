import AutoComplete from "../Autocomplete";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-full px-4 text-white bg-blue-500">
      <div>
        <AutoComplete />
      </div>
      <div>p</div>
    </div>
  );
};

export default Header;
