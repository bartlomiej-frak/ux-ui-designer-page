import { SkillsProps } from "./info-types";
import Image from "next/image";

export const Skills = ({ fields }: { fields: SkillsProps[] }) => {
  return (
    <section className="my-10 grid grid-cols-2 gap-7 xl:grid-cols-3">
      {fields.map((field) => {
        if (field.title === "other") {
          return (
            <p
              key={field.id}
              className="col-span-2 col-start-1 mt-4 text-white"
            >
              <span className="font-bold capitalize">{`${field.title}: `}</span>
              {field.description}
            </p>
          );
        }
        return (
          <div
            key={field.id}
            className="flex flex-col items-center gap-2 text-white"
          >
            <div className="relative h-[90px] w-[90px] xs:h-[120px] xs:w-[120px] xl:h-[90px] xl:w-[90px]">
              <Image
                src={field.imgPath}
                alt={`${field.title}-skill-image`}
                fill
              />
            </div>
            <h2 className="text-center text-[18px]">{field.title}</h2>
          </div>
        );
      })}
    </section>
  );
};
