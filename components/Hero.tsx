import { IHeroFields } from "@/lib/@types/generated/contentful";
import { fetchContent } from "@/lib/contentful";
import Image from "next/image";
import RichText from "./RichText";

export const Hero = async () => {
  const hero = await fetchContent<IHeroFields>("hero");

  const heroBig = hero.filter(({ title }) => title === "hero-big")[0].heroText;
  const heroSmall = hero.filter(({ title }) => title === "hero-small")[0]
    .heroText;

  return (
    <div className="mt-5 grid w-full grid-cols-[1fr,1fr,215px]">
      <Image
        src="/assets/logo-desktop.svg"
        alt="page-logo"
        width={150}
        height={150}
      />
      <div className="col-start-3 col-end-4 flex items-center align-middle">
        <h2 className="text-center text-2xl text-gray-secondary">
          Creative UI/UX & Graphic Designer
        </h2>
      </div>
      <div
        className="col-start-1 col-end-4 pt-[40px] text-[36px] leading-[40px] tracking-tight
          sm:text-justify md:indent-[450px] md:text-[40px] md:leading-[50px]
          lg:text-[57px] lg:leading-[60px]"
      >
        <RichText document={heroBig} />
      </div>
      <div className="text-gray-tertiary col-start-3 col-end-4 pt-[100px] text-[14px]">
        <RichText document={heroSmall} />
      </div>
    </div>
  );
};
