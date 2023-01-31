import Link from 'next/link'
import { SiTwitter } from 'react-icons/si'
import { IconFilledButton } from './Buttons'

type Props = {
  link: string
}

const SupportCard = (props: Props) => {
  return (
    <div className="mt-8 flex w-full flex-col items-center justify-center gap-8 rounded-2xl py-8 px-8  text-xl font-semibold  md:flex-row">
      Spread the word !
      <Link
        href={`https://twitter.com/intent/tweet?url=https://achaq.dev/blog/${props.link}`}
        passHref
      >
        <a target="_blank">
          <IconFilledButton
            icon={<SiTwitter className="text-3xl" />}
            text="Share on Twitter"
          />
        </a>
      </Link>
    </div>
  )
}

export default SupportCard
