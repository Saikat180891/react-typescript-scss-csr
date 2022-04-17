import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full text-white bg-gray-800">
      <ul>
        <li className="h-8 px-4">
          <Link to={"/"}>Landing</Link>
        </li>
        <li className="h-8 px-4">
          <Link to={"/project-create"}>Project Create</Link>
        </li>
        <li className="h-8 px-4">
          <Link to={"/project-list"}>Project List</Link>
        </li>
        <li className="h-8 px-4">
          <Link to={"/project-details"}>Project Details</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
