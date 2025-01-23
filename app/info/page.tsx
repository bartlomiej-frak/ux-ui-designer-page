import { Competence } from "@/components/info/Competence";
import { Header } from "@/components/info/Header";
import { IInfoPageFields } from "@/lib/@types/generated/contentful";
import { fetchContent } from "@/lib/contentful";
import { notFound } from "next/navigation";

export default async function InfoPage() {
  const content = await fetchContent<IInfoPageFields>("infoPage");
  const infoPage = content[0];

  if (!infoPage) {
    notFound();
  }

  return (
    //TODO: use main and section htmls elements
    <main>
      <Header page={infoPage} />
      <Competence />
    </main>
  );
}
