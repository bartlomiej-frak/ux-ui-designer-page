import { Spinner } from "@/components/common/Spinner";

export default function ShowcaseLoadingPage() {
  return (
    <div className="flex-column flex h-[50vh] w-full items-center justify-center">
      <div className="flex flex-row items-center gap-4">
        <Spinner />
        <p className="text-[20px]">Loading content...</p>
      </div>
    </div>
  );
}
