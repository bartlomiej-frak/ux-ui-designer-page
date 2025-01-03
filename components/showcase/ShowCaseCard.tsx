import { IShowcaseFields } from "@/lib/@types/generated/contentful";
import Image from "next/image";
import Link from "next/link";

const ShowCaseTag = ({ tagName }: { tagName: string }) => {
  return (
    <div
      className="flex flex-row justify-center rounded-full border-[1px] bg-white bg-opacity-[10%]
        px-[12px] py-[6px] align-middle text-[12px]"
    >
      {tagName}
    </div>
  );
};

export const ShowCaseCard = ({
  showcaseItem,
}: {
  showcaseItem: IShowcaseFields;
}) => {
  const { title, imagePath, slug, tags } = showcaseItem;
  return (
    <Link href={`/showcase/${slug}`}>
      <div
        className="group relative border-[0] bg-gradient-to-b from-black/0 to-black px-7 transition
          duration-100 ease-linear hover:border-[1px] hover:border-light_violet
          lg:min-h-[400px]"
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
              <ShowCaseTag key={tag} tagName={tag} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
