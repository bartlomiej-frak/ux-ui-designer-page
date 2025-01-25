export const GridSkeleton = ({ cells }: { cells: number }) => {
  return (
    <div className="grid grid-cols-1 flex-wrap gap-5 pt-[70px] sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: cells }, (_, index) => (
        <div
          key={index}
          className="relative min-h-[450px] animate-pulse bg-gradient-to-b from-black/0
            to-gray-secondary px-7 sm:min-h-[350px] sm:px-2 md:min-h-[420px] md:px-7
            xl:min-h-[350px]"
        ></div>
      ))}
    </div>
  );
};
