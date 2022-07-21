import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useMenu } from '../../lib/hooks/useMenu'

interface NavItems {
  href: string
  text: string
}

function NavItem({ href, text }: NavItems) {
  const router = useRouter()
  const isActive = router.asPath === href
  const { open, setOpen } = useMenu()

  return (
    <NextLink href={href}>
      <a
        onClick={() => setOpen(!open)}
        className={cn(
          isActive
            ? 'font-bold text-black dark:text-white'
            : 'font-semibold text-zinc-600 dark:text-zinc-400',
          'mb-4 p-2  '
        )}
      >
        <span>{text}</span>
      </a>
    </NextLink>
  )
}

function Menu() {
  const { open } = useMenu()
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
              borderRadius: '999px',
            }}
            animate={{
              scale: 1,
              opacity: 1,
              borderRadius: '0px',
              transformOrigin: 'center',
            }}
            exit={{
              scale: 0,
              opacity: 0,
              borderRadius: '999px',
            }}
            transition={{
              duration: 0.4,
              dump: 0.8,
              ease: 'easeInOut',
              stiffness: 100,
              elapsed: 1,
            }}
            className="fixed top-0  bottom-0 z-40 m-0 flex h-screen w-full flex-col items-center justify-center bg-white pt-12 text-4xl    font-light text-black dark:bg-black  dark:text-white"
          >
            <NavItem href="/" text="Home" />
            <NavItem href="/blog" text="Blog" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Menu
