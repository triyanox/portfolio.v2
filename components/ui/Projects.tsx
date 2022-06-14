import { motion } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const Projects = () => {
  return (
    <section className="px-6 w-full md:px-24 flex justify-center items-center gap-16 flex-col pt-36 md:pt-48">
      <div className="w-full gap-4 flex flex-row justify-start items-center">
        <div className="flex flex-col justify-center items-start gap-1">
          <h1 className="text-xl md:text-2xl font-bold">Projects</h1>
          <h2 className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400">
            Awesome Projects I&apos;ve worked on
          </h2>
        </div>
      </div>
      <motion.div
        variants={stagger}
        className="my-8 w-full gap-6 grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3"
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.name}
            source={project.link}
            preview={project.preview}
            stack={project.tech}
            description={project.description}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
