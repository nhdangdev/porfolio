"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100",
  },
  {
    metric: "Awards",
    value: "8",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection = () => {
  return (
    <div className="tw-py-8 tw-px-4 xl:tw-gap-16 sm:tw-py-16 xl:tw-px-16">
      <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-between sm:tw-border-[#33353F] sm:tw-border tw-rounded-md tw-py-8 tw-px-16">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="tw-flex tw-flex-col tw-items-center tw-mx-4 tw-my-4 sm:tw-my-0"
            >
              <h2 className="tw-flex tw-flex-row tw-text-white tw-text-4xl tw-font-bold">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  className="tw-text-white tw-text-4xl tw-font-bold"
                  locale="en-US"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="tw-text-[#ADB7BE] tw-text-base">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
