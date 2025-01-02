import { NavLink } from "../NavLink";

export const DesktopMenu = () => {
  return (
    <ul className="hidden flex-row items-center justify-between space-x-14 md:flex">
      <li>
        <NavLink href={"/"}>WORK</NavLink>
      </li>
      <li>
        <NavLink href={"/info"}>INFO</NavLink>
      </li>
    </ul>
  );
};
