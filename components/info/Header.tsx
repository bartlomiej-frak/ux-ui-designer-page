import { IInfoPageFields } from "@/lib/@types/generated/contentful";
import { TagBox } from "../common/TagBox";
import Image from "next/image";

export const Header = ({ page }: { page: IInfoPageFields }) => {
  return (
    <section
      className="mt-5 grid grid-cols-1 md:grid-cols-2 md:grid-rows-[100px_1fr_100px] md:gap-4
        lg:h-[540px] lg:grid-cols-[1fr_400px] lg:gap-[20px_50px]"
    >
      {/* header */}
      <div className="flex flex-row justify-between md:col-span-1 md:col-start-1 md:items-center">
        <h2 className="font-TSR text-[60px] text-white">{page.pageTitle}</h2>
        <div className="xs: flex flex-row flex-wrap items-center justify-end gap-1 align-middle">
          {page.tags.map((tag) => (
            <TagBox key={tag} tagName={tag} />
          ))}
        </div>
      </div>
      {/* image */}
      <div
        className="relative mt-5 flex h-[350px] w-full xs:h-[120vw] md:col-span-1 md:col-start-2
          md:row-span-3 md:row-start-1 md:mt-0 md:h-[60vw] md:w-full lg:h-full"
      >
        <Image src={page.authoPicture} alt={"portfolio-author-picture "} fill />
      </div>
      {/* description */}
      <article className="mt-5 text-white md:text-[12px] lg:text-[14px]">
        {page.description}
      </article>
      {/* address */}
      <address
        className="mt-5 flex w-full flex-col gap-2 not-italic text-white md:justify-end
          md:text-[14px] lg:text-[16px]"
      >
        <div className="flex items-center gap-2">
          <Image
            src="/assets/email-icon.svg"
            alt="email-icon"
            width={20}
            height={20}
          />
          <p>odej.studio@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/phone-icon.svg"
            alt="phone-icon"
            width={20}
            height={20}
          />
          <p>+48 790 503 306</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/link-icon.svg"
            alt="email-icon"
            width={20}
            height={20}
          />
          <p>linktr.ee/justynaodej</p>
        </div>
      </address>
    </section>
  );
};
