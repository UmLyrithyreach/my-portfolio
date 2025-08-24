import React from "react";
import { motion } from "framer-motion";

const Skillset = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"]
    },
    {
      category: "Backend", 
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Vite", "Webpack", "Figma", "VS Code", "Postman"]
    }
  ];

  const container = (delay) => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div id="skillset" className="py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            variants={container(categoryIndex * 0.2)}
            initial="hidden"
            whileInView="visible"
            className="projecttable p-6"
          >
            <h3 className="head5 texthilit1 mb-4">{category.category}</h3>
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  variants={container(categoryIndex * 0.2 + skillIndex * 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-lhilit-1 dark:bg-dhilit-1 rounded-full"></div>
                  <span className="text-2ndry-2 dark:text-2ndry-1">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skillset;
