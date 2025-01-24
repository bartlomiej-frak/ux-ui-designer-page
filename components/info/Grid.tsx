import { IInfoPageFields } from "@/lib/@types/generated/contentful";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Certifications } from "./Certifications";
import { Tools } from "./Tools";

const SectionWithTile = ({
  title,
  content,
}: {
  title: string;
  content: JSX.Element;
}) => {
  return (
    <section>
      <h2 className="border-b-[1px] pb-5 text-[30px] font-bold text-white">
        {title}
      </h2>
      {content}
    </section>
  );
};

export const Grid = ({ items }: { items: IInfoPageFields["competence"] }) => {
  return (
    <div className="mt-36 hidden lg:grid">
      <SectionWithTile
        title="Experience"
        content={<Experience fields={items.experience} />}
      />
      <div className="grid grid-cols-2 gap-5">
        <SectionWithTile
          title="Skills"
          content={<Skills fields={items.skills} />}
        />
        <SectionWithTile
          title="Education"
          content={<Education fields={items.education} />}
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <SectionWithTile
          title="Certifications"
          content={<Certifications fields={items.certifications} />}
        />
        <SectionWithTile
          title="Tools"
          content={<Tools fields={items.tools} />}
        />
      </div>
    </div>
  );
};
