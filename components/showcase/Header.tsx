import Link from "next/link";
import { PiLinkSimple } from "react-icons/pi";
import { IShowcasePageFields } from "@/lib/@types/generated/contentful";
import { TagBox } from "../common/TagBox";

export const Header = ({ page }: { page: IShowcasePageFields }) => {
  return (
    <div className="flex flex-col justify-between sm:flex-row">
      <div className="flex flex-col">
        <h1 className="text-[58px] text-white">{page.projectName}</h1>
        <Link href={page.link}>
          <div className="flex flex-row items-center gap-2 text-[#626262]">
            <PiLinkSimple className="text-[28px]" />
            <p className="lowercase">{page.projectName}</p>
          </div>
        </Link>
      </div>
      <div
        className="just flex flex-row flex-wrap items-start justify-start gap-1 pt-[20px]
          sm:justify-end"
      >
        {page.tags.map((tag) => (
          <TagBox key={tag} tagName={tag} />
        ))}
      </div>
    </div>
  );
};
