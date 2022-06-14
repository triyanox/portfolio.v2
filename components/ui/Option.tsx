import { AnimatePresence, motion } from "framer-motion";

export type Option = {
  text: string;
  handleClick: () => void;
};

export const Option = (props: Option) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transformOrigin: "left" }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.8,
          stiffness: 100,
          type: "spring",
          damping: 15,
        }}
        onClick={props.handleClick}
        className="rounded-full text-2xl font-semibold  text-zinc-400 dark:text-zinc-600"
      >
        {props.text}
      </motion.button>
    </AnimatePresence>
  );
};

export const OptionSelected = (props: Option) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 100, transformOrigin: "left" }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.4,
          stiffness: 100,
          type: "spring",
          damping: 15,
        }}
        onClick={props.handleClick}
        className="rounded-full dark:text-white text-black text-2xl font-semibold "
      >
        {props.text}
      </motion.button>
    </AnimatePresence>
  );
};
