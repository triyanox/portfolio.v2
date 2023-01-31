import Link from 'next/link'
import { MdMarkEmailRead } from 'react-icons/md'
import { IconFilledButton } from './Buttons'

const CTA = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-y-4 px-6 py-12 md:px-16">
      <div className="mx-24 flex w-full flex-col  items-center justify-center rounded-xl ">
        <h1 className="mb-8 text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
          Want to work together ?
        </h1>
        <Link href="mailto:contact@achaq.dev" passHref>
          <a>
            <IconFilledButton
              icon={<MdMarkEmailRead className="text-3xl" />}
              text="Get in Touch"
            />
          </a>
        </Link>
      </div>
    </section>
  )
}

export default CTA
