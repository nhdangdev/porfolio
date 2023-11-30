import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" }
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "tw-text-white" : "tw-text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p
        className={`tw-mr-3 tw-font-semibold hover:tw-text-white ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="tw-h-1 tw-bg-primary-500 tw-mt-2 tw-mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;   
