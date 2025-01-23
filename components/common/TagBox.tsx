export const TagBox = ({ tagName }: { tagName: string }) => {
  return (
    <div
      className="flex flex-row justify-center rounded-full border-[1px] bg-white bg-opacity-[10%]
        px-[12px] py-[6px] align-middle text-[12px]"
    >
      {tagName}
    </div>
  );
};
