"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { DesignProcessColumn } from "../common/DesignColumn";
import { IShowcasePageFields } from "@/lib/@types/generated/contentful";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const DesignSlider = ({ page }: { page: IShowcasePageFields }) => {
  return (
    <div className="mt-10 flex w-full flex-row justify-center md:hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={50}
        followFinger={true}
        speed={500}
        allowTouchMove={true}
        autoplay={{
          disableOnInteraction: false,
          delay: 5000,
        }}
      >
        <SwiperSlide>
          <DesignProcessColumn
            slideId="1"
            title="Discover"
            description={page.discover}
          />
        </SwiperSlide>
        <SwiperSlide>
          <DesignProcessColumn
            slideId="2"
            title="Define"
            description={page.define}
          />
        </SwiperSlide>
        <SwiperSlide>
          <DesignProcessColumn
            slideId="3"
            title="Develop"
            description={page.develop}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
