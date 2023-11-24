import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "tw-text-white tw-border-purple-500 "
    : "tw-text-[#ADB7BE] tw-border-slate-600 hover:tw-border-white";

  return (
    <button
      className={`${buttonStyles} tw-rounded-full tw-border-2 tw-px-6 tw-py-3 tw-text-xl tw-cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
