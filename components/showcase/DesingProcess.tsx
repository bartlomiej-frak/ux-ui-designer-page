import { IShowcasePageFields } from "@/lib/@types/generated/contentful";
import { DesignProcessColumn } from "../common/DesignColumn";
import { DesignSlider } from "./DesingSlider";

export const DesignProcess = ({ page }: { page: IShowcasePageFields }) => {
  return (
    <section className="mt-10 sm:mt-32">
      <div className="flex flex-col gap-5 sm:gap-7">
        <h2 className="sm: text-[38px] leading-10 text-white sm:text-[48px] sm:leading-normal">
          My Desing Process
        </h2>
        <p
          className="w-full self-end text-left text-[20px] leading-7 text-white sm:w-[500px]
            sm:text-[25px]"
        >
          Understanding, the needs of the project, making a plan, creating a
          design
        </p>
      </div>
      <div className="mt-10 hidden grid-cols-3 gap-7 md:grid">
        <DesignProcessColumn title="Discover" description={page.discover} />
        <DesignProcessColumn title="Define" description={page.define} />
        <DesignProcessColumn title="Develop" description={page.develop} />
      </div>
      <DesignSlider page={page} />
    </section>
  );
};
