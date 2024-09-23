import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col lg:flex-row lg:justify-start lg:items-start"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start"
            >
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 lg:mb-0 rounded"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 lg:pl-8"
            >
              <h6 className=" text-center mb-2 font-semibold text-lg lg:text-start">
                {project.title}
              </h6>
              <p className=" text-center mb-4 text-neutral-400 lg:text-start">
                {project.description}
              </p>
              
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-center my-4 lg:text-start  rounded font-bold">Live Demo</div>
              </a>
              
              <div className="text-center lg:text-start">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 inline-block rounded bg-neutral-500 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
