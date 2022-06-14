import { BsFolderFill } from "react-icons/bs/index.js";
import { SiGithub } from "react-icons/si/index.js";
import { SiOpenlayers } from "react-icons/si/index.js";
import Link from "next/link";
import { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  title: string;
  source: string;
  preview: string;
  stack: (() => JSX.Element)[];
  description: string;
}

const ProjectCard = (props: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    return () => {
      controls.stop();
    };
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          scale: 1,
          transformOrigin: "bottom",
          transition: {
            duration: 0.5,
            dump: 0.8,
            stiffness: 100,
            ease: "easeInOut",
          },
        },
        hidden: {
          scale: 0.6,
        },
      }}
      className="flex w-full items-center justify-start gap-4 rounded-[30px] "
    >
      <div className="relative flex h-full w-full flex-col justify-center gap-2 rounded-[30px]  p-8  backdrop-blur-2xl bg-zinc-50  dark:bg-zinc-900 ">
        <div className="flex flex-col gap-4 ">
          <div className="grid grid-cols-2 items-start justify-between">
            <h1 className="text-2xl  font-semibold dark:text-white text-black md:text-2xl ">
              {props.title}
            </h1>

            <div className="flex w-full flex-row items-center justify-end gap-4 px-2 text-2xl text-black dark:text-white">
              <Link href={`${props.source}`} passHref>
                <a target="_blank">
                  <button
                    aria-label="Source Code"
                    className="group relative transition duration-300  hover:text-gray-600 active:skew-y-3 active:scale-90 dark:hover:text-gray-400"
                  >
                    <SiGithub />
                    <span
                      className="absolute -right-9 m-2 w-auto min-w-max origin-top scale-0 rounded-md
                    bg-black p-2  text-xs font-bold 
    text-white shadow-md 
    transition-all duration-100 group-hover:scale-100 dark:bg-white dark:text-black"
                    >
                      Source Code
                    </span>
                  </button>
                </a>
              </Link>
              {props.preview && (
                <Link href={`${props.preview}`} passHref>
                  <a target="_blank">
                    <button
                      aria-label="Preview"
                      className="group relative transition duration-300  hover:text-gray-600 active:skew-y-3 active:scale-90 dark:hover:text-gray-400"
                    >
                      <SiOpenlayers />
                      <span
                        className="absolute -right-6 m-2 w-auto min-w-max origin-top scale-0 rounded-md
                    bg-black p-2  text-xs font-bold 
    text-white shadow-md 
    transition-all duration-100 group-hover:scale-100 dark:bg-white dark:text-black"
                      >
                        Preview
                      </span>
                    </button>
                  </a>
                </Link>
              )}
            </div>
          </div>
          <div className="mb-1 flex flex-col  justify-start text-md   text-gray-600 dark:text-gray-400 md:text-lg">
            {props.description}
          </div>
          <div className="flex flex-row justify-start gap-3  text-2xl text-gray-600 dark:text-gray-400 md:text-3xl">
            {props.stack.map((item, i) => {
              return (
                <div className="flex justify-center items-center" key={i}>
                  {item()}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
