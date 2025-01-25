import { createClient, EntrySkeletonType, FieldsType } from "contentful";
import { CONTENT_TYPE } from "./@types/generated/contentful";

interface ContentSkeleton<T extends FieldsType> extends EntrySkeletonType {
  fields: T;
  contentTypeId: CONTENT_TYPE;
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function fetchContent<T extends FieldsType>(
  content_type: CONTENT_TYPE,
  query?: Record<string, string | number>,
): Promise<T[]> {
  const content = await client.getEntries<ContentSkeleton<T>>({
    content_type,
    ...query,
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return content.items.map((item) => item.fields) as T[];
}
