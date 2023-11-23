"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [startTransition, isPending] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }

  return (
    <section className="tw-text-white">
      <div className="md:tw-grid md:tw-grid-cols-2 tw-gap-8 tw-items-center tw-py-8 tw-px-4 xl:tw-gap-16 sm:tw-py-16 xl:tw-px-16">
        <Image src='/images/about-image.png' alt='about image' width={500} height={500} />
        <div>
          <h2 className="tw-text-4xl tw-font-bold tw-text-white tw-mb-4">About me</h2>
          <p className="tw-text-base lg:tw-text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea iure officiis, harum similique culpa inventore. Assumenda soluta illo placeat maiores? Error voluptatum dolorem, unde quasi quidem deleniti aperiam architecto enim!
          </p>
          <div className="tw-flex tw-flex-row tw-mt-8">
            <span className="tw-mr-3 tw-font-semibold tw-text-[#ADB7BE] hover:tw-text-white tw-cursor-pointer tw-border-b tw-border-purple-500">Skills</span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
