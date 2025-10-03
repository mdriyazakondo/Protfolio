import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Projecct from "../components/Projecct";

const Projects = () => {
  const [porjects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="my-12">
      <SectionTitle title={"My Projects"} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {porjects.map((project, index) => (
          <Projecct key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
