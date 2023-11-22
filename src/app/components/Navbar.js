import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-mx-auto tw-p-8">
        <Link href={'/'} className="tw-text-5xl tw-text-white tw-font-semibold">LOGO</Link>
        <div className="menu"></div>
      </div>
    </nav>
  );
};

export default Navbar;
