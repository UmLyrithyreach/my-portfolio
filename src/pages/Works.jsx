import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TitlesS from "../components/TitlesSlash";
import Titles from "../components/TitlesOther";
import ProjectCard from "../components/Projectmini/ProjectCard";
import { fullstack, frontend } from "../components/Projectmini/ProjectData";
import MouseHover from "../components/MouseHover";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const allProjects = [...fullstack, ...frontend];

  const filteredProjects = activeFilter === "all"
    ? allProjects
    : activeFilter === "fullstack"
    ? fullstack
    : frontend;

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <>
      <div className="fixed inset-0 z-[-2] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="relative z-0"></div>
      <MouseHover />
      <Navbar />
      <div className="mycontainer scroll-smooth pb-10">
        <TitlesS htitle="works" />
        <motion.p
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="text-2ndry-2 dark:text-2ndry-1 mb-8"
        >
          Here are some of my recent projects showcasing my skills and experience.
        </motion.p>

        {/* Filter Buttons */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {["all", "fullstack", "frontend"].map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                  activeFilter === filter
                    ? "border-lhilit-1 dark:border-dhilit-1 bg-lhilit-1 dark:bg-dhilit-1 text-white"
                    : "border-2ndry-2 text-2ndry-2 dark:text-2ndry-1 hover:border-lhilit-1 dark:hover:border-dhilit-1"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        <section className="headsectdiv">
          <Titles htitle="projects" />
        </section>

        {/* Projects Grid */}
        <div id="projects" className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <hr className="my-8" />
        <Footer />
      </div>
    </>
  );
};

export default Works;