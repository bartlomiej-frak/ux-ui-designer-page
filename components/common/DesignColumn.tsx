export const DesignProcessColumn = ({
  slideId,
  title,
  description,
}: {
  slideId?: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center px-2 text-white">
      <div
        className="flex h-[200px] w-[200px] items-center justify-center rounded-full border-[1px]
          xs:h-[280px] xs:w-[280px] sm:h-[400px] sm:w-[400px] md:h-[250px] md:w-[250px]
          lg:h-[310px] lg:w-[310px]"
      >
        <span className="text-[25px]">{title}</span>
      </div>
      <div className="mt-10 flex h-[0.5px] w-full flex-row justify-between bg-white md:hidden">
        <span
          style={{ opacity: Number(slideId === "1") }}
          className="h-[2.5px] flex-1 -translate-y-[1px] bg-white"
        />
        <span
          style={{ opacity: Number(slideId === "2") }}
          className="h-[2.5px] flex-1 -translate-y-[1px] bg-white"
        />
        <span
          style={{ opacity: Number(slideId === "3") }}
          className="h-[2.5px] flex-1 -translate-y-[1px] bg-white"
        />
      </div>
      <p className="mt-10 text-left text-[18px] sm:mt-16">{description}</p>
    </div>
  );
};
