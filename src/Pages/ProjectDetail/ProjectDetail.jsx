import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./ProjectDetail.css";
import EachPageHead from "../../Components/EachPageHead/EachPageHead";
import ProjectsImg from "./Assets/projects-detail-img.png";
import ProjectsHeadBackImg from "./Assets/service-head-back-img.png";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/projects/${id}`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/projects`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects list", error);
      });
  }, []);

  if (!project || projects.length === 0) {
    return <div>Loading project data...</div>;
  }

  const currentIndex = projects.findIndex((proj) => proj.id === id);

  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const handlePrevious = () => {
    if (previousProject) {
      navigate(`/project-detail/${previousProject.id}`);
    }
  };

  const handleNext = () => {
    if (nextProject) {
      navigate(`/project-detail/${nextProject.id}`);
    }
  };

  return (
    <div>
      <section className="each__page__head">
        <EachPageHead
          backgroundImage={ProjectsHeadBackImg}
          heading="Projects"
        />
      </section>
      <section className="pro__detail__sec">
        <div className="container">
          <div className="pro__detail__up">
            <img src={project.image || ProjectsImg} alt="Projects-Img" />
            <div className="detail__date">
              <ul>
                <li>
                  <strong>Date:</strong> {project.date}
                </li>
                <li>
                  <strong>Client:</strong> {project.client}
                </li>
                <li>
                  <strong>Location:</strong> {project.location}
                </li>
                <li>
                  <strong>Category:</strong> {project.category}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pro__detail__text">
        <div className="container">
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <div className="prev__next">
            <button
              className="btn__prev__next prev"
              onClick={handlePrevious}
              disabled={!previousProject}
            >
              Previous {previousProject && <h6>{previousProject.title}</h6>}
            </button>

            <button
              className="btn__prev__next next"
              onClick={handleNext}
              disabled={!nextProject}
            >
              <p>Next</p> {nextProject && <h6>{nextProject.title}</h6>}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
