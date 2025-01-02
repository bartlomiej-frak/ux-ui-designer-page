import { IPortfolioFields } from "@/@types/generated/contentful";
import client from "./contentful";
import { Entry, EntrySkeletonType } from "contentful";

interface IPortfolioSkeleton extends EntrySkeletonType {
  fields: IPortfolioFields;
  contentTypeId: "portfolio";
}

const parseContentfulPortfolioPage = (entry: Entry<IPortfolioSkeleton, undefined, string>): IPortfolioFields => {
  return {
    title: entry.fields.title,
    slug: entry.fields.slug,
    tags: entry.fields.tags,
  };
};

export async function fetchPortfolioPages(): Promise<IPortfolioFields[]> {
  const portfolioPages = await client.getEntries<IPortfolioSkeleton>({ content_type: "portfolio" });

  //TODO: provide some error handling

  return portfolioPages.items.map((item) => parseContentfulPortfolioPage(item));
}
