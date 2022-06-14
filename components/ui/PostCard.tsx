import Link from "next/link";
import { useInView } from "react-intersection-observer";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import { Loading } from "./Loading";

interface Props {
  title: string;
  slug: string;
  description: string;
  date: string;
  readTime: string;
}

const PostCard = (props: Props) => {
  const [ref, inView] = useInView();
  const { data, error } = useSWR(
    inView ? `/api/posts/views/${props.slug}` : null,
    fetcher
  );

  return (
    <div
      ref={ref}
      className="flex w-full hover:ring-2 ring-zinc-500  ring-offset-4 ring-offset-white dark:ring-offset-black active:scale-95  items-center justify-start gap-4 bg-zinc-50 dark:bg-zinc-900 transtion-all rounded-[30px] duration-300
    "
    >
      <Link href={`/blog/${props.slug}`} passHref>
        <a className="flex h-full w-full flex-col justify-center gap-2 p-8 ">
          <div className="flex w-full flex-col gap-4 ">
            <h1 className="text-lg w-full  font-semibold dark:text-white text-black md:text-xl ">
              {props.title}
            </h1>
            <div className="flex gap-2 justify-start items-center text-sm w-full text-gray-600 dark:text-gray-400">
              <p className="">{props.date.split(", 2022")[0]}</p>
              <p>•</p>
              <p className="">{props.readTime}</p>
              <p>•</p>
              <p>{data && !error ? data + " views" : <Loading />}</p>
            </div>

            <div className="mb-1 flex flex-col  justify-start text-md font-medium  text-gray-600 dark:text-gray-400 md:text-lg">
              {props.description}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PostCard;
