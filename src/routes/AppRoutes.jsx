
import { Routes, Route } from "react-router-dom";

import Projects from "../pages/Projects/Projects";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/project-details" element={<ProjectDetails />} />
    </Routes>
  );
}

export default AppRoutes;
