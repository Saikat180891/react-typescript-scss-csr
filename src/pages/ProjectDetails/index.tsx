import Article from "../../components/Article";
import ArticleLabel from "../../components/ArticleLabel";

const ProjectDetails = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
      <div className="col-span-1 row-span-1 flex flex-col bg-white p-4 shadow">
        <label>Abstract</label>
        <Article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sequi
          cumque repellat eveniet quos? Voluptatem ducimus velit laborum,
          quibusdam, itaque porro, nihil sapiente quidem mollitia nesciunt
          consequuntur maxime repellendus! Eos? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Iusto numquam debitis, dignissimos
          sapiente nisi eveniet dolor nulla velit, esse repellendus in quis!
          Nesciunt est nisi voluptatibus nam ducimus perspiciatis vitae.
        </Article>
      </div>
      <div className="col-span-1 row-span-1 bg-white p-4 shadow">
        <ArticleLabel
          label={"Project Title"}
          value={"This is an example of project title"}
        />
        <ArticleLabel
          label={"Date"}
          value={"10/12/2000"}
        />
      </div>
      <div className="col-span-2 row-start-2 row-span-1 bg-white shadow p-4">
          <button className="border border-green-600 text-green-600 px-4">Download PDF</button>
      </div>
    </div>
  );
};

export default ProjectDetails;
