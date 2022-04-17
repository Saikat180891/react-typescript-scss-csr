import Label from "../../components/Label";
import Main from "../../components/Main";
import ProjectListItem from "../../components/ProjectListItem";

const Homepage = (): JSX.Element => {
    return <Main className="grid grid-cols-12 gap-5 p-4">
        <div className="col-span-9 bg-white border border-gray-500 h-80"></div>
        <div className="col-span-3 p-4 bg-white border border-gray-500">
            <div><p>Most Recent</p></div>
        </div>
        <div className="flex flex-col col-span-12">
            <ProjectListItem/> 
            <ProjectListItem/> 
            <ProjectListItem/> 
        </div>
    </Main>
}

export default Homepage;