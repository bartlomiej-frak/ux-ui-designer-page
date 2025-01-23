import { IInfoPageFields } from "@/lib/@types/generated/contentful";
import { TagBox } from "../common/TagBox";
import Image from "next/image";

export const Header = ({ page }: { page: IInfoPageFields }) => {
  console.log(
    page.competence.filter((section) => section.fields.label === "Education")[0]
      .fields,
  );
  return (
    <section className="mt-5">
      <div className="flex flex-row justify-between">
        <h2 className="font-TSR text-[60px] text-white">{page.pageTitle}</h2>
        <div className="flex flex-row flex-wrap items-center justify-end align-middle">
          {page.tags.map((tag) => (
            <TagBox tagName={tag} />
          ))}
        </div>
      </div>
      <div className="relative mt-5 h-[350px] w-full">
        <Image src={page.authoPicture} alt={"portfolio-author-picture "} fill />
      </div>
      <article className="mt-5 text-white">{page.description}</article>
      <address className="mt-5 flex w-full flex-col gap-2 not-italic text-white">
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
