import React from "react";
import { motion } from "framer-motion";

const Projectmini = ({ container, container2 }) => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A modern e-commerce platform built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with real-time data",
      technologies: ["JavaScript", "API Integration", "CSS"],
      link: "#"
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          variants={container(index * 0.2)}
          initial="hidden"
          whileInView="visible"
          className="projecttable p-6"
        >
          <h3 className="head5 texthilit1 mb-3">{project.title}</h3>
          <p className="text-2ndry-2 dark:text-2ndry-1 mb-4">
            {project.description}
          </p>
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-lhilit-1 dark:bg-dhilit-1 text-white px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <a
            href={project.link}
            className="texthilit1 hover:underline"
          >
            View Project →
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default Projectmini;
