import { IconFilledButton } from "./Buttons";
import { MdMarkEmailRead, MdArticle } from "react-icons/md";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="px-6 w-full md:px-24 flex justify-center items-center gap-4 flex-col pt-36 md:pt-48">
      <div className="w-full gap-4 flex flex-row justify-start items-center">
        <div className="bg-gradient-to-br animate-gradient-xy from-cyan-500 to-purple-500 w-16 h-16 md:w-20 md:h-20 rounded-full" />
        <div className="flex flex-col justify-center items-start gap-1">
          <h1 className="text-lg md:text-2xl font-bold">Mohamed Achaq</h1>
          <h2 className="text-lg md:text-2xl font-semibold text-zinc-600 dark:text-zinc-400">
            Software Developer / Designer
          </h2>
        </div>
      </div>{" "}
      <div className="pt-8 flex flex-col justify-start items-start gap-10">
        <p className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-300">
          I am building web applications with with beautiful user interfaces,
          great user experience and highly optimized backend services. And I
          love to discover and learn new technologies.
        </p>
        <div className="flex justify-start items-center gap-4">
          <Link href="mailto:contact@achaq.codes" passHref>
            <a>
              <IconFilledButton
                icon={<MdMarkEmailRead className="text-3xl" />}
                text="Get in Touch"
              />
            </a>
          </Link>
          <Link href="/resume.pdf" passHref>
            <a>
              <IconFilledButton
                icon={<MdArticle className="text-3xl" />}
                text="Resume"
              />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
