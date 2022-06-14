import { ReactNode } from "react";

type FilledButton = {
  icon?: ReactNode;
  text: string;
  onClick?: () => void;
};

export const FilledButton = (props: FilledButton) => {
  return (
    <button className="px-6 py-2 rounded-full text-white dark:text-black bg-black dark:bg-white text-lg md:text-xl font-bold ring-zinc-300 dark:ring-zinc-700 hover:ring-4 hover:scale-105 transition-all duration-300 active:scale-95">
      {props.text}
    </button>
  );
};
export const IconFilledButton = (props: FilledButton) => {
  return (
    <button className="px-4 py-2 flex justify-center items-center gap-2 rounded-2xl text-white dark:text-black bg-black dark:bg-white text-lg md:text-xl font-bold ring-zinc-300 dark:ring-zinc-700 hover:ring-4 transition-all duration-300 active:scale-95">
      {props.icon}
      {props.text}
    </button>
  );
};

export const UnFilled = (props: FilledButton) => {
  return (
    <button className="px-2 py-1 rounded-full text-black dark:text-white  text-lg md:text-xl transition-all duration-300">
      {props.text}
    </button>
  );
};

export const ActionButton = (props: FilledButton) => {
  return (
    <button className="px-8 py-3 rounded-full font-bold text-white dark:text-black bg-black dark:bg-white text-lg ring-0 hover:ring-4 ring-zinc-300 dark:ring-zinc-700 hover:scale-105 transition-all duration-300 active:scale-95">
      {props.text}
    </button>
  );
};

type IconButton = {
  icon: ReactNode;
  onclick?: () => void;
};

export const IconButton = (props: IconButton) => {
  return (
    <button
      onClick={props.onclick}
      className="p-2 rounded-full text-white dark:text-black bg-black dark:bg-white text-lg md:text-xl font-bold ring-zinc-300 dark:ring-zinc-700 hover:ring-4 hover:scale-105 transition-all duration-300 active:scale-95"
    >
      {props.icon}
    </button>
  );
};

type SubmitButton = {
  text: string;
  sm?: boolean;
};

export const SubmitButton = (props: SubmitButton) => {
  return (
    <button
      type="submit"
      className={`${
        props.sm ? "w-full sm:w-[360px]" : "w-[360px]"
      } md:w-[400px] mt-4 dark:bg-zinc-100 bg-zinc-900 dark:text-black text-white font-bold py-3 px-4 rounded-2xl hover:ring-4 dark:hover:ring-zinc-700 hover:ring-zinc-300 transition-all duration-300 active:scale-95`}
    >
      {props.text}
    </button>
  );
};

export const DeleteButton = (props: SubmitButton) => {
  return (
    <button
      type="submit"
      className={`${
        props.sm ? "w-full sm:w-[360px]" : "w-[360px]"
      } md:w-[400px] mt-4 dark:bg-red-600 bg-red-500 dark:text-black text-white font-bold py-3 px-4 rounded-2xl hover:ring-4 dark:hover:ring-red-400 hover:ring-red-300 transition-all duration-300 active:scale-95`}
    >
      {props.text}
    </button>
  );
};
