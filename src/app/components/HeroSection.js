"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:tw-py-16">
      <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="tw-col-span-8 tw-place-self-center tw-text-center sm:tw-text-left tw-justify-self-start"
        >
          <h1 className="tw-text-white tw-mb-4 tw-text-4xl sm:tw-text-5xl lg:tw-text-8xl lg:tw-leading-normal tw-font-extrabold">
            <span className="tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-r tw-from-primary-400 tw-to-secondary-600">
              Hello, I'm
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Nhut Dang",
                1000,
                "Front End Developer",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="tw-text-[#ADB7BE] tw-text-base sm:tw-text-lg tw-mb-6 lg:tw-text-xl">
            Graduated with a major in Software Engineering at Da Lat University.
            With a solid understanding of the fundamentals of HTML5, CSS3, SCSS,
            and JavaScript. I have also practiced frameworks like ReactJs. I
            also have knowledge about new technologies like CSS Grid,Flexbox,
            CSS Animations, latest web standards. In addition, I have used
            Typerscipt,NextJs,TailwindCSS, PHP, Ant design, Figma, AdobeXD and
            Bootstrap.
            <br />I am willing to learn and work hard to contribute to the
            development of the Company to become a Senior Developer.
            <br />
            For more information about my experience and skills, you can see my
            attached CV.
            <br />
            If you have any questions about my CV or would like more
            information, please contact me at this email address or by phone:
            0362 929 191
          </p>
          <div>
            <button className="tw-w-full sm:tw-w-fit tw-px-6 tw-py-3 tw-rounded-full tw-mr-4 tw-bg-gradient-to-br tw-from-blue-500 tw-via-primary-500 tw-to-secondary-500 hover:tw-bg-slate-200 tw-text-white hover:tw-via-primary-400 hover:tw-to-secondary-400">
              Hire Me
            </button>
            <button className="tw-w-full sm:tw-w-fit tw-px-1 tw-py-1 tw-rounded-full tw-bg-gradient-to-br tw-from-blue-500 tw-via-primary-500 tw-to-secondary-500 hover:tw-bg-slate-800 tw-text-white tw-mt-3">
              <a
                className="tw-block tw-bg-[#121212] hover:tw-bg-slate-800 tw-rounded-full tw-px-5 tw-py-2"
                href="./CV/CV_FRONTEND_ENG.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ initial: 0, scale: 0.5 }}
          animate={{ animate: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="tw-col-span-4 tw-place-self-center tw-mt-4 lg:tw-mt-0"
        >
          <div className="tw-relative tw-rounded-full tw-bg-[#181818] tw-w-[250px] tw-h-[250px] lg:tw-w-[400px] lg:tw-h-[400px] ">
            <Image
              src="/images/hero-image-boy.jpg"
              alt="hero-image"
              className="tw-absolute tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 tw-top-1/2 tw-left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
