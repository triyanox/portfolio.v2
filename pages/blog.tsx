import type { InferGetStaticPropsType } from "next";
import Page from "../layouts/Page";
import { allPosts, Post } from "../.contentlayer/generated";
import { format, parseISO } from "date-fns";
import PostCard from "../components/ui/PostCard";
import { motion } from "framer-motion";
import { useState } from "react";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <Page
      title="Blog | Mohamed Achaq"
      description="Mohamed Achaq is a software engineer, designer, and artist based in Morocco. He specializes in designing and building full-stack web applications ."
      image="https://achaq.codes/static/images/achaq-codes-blog.png"
    >
      <section className="px-6 w-full md:px-24 flex justify-center items-center gap-10 md:gap-16 flex-col pt-36 md:pt-40">
        <div className="w-full gap-4 flex flex-row justify-start items-center">
          <div className="flex flex-col justify-center items-start gap-1">
            <h1 className="text-xl md:text-2xl font-bold">Blog</h1>
            <h2 className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400">
              My thoughts on the web
            </h2>
          </div>
        </div>
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          className=" w-full rounded-2xl bg-zinc-50 px-11 py-8 text-lg font-medium text-black placeholder-zinc-500 ring-offset-4 transition duration-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-zinc-500 hover:ring-2 hover:ring-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500  disabled:text-zinc-400  disabled:ring-0 group-hover:ring-2 group-hover:ring-zinc-500 group-focus:ring-2 group-focus:ring-zinc-800  dark:bg-zinc-900 dark:text-white ring-zinc-500 dark:ring-offset-black  dark:disabled:text-zinc-500"
          placeholder="Search"
        />
        <motion.div className="my-4 w-full gap-4 grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3">
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
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = allPosts
    .map((p) => ({
      ...p,
      date: format(parseISO(p.date), "MMMM dd, yyyy"),
      readTime: p.readTime.text as any,
    }))
    .sort((a, b) => {
      return Number(new Date(b.date)) - Number(new Date(a.date));
    });
  return {
    props: {
      posts,
    },
  };
}
