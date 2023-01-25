import Link from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef, ReactNode } from 'react'

// eslint-disable-next-line react/display-name
export const NavLink = forwardRef(
  (
    props: {
      text: string
      active: boolean
      href: string
      icon?: ReactNode
    },
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    const router = useRouter()
    return (
      <Link href={props.href}>
        <a
          ref={ref}
          className={`${
            props.active
              ? 'bg-zinc-100 dark:bg-zinc-800'
              : ' text-black hover:bg-zinc-50 active:bg-zinc-100  dark:text-white hover:dark:bg-zinc-900 active:dark:bg-zinc-800'
          } ${
            router.asPath === props.href ? 'font-bold' : ''
          } group flex w-full items-center gap-4 rounded-2xl px-2 py-2 text-xl`}
        >
          {props.icon}
          {props.text}
        </a>
      </Link>
    )
  }
)
