import { IShowcasePageFields } from "@/lib/@types/generated/contentful";
import { TextBox } from "../common/TextBox";
import Image from "next/image";

export const Result = ({ page }: { page: IShowcasePageFields }) => {
  return (
    <section className="mt-10">
      <TextBox color="white" text="Result" />
      <p className="mt-10">{page.result}</p>
      <div
        className="relative left-0 top-0 mt-10 h-[1000px] w-full xs:h-[1700px] sm:h-[2500px]
          md:h-[3500px] lg:h-[4000px]"
      >
        <Image src={page.mainImage} alt={"big-image-of-project"} fill />
      </div>
    </section>
  );
};
