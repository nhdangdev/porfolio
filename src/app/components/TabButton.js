import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active
    ? "tw-text-white tw-border-b tw-border-primary-500 "
    : "tw-text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p
        className={`tw-mr-3 tw-font-semibold tw-text-[#ADB7BE] hover:tw-text-white ${buttonClass}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
