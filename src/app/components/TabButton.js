import React from "react";

const TabButton = ({ active, setTab, children }) => {
  const buttonClass = active
    ? "tw-text-white tw-border-b tw-border-purple-500 "
    : "tw-text-[#ADB7BE]";

  return (
    <button onClick={setTab}>
      <p
        className={`tw-mr-3 tw-font-semibold tw-text-[#ADB7BE] hover:tw-text-white ${buttonClass}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
