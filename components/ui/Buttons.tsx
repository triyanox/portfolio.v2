import { ReactNode } from 'react'

type FilledButton = {
  icon?: ReactNode
  text: string
  onClick?: () => void
  aria?: string
}

export const FilledButton = (props: FilledButton) => {
  return (
    <button
      arian-label={props.aria}
      className="rounded-full bg-black px-6 py-2 text-lg font-bold text-white ring-zinc-300 transition-all duration-300 hover:scale-105 hover:ring-4 active:scale-95 dark:bg-white dark:text-black dark:ring-zinc-700 md:text-xl"
    >
      {props.text}
    </button>
  )
}
export const IconFilledButton = (props: FilledButton) => {
  return (
    <button
      arian-label={props.aria}
      className="flex items-center justify-center gap-2 rounded-2xl bg-black px-4 py-2 text-lg font-bold text-white ring-zinc-300 transition-all duration-300 hover:ring-4 active:scale-95 dark:bg-white dark:text-black dark:ring-zinc-700 md:text-xl"
    >
      {props.icon}
      {props.text}
    </button>
  )
}

export const UnFilled = (props: FilledButton) => {
  return (
    <button
      arian-label={props.aria}
      className="rounded-full px-2 py-1 text-lg text-black  transition-all duration-300 dark:text-white md:text-xl"
    >
      {props.text}
    </button>
  )
}

export const ActionButton = (props: FilledButton) => {
  return (
    <button
      arian-label={props.aria}
      className="rounded-full bg-black px-8 py-3 text-lg font-bold text-white ring-0 ring-zinc-300 transition-all duration-300 hover:scale-105 hover:ring-4 active:scale-95 dark:bg-white dark:text-black dark:ring-zinc-700"
    >
      {props.text}
    </button>
  )
}

type IconButton = {
  icon: ReactNode
  onclick?: () => void
  aria?: string
}

export const IconButton = (props: IconButton) => {
  return (
    <button
      arian-label={props.aria}
      onClick={props.onclick}
      className="rounded-full bg-black p-2 text-lg font-bold text-white ring-zinc-300 transition-all duration-300 hover:scale-105 hover:ring-4 active:scale-95 dark:bg-white dark:text-black dark:ring-zinc-700 md:text-xl"
    >
      {props.icon}
    </button>
  )
}

type SubmitButton = {
  text: string
  sm?: boolean
}

export const SubmitButton = (props: SubmitButton) => {
  return (
    <button
      type="submit"
      className={`${
        props.sm ? 'w-full sm:w-[360px]' : 'w-[360px]'
      } mt-4 rounded-2xl bg-zinc-900 py-3 px-4 font-bold text-white transition-all duration-300 hover:ring-4 hover:ring-zinc-300 active:scale-95 dark:bg-zinc-100 dark:text-black dark:hover:ring-zinc-700 md:w-[400px]`}
    >
      {props.text}
    </button>
  )
}

export const DeleteButton = (props: SubmitButton) => {
  return (
    <button
      type="submit"
      className={`${
        props.sm ? 'w-full sm:w-[360px]' : 'w-[360px]'
      } mt-4 rounded-2xl bg-red-500 py-3 px-4 font-bold text-white transition-all duration-300 hover:ring-4 hover:ring-red-300 active:scale-95 dark:bg-red-600 dark:text-black dark:hover:ring-red-400 md:w-[400px]`}
    >
      {props.text}
    </button>
  )
}
