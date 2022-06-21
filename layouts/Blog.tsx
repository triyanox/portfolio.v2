import { Fragment, ReactNode, useState } from "react";
import { MenuContext } from "../lib/hooks/useMenu";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import Menu from "../components/ui/Menu";
import AuthorCard from "../components/ui/AuthorCard";
import SupportCard from "../components/ui/SupportCard";
import { Post } from "../.contentlayer/generated";
import Like from "../components/ui/LikeButton";
import Head from "next/head";
import { useRouter } from "next/router";

type BlogProps = {
  children: ReactNode;
  post: Post;
};

const Blog = ({ children, post }: BlogProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>{post.title} | Mohamed Achaq</title>
        <meta name="robots" content="follow, index" />
        <meta content={post.description} name="description" />
        <meta
          property="og:url"
          content={`https://achaq.codes${router.asPath}`}
        />
        <link rel="canonical" href={`https://achaq.codes${router.asPath}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Mohamed Achaq" />
        <meta property="og:description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:image"
          content={`https://achaq.codes${post.image}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ac__haq" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta
          name="twitter:image"
          content={`https://achaq.codes${post.image}`}
        />
        {post.date && (
          <meta property="article:published_time" content={post.date} />
        )}
      </Head>
      <MenuContext.Provider value={{ open, setOpen }}>
        <Header />
        <article className="prose-xl prose mx-auto px-6 w-full md:px-24 pb-24 gap-4 flex-col prose-code:rounded-2xl prose-code:text-zinc-900 prose-pre:rounded-2xl   prose-pre:bg-zinc-50 dark:prose-invert dark:prose-code:text-zinc-100  dark:prose-pre:bg-zinc-900 prose-pre:text-lg md:prose-pre:text-xl  lg:prose-2xl">
          {children}
          <AuthorCard />
          <SupportCard link={post.slug} />
        </article>
        <Like slug={post.slug} />
        <Footer />
        <Menu />
      </MenuContext.Provider>
    </Fragment>
  );
};
export default Blog;
