import { format, parseISO } from 'date-fns'
import { motion } from 'framer-motion'
import type { InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import { allPosts, Post } from '../.contentlayer/generated'
import PostCard from '../components/ui/PostCard'
import Page from '../layouts/Page'

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )
  return (
    <Page
      title="Blog | Mohamed Achaq"
      description="Mohamed Achaq is a software engineer, designer, and artist based in Morocco. He specializes in designing and building full-stack web applications ."
      image="https://achaq.codes/static/images/achaq-codes-blog.png"
    >
      <section className="flex w-full flex-col items-center justify-center gap-10 px-6 pt-20 md:gap-16 md:px-24 md:pt-16">
        <div className="flex w-full flex-row items-center justify-start gap-4">
          <div className="flex flex-col items-start justify-center gap-1">
            <h1 className="text-xl font-bold md:text-2xl">Blog</h1>
            <h2 className="text-xl text-zinc-600 dark:text-zinc-400 md:text-2xl">
              My thoughts on the web
            </h2>
          </div>
        </div>
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          className="sticky top-0 z-10 w-full translate-y-4 rounded-2xl bg-zinc-50 px-11 py-8 text-lg font-medium text-black placeholder-zinc-500 shadow-[0_35px_30px_-7px] shadow-white ring-zinc-100 backdrop-blur-2xl transition-all duration-300 focus-within:outline-none hover:ring-4 focus:outline-none focus:ring-4 focus:ring-zinc-100 disabled:text-zinc-400 disabled:ring-0 group-hover:ring-2 group-hover:ring-zinc-500  group-focus:ring-2  group-focus:ring-zinc-800 dark:bg-zinc-900 dark:text-white dark:shadow-black dark:ring-zinc-800 dark:ring-offset-black  dark:focus:ring-zinc-800  dark:disabled:text-zinc-500"
          placeholder="Search"
        />
        <motion.div className="group my-4 grid w-full grid-cols-1 gap-4 lg:grid-cols-2  xl:grid-cols-3">
          {filteredBlogPosts.map((post: Post, i) => (
            <PostCard
              date={post.date}
              readTime={post.readTime}
              key={i}
              title={post.title}
              slug={post.slug}
              description={post.description}
            />
          ))}
        </motion.div>
      </section>
    </Page>
  )
}

export default Blog

export async function getStaticProps() {
  const posts = allPosts
    .map((p) => ({
      ...p,
      date: format(parseISO(p.date), 'MMMM dd, yyyy'),
      readTime: p.readTime.text as any,
    }))
    .sort((a, b) => {
      return Number(new Date(b.date)) - Number(new Date(a.date))
    })
  return {
    props: {
      posts,
    },
  }
}
