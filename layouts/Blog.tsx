import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment, ReactNode, useState } from 'react'
import { Post } from '../.contentlayer/generated'
import AuthorCard from '../components/ui/AuthorCard'
import Footer from '../components/ui/Footer'
import Header from '../components/ui/Header'
import Like from '../components/ui/LikeButton'
import Menu from '../components/ui/Menu'
import SupportCard from '../components/ui/SupportCard'
import { MenuContext } from '../lib/hooks/useMenu'

type BlogProps = {
  children: ReactNode
  post: Post
}

const Blog = ({ children, post }: BlogProps) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  return (
    <Fragment>
      <Head>
        <title>{post.title} | Mohamed Achaq</title>
        <meta name="robots" content="follow, index" />
        <meta content={post.description} name="description" />
        <meta property="og:url" content={`https://achaq.dev${router.asPath}`} />
        <link rel="canonical" href={`https://achaq.dev${router.asPath}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Mohamed Achaq" />
        <meta property="og:description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:image" content={`https://achaq.dev${post.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ac__haq" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={`https://achaq.dev${post.image}`} />
        {post.date && (
          <meta property="article:published_time" content={post.date} />
        )}
      </Head>
      <MenuContext.Provider value={{ open, setOpen }}>
        <Header />
        <article className="prose prose-lg mx-auto w-full flex-col gap-4 px-6 pb-24 prose-code:rounded-3xl prose-code:text-zinc-900   prose-pre:rounded-3xl prose-pre:bg-zinc-50 prose-pre:text-lg dark:prose-invert dark:prose-code:text-zinc-100 dark:prose-pre:bg-zinc-900 md:px-24 md:prose-pre:text-xl lg:prose-xl">
          {children}
          <AuthorCard />
          <SupportCard link={post.slug} />
        </article>
        <Like slug={post.slug} />
        <Footer />
        <Menu />
      </MenuContext.Provider>
    </Fragment>
  )
}
export default Blog
