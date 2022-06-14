import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export type Description = {
  text: String;
  tools?: ReactNode[];
};
export const Description = (props: Description) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transformOrigin: "left",
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
          dump: 0.8,
          ease: "easeInOut",
          stiffness: 100,
          elapsed: 1,
        }}
        className="flex w-full  flex-col items-start justify-center rounded-[30px] "
      >
        <p className="text-2xl font-medium text-gray-600 dark:text-gray-400 ">
          {props.text}
        </p>
        {props.tools !== undefined && (
          <div>
            <p className="mt-4 text-2xl font-medium text-gray-600 dark:text-gray-400 ">
              Tools I&apos;m using :
            </p>
            <div className=" mt-4 flex flex-row justify-start gap-3 text-2xl text-gray-600 dark:text-gray-400 md:text-3xl">
              {props.tools.map((tool) => {
                return tool;
              })}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
