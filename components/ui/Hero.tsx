import Link from 'next/link'
import { MdArticle, MdMarkEmailRead } from 'react-icons/md'
import { IconFilledButton } from './Buttons'

const Hero = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 px-6 pt-20 md:px-24 md:pt-24">
      <div className="flex w-full flex-row items-center justify-start gap-4">
        <div className="h-16 w-16 animate-gradient-xy rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-blue-500 md:h-20 md:w-20" />
        <div className="flex flex-col items-start justify-center gap-1">
          <h1 className="text-lg font-semibold md:text-2xl">Mohamed Achaq</h1>
          <h2 className="text-lg font-semibold text-black text-opacity-60 dark:text-white dark:text-opacity-60 md:text-2xl">
            Software Developer / Designer
          </h2>
        </div>
      </div>{' '}
      <div className="flex flex-col items-start justify-start gap-10 pt-8">
        <p className="text-2xl text-black dark:text-white md:text-3xl">
          I am building web applications with with beautiful user interfaces,
          great user experience and highly optimized backend services. And I
          love to discover and learn new technologies.
        </p>
        <div className="flex items-center justify-start gap-4">
          <Link href="mailto:contact@achaq.dev" passHref>
            <a>
              <IconFilledButton
                icon={<MdMarkEmailRead className="text-3xl" />}
                text="Get in Touch"
              />
            </a>
          </Link>
          <Link href="/resume.pdf" passHref>
            <a>
              <IconFilledButton
                icon={<MdArticle className="text-3xl" />}
                text="Resume"
              />
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
