import { Accordion } from "@/components/info/Accordion";
import { Grid } from "@/components/info/Grid";
import { Header } from "@/components/info/Header";
import { IInfoPageFields } from "@/lib/@types/generated/contentful";
import { fetchContent } from "@/lib/contentful";
import { notFound } from "next/navigation";

export default async function InfoPage() {
  const content = await fetchContent<IInfoPageFields>("infoPage");
  const page = content[0];

  if (!page) {
    notFound();
  }

  return (
    //TODO: use main and section htmls elements
    <main>
      <Header page={page} />
      <section className="mt-10">
        <Accordion items={page.competence} />
        <Grid items={page.competence} />
      </section>
    </main>
  );
}
