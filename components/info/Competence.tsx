import { Accordion } from "../common/Accordion";

const MOCK_DATA = [
  {
    id: "1",
    label: "Experience",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum laborum iure, inventore corrupti eligendi in nemo autem. Commodi esse cum, neque eveniet quisquam temporibus quidem repudiandae excepturi eum provident quos.",
  },
  {
    id: "2",
    label: "Education",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum laborum iure, inventore corrupti eligendi in nemo autem. Commodi esse cum, neque eveniet quisquam temporibus quidem repudiandae excepturi eum provident quos.",
  },
  {
    id: "3",
    label: "Certifications",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum laborum iure, inventore corrupti eligendi in nemo autem. Commodi esse cum, neque eveniet quisquam temporibus quidem repudiandae excepturi eum provident quos.",
  },
];

export const Competence = () => {
  return (
    <section className="mt-10">
      <Accordion items={MOCK_DATA} />
    </section>
  );
};
