import { createClient, EntrySkeletonType, FieldsType } from "contentful";

type ContentType = "showcase" | "hero";

interface ContentSkeleton<T extends FieldsType> extends EntrySkeletonType {
  fields: T;
  contentTypeId: ContentType;
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function fetchContent<T extends FieldsType>(
  content_type: ContentType,
): Promise<T[]> {
  const content = await client.getEntries<ContentSkeleton<T>>({
    content_type,
  });

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return content.items.map((item) => item.fields) as T[];
}
