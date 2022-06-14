import { TiHeartFullOutline } from 'react-icons/ti'
import { useSWRConfig } from 'swr'

type LikeProps = {
  slug: string
}

const Like = ({ slug }: LikeProps) => {
  const { mutate } = useSWRConfig()
  const handleLike = async () => {
    await fetch(`/api/posts/likes/${slug}`, {
      method: 'POST',
    })
    mutate('/api/posts/likes/' + slug)
  }
  return (
    <button
      aria-label="Like"
      onClick={handleLike}
      className="fixed  bottom-0 right-0 z-50 mr-8 mb-8 rounded-full bg-zinc-900 px-3 py-3 text-white shadow-lg ring-0 ring-zinc-200 transition-all duration-300 hover:scale-105 hover:ring-4 active:scale-95 active:text-red-500 active:ring-4 dark:bg-zinc-50 dark:text-black dark:ring-zinc-800 active:dark:text-red-600 md:mr-20 "
    >
      <TiHeartFullOutline className="text-3xl " />
    </button>
  )
}
export default Like
