"use client";

import { ReactNode, useEffect, useState } from "react";
import { BLOCKS, MARKS, Node } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

interface RichTextProps {
  document: Document;
}

const RegularText = ({ children }: { children: ReactNode }) => (
  <p>{children}</p>
);

const ListItem = ({ children }: { children: ReactNode }) => <li>{children}</li>;

const List = ({ children }: { children: ReactNode }) => (
  <ul className="mt-5 list-inside list-disc">{children}</ul>
);

const ItalicText = ({ children }: { children: ReactNode }) => (
  <span className="font-TSR text-[42px] italic md:text-[42px] lg:text-[65px]">
    {children}
  </span>
);

const HighlightedText = ({ children }: { children: ReactNode }) => (
  <span className="font-TSR text-violet">{children}</span>
);

const options = {
  renderMark: {
    [MARKS.ITALIC]: (text: ReactNode) => <ItalicText>{text}</ItalicText>,
    [MARKS.BOLD]: (text: ReactNode) => (
      <HighlightedText>{text}</HighlightedText>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: Node, children: ReactNode) => {
      if (BLOCKS.LIST_ITEM) {
        return <>{children}</>;
      }
      <RegularText>{children}</RegularText>;
    },
    [BLOCKS.UL_LIST]: (_: Node, children: ReactNode) => <List>{children}</List>,
    [BLOCKS.LIST_ITEM]: (_: Node, children: ReactNode) => (
      <ListItem>{children}</ListItem>
    ),
  },
};

const RichText: React.FC<RichTextProps> = ({ document }) => {
  const [content, setContent] = useState<ReactNode | null>(null);

  useEffect(() => {
    if (document) {
      setContent(documentToReactComponents(document, options));
    }
  }, [document]);

  return <>{content}</>;
};

export default RichText;
