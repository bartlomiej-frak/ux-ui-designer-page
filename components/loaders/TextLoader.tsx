interface TextLoaderProps {
  rows: number;
  rowHight: number;
  width?: number;
  gap?: number;
}

export const TextLoader = ({
  rows,
  rowHight,
  width = 100,
  gap = 5,
}: TextLoaderProps) => {
  return (
    <div
      style={{ width: `${width}%`, gap: `${gap}px` }}
      className="flex h-full flex-col justify-between"
    >
      {Array.from({ length: rows }, (_, index) => (
        <div
          style={{ height: `${rowHight}px` }}
          key={index}
          className="relative w-full overflow-hidden opacity-[50%]"
        >
          <div
            className="absolute inset-0 w-[50%] animate-shimmer bg-gradient-to-r from-transparent
              via-gray-400 to-transparent"
          ></div>
        </div>
      ))}
    </div>
  );
};
