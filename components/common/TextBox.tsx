export const TextBox = ({
  color,
  text,
}: {
  color: "white" | "transparent";
  text: string;
}) => {
  return (
    <div
      style={{ backgroundColor: color, border: "1px solid white" }}
      className="py-[35px]"
    >
      <p
        style={{ color: color === "white" ? "black" : "white" }}
        className="text-center text-[25px]"
      >
        {text}
      </p>
    </div>
  );
};
