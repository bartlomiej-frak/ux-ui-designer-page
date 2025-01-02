import Image from "next/image";

export const Hero = () => {
  return (
    <div className="mt-5 grid w-[100%] grid-cols-[1fr,1fr,200px] justify-center align-middle">
      <Image
        src="/assets/logo-desktop.svg"
        alt="page-logo"
        width="150"
        height="150"
        priority
      />
      <div className="col-start-3 col-end-4 flex items-center align-middle">
        <h2 className="text-center text-2xl text-gray-secondary">
          Creative UI/UX & Graphic Designer
        </h2>
      </div>
    </div>
  );
};
