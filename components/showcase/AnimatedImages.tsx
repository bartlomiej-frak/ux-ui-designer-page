"use client";

import { useImageAnimation } from "@/hooks/image-animation.hook";
import Image from "next/image";

const DEFAULT_OFFSET = 20;

export const AnimatedImages = ({
  firstImageUrl,
  secondImageUl,
}: {
  firstImageUrl: string;
  secondImageUl?: string;
}) => {
  const { isShiftModeEnabled, scrollY, ANIMATION_DURATION } =
    useImageAnimation();

  return (
    <>
      <div
        style={{
          top: isShiftModeEnabled
            ? `${-scrollY - DEFAULT_OFFSET}px`
            : `-${DEFAULT_OFFSET}px`,
          animationDuration: `${ANIMATION_DURATION}s`,
        }}
        className="absolute left-0 top-0 h-[100%] w-full animate-moveDown xs:h-[110%] md:left-[10%]
          md:w-[80%] lg:left-0 lg:w-full"
      >
        <Image src={firstImageUrl} alt="phone-image" fill />
      </div>
      {secondImageUl && (
        <div
          style={{
            top: isShiftModeEnabled
              ? `${scrollY + DEFAULT_OFFSET}px`
              : `${DEFAULT_OFFSET}px`,
            animationDuration: `${ANIMATION_DURATION}s`,
          }}
          className="absolute right-0 top-0 h-[100%] w-full animate-moveUp xs:h-[110%] md:right-[10%]
            md:w-[80%] lg:right-0 lg:w-full"
        >
          <Image src={secondImageUl} alt="phone-image" fill />
        </div>
      )}
    </>
  );
};
