import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import { Loading } from './Loading'

interface Props {
  title: string
  slug: string
  description: string
  date: string
  readTime: string
}

const PostCard = (props: Props) => {
  const [ref, inView] = useInView()
  const { data, error } = useSWR(
    inView ? `/api/posts/views/${props.slug}` : null,
    fetcher
  )

  return (
    <div
      ref={ref}
      className="transtion-all flex w-full items-center  justify-start gap-4 rounded-[30px] bg-zinc-50  ring-zinc-100 ring-offset-white duration-300 hover:!opacity-100 hover:ring-4 active:scale-95 group-hover:opacity-50 dark:bg-zinc-900 dark:ring-zinc-800 dark:ring-offset-black hover:dark:!opacity-100 dark:group-hover:opacity-50
    "
    >
      <Link href={`/blog/${props.slug}`} passHref>
        <a className="flex h-full w-full flex-col justify-start gap-2 p-8 ">
          <div className="flex w-full flex-col gap-4 ">
            <h1 className="w-full text-lg  font-semibold text-black dark:text-white md:text-xl ">
              {props.title}
            </h1>
            <div className="flex w-full items-center justify-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <p className="">{props.date.split(', 2022')[0]}</p>
              <p>•</p>
              <p className="">{props.readTime}</p>
              <p>•</p>
              <p>{data && !error ? data + ' views' : <Loading />}</p>
            </div>
            <h2 className="text-md w-full font-normal text-black text-opacity-60 dark:text-white dark:text-opacity-60 md:text-lg ">
              {props.description}
            </h2>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default PostCard
