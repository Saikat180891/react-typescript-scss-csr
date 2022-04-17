import InputBox from "../InputBox";

const AuthorInfo = () => {
  return (
    <div className="flex justify-between w-full p-4 mb-4 border border-gray-300">
      <div className="w-full mr-4">
        <InputBox placeholder="Enter author name" />
      </div>
      <div className="w-full mr-4">
        <InputBox placeholder="Authors email id" />
      </div>
      <div className="w-full">
        <InputBox placeholder="Authors mobile number" />
      </div>
    </div>
  );
};

export default AuthorInfo;
