import { IShowcasePageFields } from "@/lib/@types/generated/contentful";
import RichText from "../common/RichText";
import { AnimatedImages } from "./AnimatedImages";
import { TextBox } from "../common/TextBox";

export const Goals = ({ page }: { page: IShowcasePageFields }) => {
  return (
    <div
      className="mt-[40px] grid w-full grid-cols-1 grid-rows-[300px_1fr] gap-5
        xs:grid-rows-[550px_1fr] sm:grid-rows-[700px_1fr] md:grid-rows-[800px_1fr]
        lg:grid-cols-2 lg:grid-rows-1"
    >
      <div
        className="col-span-1 col-start-1 mt-[40px] flex flex-col gap-10 xs:mt-[80px] sm:mt-[100px]
          lg:mt-0 lg:gap-20"
      >
        <div>
          <TextBox color="white" text="Challenge" />
          <div className="mt-5 text-white">
            <RichText document={page.challenges} />
          </div>
        </div>
        <div>
          <TextBox color="transparent" text="Goal" />
          <div className="mt-5 text-white">
            <RichText document={page.goal} />
          </div>
        </div>
      </div>
      <div
        className="relative col-span-1 col-start-1 row-span-1 row-start-1 w-full lg:col-span-1
          lg:col-start-2"
      >
        <AnimatedImages
          firstImageUrl={page.firstImage}
          secondImageUl={page.secondImage}
        />
      </div>
    </div>
  );
};
