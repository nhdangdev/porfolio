"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { WorkIcon } from "../components/WorkIcon";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { srr: false }
);

const ExperienceCard = ({ experience }) => {
  return (
    <>
      <div className="tw-bg-[#1d1836] tw-text-white">
        <VerticalTimelineElement
          className="tw-border-r-4 tw-border-indigo-500"
          date={experience.date}
        >
          {experience.date}
        </VerticalTimelineElement>
      </div>
    </>
  );
};

export default ExperienceCard;
