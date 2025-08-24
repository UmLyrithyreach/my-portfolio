import React from "react";
import { motion } from "framer-motion";

const SkillsFront = ({ container, container2 }) => {
  const skills = [
    { name: "React", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "HTML/CSS", level: "Expert" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Git", level: "Intermediate" }
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          variants={container(index * 0.1)}
          initial="hidden"
          whileInView="visible"
          className="projecttable p-4"
        >
          <h3 className="head5 texthilit1 mb-2">{skill.name}</h3>
          <p className="text-2ndry-2 dark:text-2ndry-1">{skill.level}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsFront;
