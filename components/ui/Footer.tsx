import {
  SiLinkedin,
  SiInstagram,
  SiGithub,
  SiTwitter,
  SiYoutube,
} from 'react-icons/si/index.js'
import Link from 'next/link'
import { IconButton } from './Buttons'

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-y-4 px-6 pb-16  pt-36 md:px-24 md:pt-48 lg:flex-row">
      <div className="flex w-full flex-col items-center ">
        <div className="flex w-full flex-col items-start justify-center gap-2 text-2xl ">
          <h2 className=" text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Mohamed Achaq
          </h2>
          <p className="text-md   text-gray-600 dark:text-gray-400 ">
            Full stack developer / UI and UX designer
          </p>
          <div className=" mt-4 flex w-full flex-row items-center gap-4 ">
            <Link href="https://github.com/triyanox" passHref>
              <a aria-label="Github" target="_blank">
                <IconButton aria="Github" icon={<SiGithub />} />
              </a>
            </Link>
            <Link href="https://twitter.com/ac__haq" passHref>
              <a aria-label="Twitter" target="_blank">
                <IconButton aria="Twitter" icon={<SiTwitter />} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
