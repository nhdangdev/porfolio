"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="tw-list-disc tw-pl-2">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Vue</li>
        <li>NextJs</li>
        <li>TailwindCss</li>
        <li>Ant Design</li>
        <li>BootStrap</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="tw-list-disc tw-pl-2">
        <li>Da Lat University</li>
        <li>F8 Full Stack - Nguyen Ngoc Son</li>
        <li>Easy Front End, Academy - Hau Nguyen</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="tw-list-disc tw-pl-2">
        <li>AWS Cloud Parctitioner</li>
        <li>Google Professional Cloud Developer</li>
        <li>Front End Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="tw-text-white">
      <div className="md:tw-grid md:tw-grid-cols-2 tw-gap-8 tw-items-center tw-py-8 tw-px-4 xl:tw-gap-16 sm:tw-py-16 xl:tw-px-16">
        <Image
          src="/images/about-image.png"
          alt="about image"
          width={500}
          height={500}
        />
        <div className="tw-mt-4 md:tw-mt-0 tw-text-left tw-flex tw-flex-col tw-h-full">
          <h2 className="tw-text-4xl tw-font-bold tw-text-white tw-mb-4">
            About me
          </h2>
          <p className="tw-text-base lg:tw-text-lg">
            I am a front end developer with a passion for creating interactive
            and reponsive web applications. I have experience working with
            HTML5, CSS3, JavaScript, React, Redux, Vue, TailwindCSS, BootStrap,
            PostMan, Git and GitHub. In addition, I have used TyperScipt, PHP,
            Ant design, NextJs, Figma, and AdobeXD. I am a quick learner and I
            am looking to expand my knowledge and skill set. I am excited to
            work with others to create amazing applications to become a Senior
            Developer.
          </p>
          <div className="tw-flex tw-flex-row tw-justify-start tw-mt-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              Skills
            </TabButton>

            <TabButton
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
            >
              Education
            </TabButton>

            {/* <TabButton
              active={tab === "experience"}
              selectTab={() => handleTabChange("experience")}
            >
              Experience
            </TabButton> */}

            <TabButton
              active={tab === "certifications"}
              selectTab={() => handleTabChange("certifications")}
            >
              Certifications
            </TabButton>
          </div>
          <div className="tw-mt-8">
            {TAB_DATA.find((tabs) => tabs.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
