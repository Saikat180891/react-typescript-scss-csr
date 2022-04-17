import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import Homepage from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProjectCreation from "./pages/ProjectCreation";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectListing from "./pages/ProjectListing";

const Router = () => {
  return (
    <Dashboard sidebar={<Sidebar />} topHeader={<Header />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project-create" element={<ProjectCreation />} />
        <Route path="/project-list" element={<ProjectListing />} />
        <Route path="/project-details" element={<ProjectDetails />} />
      </Routes>
    </Dashboard>
  );
};

export default Router;
