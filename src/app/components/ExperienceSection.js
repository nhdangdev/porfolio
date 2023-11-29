import React from "react";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  return (
    <>
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-mt-4 md:tw-mt-0 tw-text-left tw-h-full tw-text-white">
        <p className="tw-text-base lg:tw-text-lg">What I have done</p>
        <h2 className="tw-text-4xl tw-font-bold tw-mb-4">Work Experience</h2>
      </div>
      <div className="tw-flex tw-flex-col tw-mt-20">
        <VerticalTimeLine>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeLine>
      </div>
    </>
  );
};

export default ExperienceSection;
