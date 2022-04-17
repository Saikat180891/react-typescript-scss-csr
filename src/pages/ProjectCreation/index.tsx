import * as React from "react";
import InputBox from "../../components/InputBox";
import AuthorInfo from "../../components/AuthorInfo";
import Label from "../../components/Label";

const ProjectCreation = () => {
  const [authors, setAuthors] = React.useState([{ name: "" }]);

  const addAuthors = () => {
    setAuthors([...authors, { name: "" }]);
  };

  return (
    <div className="p-4">
      <form className="w-full h-full p-4 bg-white">
        <div className="flex flex-col mb-2">
          <Label>Title</Label>
          <InputBox placeholder="Enter project title" />
        </div>
        <div className="flex flex-col mb-2">
          <div className="flex items-end justify-start my-4">
            <Label>Authors</Label>
            <button
              type="button"
              className="px-2 ml-4 font-semibold text-white bg-green-600 border border-green-600 rounded-md"
              onClick={addAuthors}
            >
              Add +
            </button>
          </div>
          <div className="flex flex-col w-full mb-2">
            {authors.map((author) => (
              <AuthorInfo />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <Label>Abstract</Label>
          <textarea
            className="w-full p-1 border border-gray-500 outline-none resize-none focus:border-green-600"
            rows={10}
          />
        </div>
      </form>
    </div>
  );
};

export default ProjectCreation;
