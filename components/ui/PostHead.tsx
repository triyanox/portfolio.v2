import { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import { Loading } from './Loading'

type Props = {
  title: string
  date: string
  readTime: any
  slug: string
}

export function PostHead({ title, date, readTime, slug }: Props) {
  const { data: views, error: viewsError } = useSWR(
    `/api/posts/views/${slug}`,
    fetcher
  )
  const { data: likes, error: likesError } = useSWR(
    `/api/posts/likes/${slug}`,
    fetcher
  )
  const effectCalled = useRef(false)

  useEffect(() => {
    if (!effectCalled.current) {
      const registerView = () =>
        fetch(`/api/posts/views/${slug}`, {
          method: 'POST',
        })
      registerView()
      effectCalled.current = true
    }
  }, [slug])

  return (
    <div className="flex w-full flex-col items-start pt-4 pb-14 md:pt-12">
      <div className="col-span-full w-full lg:col-span-8 lg:col-start-3">
        <h2 className="text-3xl leading-tight text-black dark:text-white md:text-4xl">
          {title}
        </h2>
        <div className="flex w-full items-center justify-start gap-2">
          <p className="dark:text-blueGray-500 mt-2 text-lg font-medium text-gray-400">
            {date}
          </p>
          <p className="dark:text-blueGray-500 mt-2 text-lg font-medium text-gray-400">
            •
          </p>
          <p className="dark:text-blueGray-500 mt-2 text-lg font-medium text-gray-400">
            {!views && !viewsError ? <Loading /> : views + ' views'}
          </p>
          <p className="dark:text-blueGray-500 mt-2 text-lg font-medium text-gray-400">
            •
          </p>
          <p className="dark:text-blueGray-500 mt-2 text-lg font-medium text-gray-400">
            {!likes && !likesError ? <Loading /> : likes + ' likes'}
          </p>
        </div>
      </div>
    </div>
  )
}
