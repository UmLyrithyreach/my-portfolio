import React from "react";
import profileImage from "../assets/profile.svg";
import { motion } from "framer-motion";

const AboutMini = ({ htitle, container, container2 }) => {
  const mern = ["MongoDB", "Express.js", "React.js", "Node.js"];

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <motion.div
          variants={container(0.5)}
          initial="hidden"
          whileInView="visible"
          className="space-y-4"
        >
          <p className="text-2ndry-2 dark:text-2ndry-1">
            Hello! I'm a passionate web developer with experience in creating
            modern, responsive websites and applications.
          </p>
          <p className="text-2ndry-2 dark:text-2ndry-1">
            I specialize in Front End Development and Full Stack development.
            I have experience working with the MERN stack and modern web technologies.
          </p>
          <p className="text-2ndry-2 dark:text-2ndry-1">
            I love creating user-friendly interfaces, solving complex problems,
            and bringing creative ideas to life through code.
          </p>

          {htitle !== "homeabout" && (
            <div className="mt-6">
              <h4 className="head5 texthilit1 mb-3">MERN Stack</h4>
              <div className="flex flex-wrap gap-2">
                {mern.map((tech, index) => (
                  <motion.span
                    key={tech}
                    variants={container(0.7 + index * 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    className="bg-lhilit-1 dark:bg-dhilit-1 text-white px-3 py-1 rounded text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          variants={container2(0.7)}
          initial="hidden"
          whileInView="visible"
          className="flex justify-center items-center"
        >
          <div className="relative">
            <div className="bg-lhilit-1 dark:bg-dhilit-1 w-64 h-64 rounded-lg"></div>
            <img
              src={profileImage}
              alt="Profile"
              className="absolute top-0 left-0 w-64 h-64 object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutMini;
