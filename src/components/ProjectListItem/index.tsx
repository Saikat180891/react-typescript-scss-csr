const ProjectListItem = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 mb-4 bg-white">
      <div className="h-40 col-span-2 border border-gray-300">
        <img
          className="object-contain w-full h-full"
          src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
      </div>
      <div className="flex flex-col col-span-7">
        <p className="font-semibold">This is the title of the project</p>
        <p className="text-xs text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          optio, ex itaque odit earum temporibus eum alias dolores, velit cum
          aperiam sapiente. Quam iusto nostrum id, temporibus officia excepturi
          beatae?
        </p>
      </div>
      <div className="flex flex-col col-span-3">
        <button className="text-blue-500 border border-blue-500">
          View Project
        </button>
        <div className="flex mt-4">
          <button>Bookmark Icon</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectListItem;
