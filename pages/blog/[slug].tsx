import { format, parseISO } from "date-fns";
import { allPosts, Post } from "../../.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Imagecomponent from "../../components/ui/Imagecomponent";
import Blog from "../../layouts/Blog";
import { PostHead } from "../../components/ui/PostHead";
import CustomLink from "../../components/ui/CustomLink";
export async function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }: { post: Post }) => {
  const Component = useMDXComponent(post.body.code);

  return (
    <Blog post={post}>
      <PostHead
        slug={post.slug}
        title={post.title}
        date={format(parseISO(post.date), "MMMM dd, yyyy").split(", 2022")[0]}
        readTime={post.readTime}
      />
      <Component
        components={
          {
            a: CustomLink,
            Imagecomponent,
          } as any
        }
      />
    </Blog>
  );
};

export default PostLayout;
