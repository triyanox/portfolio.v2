import { TiHeartFullOutline } from "react-icons/ti";
import { useSWRConfig } from "swr";

type LikeProps = {
  slug: string;
};

const Like = ({ slug }: LikeProps) => {
  const { mutate } = useSWRConfig();
  const handleLike = async () => {
    await fetch(`/api/posts/likes/${slug}`, {
      method: "POST",
    });
    mutate("/api/posts/likes/" + slug);
  };
  return (
    <button
      onClick={handleLike}
      className="bg-zinc-900  fixed bottom-0 shadow-lg text-white dark:text-black right-0 z-50 mr-8 md:mr-20 mb-8 dark:bg-zinc-50 active:text-red-500 active:dark:text-red-600 rounded-full px-3 py-3 ring-0 active:ring-4 ring-zinc-200 dark:ring-zinc-800 hover:ring-4 hover:scale-105 transition-all duration-300 active:scale-95 "
    >
      <TiHeartFullOutline className="text-3xl " />
    </button>
  );
};
export default Like;
