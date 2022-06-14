import Link from "next/link";
import { IconFilledButton } from "./Buttons";
import { MdMarkEmailRead } from "react-icons/md";

const CTA = () => {
  return (
    <section className="pt-36 md:pt-48 flex w-full flex-col items-center justify-center gap-y-4 px-6 md:px-16 ">
      <div className="mx-24 flex w-full flex-col  items-center justify-center rounded-xl ">
        <h1 className="mb-8 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Want to work together ?
        </h1>
        <Link href="mailto:contact@achaq.codes" passHref>
          <a>
            <IconFilledButton
              icon={<MdMarkEmailRead className="text-3xl" />}
              text="Get in Touch"
            />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
