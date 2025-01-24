import { Soon } from "@/components/common/Soon";
import { DesignProcess } from "@/components/showcase/DesingProcess";
import { Goals } from "@/components/showcase/Goals";
import { Header } from "@/components/showcase/Header";
import { Result } from "@/components/showcase/Result";
import { IShowcasePageFields } from "@/lib/@types/generated/contentful";
import { fetchContent } from "@/lib/contentful";
import { notFound } from "next/navigation";

interface ShowCasePageParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ShowCasePageParams) {
  if (!params.slug) {
    notFound();
  }

  const projectName = params.slug.replace(/-/g, " ");
  return {
    title: `${projectName} | UI/UX Design Showcase`,
    description: `${projectName} - Explore an in-depth case study showcasing the UI/UX design process, creative decisions, and outcomes. Discover how this project brought user-centric solutions to life.`,
  };
}

export default async function ShowCasePage({ params }: ShowCasePageParams) {
  const { slug } = params;
  const page = await fetchContent<IShowcasePageFields>("showcasePage", {
    "fields.slug": slug,
  });

  if (slug === "soon") {
    return <Soon />;
  }

  const showcaseFields = page[0];

  if (!showcaseFields) {
    notFound();
  }

  return (
    <main className="py-[45px] sm:py-[90px]">
      <Header page={showcaseFields} />
      <Goals page={showcaseFields} />
      <DesignProcess page={showcaseFields} />
      <Result page={showcaseFields} />
    </main>
  );
}
