import { ExperienceProps } from "./info-types";

export const Experience = ({ fields }: { fields: ExperienceProps[] }) => {
  return (
    <section className="flex flex-col items-start gap-10 py-10">
      {fields.map((field) => (
        <div
          key={field.id}
          className="text-white lg:grid lg:grid-cols-2 lg:gap-5"
        >
          <div>
            <h2 className="text-[20px]">{field.title}</h2>
            <p className="my-7 text-[14px] lg:my-4">{field.period}</p>
          </div>
          <p className="text-[14px] lg:text-[18px]">{field.description}</p>
        </div>
      ))}
    </section>
  );
};
