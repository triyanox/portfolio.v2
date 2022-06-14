import Link from "next/link";
import { SiTwitter } from "react-icons/si";
import { IconFilledButton } from "./Buttons";

type Props = {
  link: string;
};

const SupportCard = (props: Props) => {
  return (
    <div className="mt-8 flex flex-col md:flex-row items-center font-semibold justify-center gap-8 text-xl rounded-2xl  py-8 px-8  w-full">
      Spread the word !
      <Link
        href={`https://twitter.com/intent/tweet?url=https://achaq.codes/blog/${props.link}`}
        passHref
      >
        <a target="_blank">
          <IconFilledButton
            icon={<SiTwitter className="text-3xl" />}
            text="Share on Twitter"
          />
        </a>
      </Link>
    </div>
  );
};

export default SupportCard;
