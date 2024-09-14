import React from "react";
import { useState,useEffect } from "react";
import "./Projects.css";
import EachPageHead from "../../Components/EachPageHead/EachPageHead";
import ServicesAndProjectsItem from "../../Components/ServicesItem/ServicesAndProjectsItem";
import axios from "axios";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error 404", error);
      });
  }, []);

  return (
    <div>
      <section className="each__page__head">
        <EachPageHead
          backgroundImage="./Assets/project_head_back_img.png"
          heading="Projects"
        />
      </section>
      <section className="projects__sec">
        <div className="container">
          <div className="projects__container">
            {projects.map((project) => (
              <Link to={`/project-detail/${project.id}`} key={project.id}>
                <ServicesAndProjectsItem data={project} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
