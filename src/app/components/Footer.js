import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYears = new Date().getFullYear();

  return (
    <footer className="tw-footer tw-border tw-border-t-[#33353F] tw-border-l-transparent tw-border-r-transparent">
      <div className="tw-container tw-flex tw-justify-between tw-p-12 tw-text-white">
        <span>
          <Image
            src="/images/logo.png"
            alt="logo image"
            width={128}
            height={94}
          />
        </span>
        <p className="tw-text-slate-700">
          &copy;
          {currentYears} - Dev Melody. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
