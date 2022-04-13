import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default Router;
