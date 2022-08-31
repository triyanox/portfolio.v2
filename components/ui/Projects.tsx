import projects from '../../data/projects'
import ProjectCard from './ProjectCard'
import { memo, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

// eslint-disable-next-line react/display-name
const Projects = memo(() => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('show')
    }
    return () => {
      controls.stop()
    }
  }, [controls, inView])
  return (
    <section className="flex w-full flex-col items-center justify-center gap-16 px-6 pt-36 md:px-24 md:pt-48">
      <div className="flex w-full flex-row items-center justify-start gap-4">
        <div className="flex flex-col items-start justify-center gap-1">
          <h1 className="text-xl font-bold md:text-2xl">Projects</h1>
          <h2 className="text-xl text-zinc-600 dark:text-zinc-400 md:text-2xl">
            Awesome Projects I&apos;ve worked on
          </h2>
        </div>
      </div>
      <motion.ol
        variants={container}
        initial="hidden"
        ref={ref}
        animate={controls}
        className="my-8 grid w-full grid-cols-1 gap-6 lg:grid-cols-2  xl:grid-cols-3"
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
      </motion.ol>
    </section>
  )
})

export default Projects
