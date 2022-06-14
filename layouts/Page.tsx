import { Fragment, ReactNode, useState } from "react";
import { MenuContext } from "../lib/hooks/useMenu";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import Menu from "../components/ui/Menu";
import Head from "next/head";
import { useRouter } from "next/router";

type PageProps = {
  children: ReactNode;
  title: string;
  description: string;
  image?: string;
  date?: string;
};

const Page = ({ children, title, description, image, date }: PageProps) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta
          property="og:url"
          content={`https://achaq.codes${router.asPath}`}
        />
        <link rel="canonical" href={`https://achaq.codes${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mohamed Achaq" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ac__haq" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {date && <meta property="article:published_time" content={date} />}
      </Head>
      <MenuContext.Provider value={{ open, setOpen }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Menu />
      </MenuContext.Provider>
    </Fragment>
  );
};
export default Page;
