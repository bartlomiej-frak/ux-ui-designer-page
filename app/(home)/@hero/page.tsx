import { TextLoader } from "@/components/loaders/TextLoader";
import RichText from "@/components/common/RichText";
import { IHeroFields } from "@/lib/@types/generated/contentful";
import { fetchContent } from "@/lib/contentful";
import Image from "next/image";
import { Suspense } from "react";

async function HeroTextBig() {
  const hero = await fetchContent<IHeroFields>("hero");
  const heroBig = hero.filter(({ title }) => title === "hero-big")[0].heroText;

  return <RichText document={heroBig} />;
}

async function HeroTextSmall() {
  const hero = await fetchContent<IHeroFields>("hero");
  const heroSmall = hero.filter(({ title }) => title === "hero-small")[0]
    .heroText;

  return <RichText document={heroSmall} />;
}

//TODO: provide static data if something fail
export const Hero = async () => {
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
        <Suspense
          fallback={<TextLoader rows={3} rowHight={40} width={100} gap={10} />}
        >
          <HeroTextBig />
        </Suspense>
      </div>
      <div className="col-start-3 col-end-4 pt-[100px] text-[14px] text-gray-tertiary">
        <Suspense fallback={<TextLoader rows={5} rowHight={15} width={100} />}>
          <HeroTextSmall />
        </Suspense>
      </div>
    </div>
  );
};

export default Hero;
