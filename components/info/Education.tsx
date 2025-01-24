import { EducationProps } from "./info-types";

export const Education = ({ fields }: { fields: EducationProps[] }) => {
  return (
    <section>
      {fields.map((field) => (
        <div key={field.id} className="my-10 text-white">
          <h2 className="text-[20px]">{field.title}</h2>
          <p className="my-2 text-[14px] text-foreground">{field.period}</p>
          <p className="text-[14px] text-foreground">{field.description}</p>
        </div>
      ))}
    </section>
  );
};
