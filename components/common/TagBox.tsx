export const TagBox = ({
  tagName,
  variant = "white",
  paddingY = 6,
}: {
  tagName: string;
  variant?: "white" | "transparent";
  paddingY?: number;
}) => {
  return (
    <div
      style={{
        backgroundColor:
          variant === "white" ? "rgba(255, 255, 255, 0.1)" : "transparent",
        padding: `${paddingY}px 12px`,
      }}
      className="flex flex-row justify-center rounded-full border-[1px] bg-opacity-[10%]
        align-middle text-[12px]"
    >
      {tagName}
    </div>
  );
};
