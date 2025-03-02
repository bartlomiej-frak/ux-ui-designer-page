import { IShowcaseFields } from "@/lib/@types/generated/contentful";
import Image from "next/image";
import Link from "next/link";
import { TagBox } from "../common/TagBox";

export const Card = ({ showcaseItem }: { showcaseItem: IShowcaseFields }) => {
  const { title, imagePath, slug, tags } = showcaseItem;
  return (
    <Link href={`/showcase/${slug}`}>
      <div
        className="group relative min-h-[450px] border-[0] border-transparent bg-gradient-to-b
          from-black/0 to-black px-7 transition duration-100 ease-linear
          hover:border-[1px] hover:border-light_violet sm:min-h-[350px] sm:px-2
          md:min-h-[420px] md:px-7 xl:min-h-[350px]"
      >
        <Image
          className="-z-10"
          src={imagePath}
          alt="showcase-card-image"
          fill
        />
        <div className="absolute bottom-10 flex flex-col gap-2">
          <h2 className="text-[30px] transition duration-100 ease-linear group-hover:text-light_violet">
            {title}
          </h2>
          <div className="flex flex-row gap-1">
            {tags.map((tag) => (
              <TagBox key={tag} tagName={tag} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
