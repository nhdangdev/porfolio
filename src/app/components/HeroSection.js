"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-12">
        <div className="tw-col-span-7 tw-place-self-center tw-text-center sm:tw-text-left">
          <h1 className="tw-text-white tw-mb-4 tw-text-4xl sm:tw-text-5xl lg:tw-text-6xl tw-font-extrabold">
            <span className="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-purple-400 tw-to-pink-600">
              Hello, I'm
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Nhut Dang',
                1000,
                'Front End Developer',
                1000,
                'Web Developer',
                1000,
                'Mobile Developer',
                1000,
                'UI/UX Designer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="tw-text-[#ADB7BE] tw-text-base sm:tw-text-lg tw-mb-6 lg:tw-text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            animi labore tempore tempora rem earum quidem repellendus quis quia,
            molestias amet cum aut! Quos, quis ut. Laudantium facilis fugiat
            perferendis.
          </p>
          <div>
            <button className="tw-w-full sm:tw-w-fit tw-px-6 tw-py-3 tw-rounded-full tw-mr-4 tw-bg-gradient-to-br tw-from-blue-500 tw-via-purple-500 tw-to-pink-500 hover:tw-bg-slate-200 tw-text-white">
              Hire Me
            </button>
            <button className="tw-w-full sm:tw-w-fit tw-px-1 tw-py-1 tw-rounded-full tw-bg-gradient-to-br tw-from-blue-500 tw-via-purple-500 tw-to-pink-500 hover:tw-bg-slate-800 tw-text-white tw-mt-3">
              <span className="tw-block tw-bg-[#121212] hover:tw-bg-slate-800 tw-rounded-full tw-px-5 tw-py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="tw-col-span-5 tw-place-self-center tw-mt-4 lg:tw-mt-0">
          <div className="tw-relative tw-rounded-full tw-bg-[#181818] tw-w-[250px] tw-h-[250px] lg:tw-w-[400px] lg:tw-h-[400px] ">
            <Image
              src="/images/hero-image-boy.jpg"
              alt="hero-image"
              className="tw-absolute tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 tw-top-1/2 tw-left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
