import { GoArrowUpLeft } from "react-icons/go";
import { NavLink } from "../navigation/NavLink";

export const NotFound = () => {
  return (
    <div className="responsive-padding mt-10 w-full">
      <h1 className="font-TSR text-[50px] text-white sm:text-[100px]">
        Not found
      </h1>
      <p className="mt-5 text-gray-secondary sm:text-[20px]">
        Unfortunately, we could not find the requested page or resource.
      </p>
      <NavLink href="/">
        <div
          className="1s mt-10 flex flex-row items-center gap-2 text-gray-secondary transition ease-in
            hover:text-violet"
        >
          <GoArrowUpLeft className="text-[30px]" />
          <p className="text-[15px]">Back to Home page</p>
        </div>
      </NavLink>
    </div>
  );
};
