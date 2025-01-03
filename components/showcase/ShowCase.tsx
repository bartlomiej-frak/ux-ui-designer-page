import { ShowCaseGrid } from "./ShowCaseGrid";
import { fetchContent } from "@/lib/contentful";
import { IShowcaseFields } from "@/lib/@types/generated/contentful";

export const ShowCase = async () => {
  const showcase = await fetchContent<IShowcaseFields>("showcase");

  return (
    <div id="showcase" className="pt-[80px]">
      <h2 className="text-[100px] leading-[100px]">Works</h2>
      <div className="flex flex-row justify-end gap-10 align-middle text-[20px] text-white">
        <button>All</button>
        <button>UI/UX</button>
        <button>Collaborations</button>
        <button>Case Study</button>
        <button>Wireframes</button>
      </div>
      <ShowCaseGrid data={showcase} />
    </div>
  );
};
