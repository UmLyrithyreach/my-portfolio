import React from "react";
import { motion } from "framer-motion";
import PlaceholderImage from "../PlaceholderImage";

const ProjectCard = ({ project, index }) => {
  const container = (delay) => ({
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: delay },
    },
  });

  return (
    <motion.div
      variants={container(index * 0.1)}
      initial="hidden"
      whileInView="visible"
      className="projecttable p-6 group"
    >
      <div className="mb-4 overflow-hidden rounded-lg">
        <PlaceholderImage width={400} height={192} title={project.title} />
      </div>
      
      <h3 className="head5 texthilit1 mb-3">{project.title}</h3>
      
      <p className="text-2ndry-2 dark:text-2ndry-1 mb-4 text-sm">
        {project.description}
      </p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-lhilit-1 dark:bg-dhilit-1 text-white px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex space-x-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="texthilit1 hover:underline text-sm"
        >
          GitHub →
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="texthilit1 hover:underline text-sm"
        >
          Live Demo →
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
