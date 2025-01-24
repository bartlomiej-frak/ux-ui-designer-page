import { TagBox } from "../common/TagBox";
import { ToolsProps } from "./info-types";

export const Tools = ({ fields }: { fields: ToolsProps[] }) => {
  return (
    <section className="mt-7 flex flex-row flex-wrap gap-2">
      {fields.map((field) => (
        <TagBox
          key={field.id}
          tagName={field.name}
          paddingY={10}
          variant="transparent"
        />
      ))}
    </section>
  );
};
