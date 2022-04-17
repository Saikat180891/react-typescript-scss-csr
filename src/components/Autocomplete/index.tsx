import InputBox from "../InputBox";

const AutoComplete = () => {
  return (
    <div className="relative flex flex-col w-80">
      <div>
        <InputBox placeholder="Search for an article or project" />
      </div>
    </div>
  );
};

export default AutoComplete;
