"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverPlay from "./MenuOverPlay";
// import { Bar3Icon, XmarkIcon } from "@heroicons/react/24/solid";

// import Image
import Logo from "../../../public/images/logo.png";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [NavBarOpen, SetNavBarOpen] = useState(false);

  return (
    <nav className="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-10 tw-bg-[#121212] tw-bg-opacity-10 0">
      <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-mx-auto tw-px-4 tw-py-2">
        <Link
          href={"/"}
          className="tw-relative tw-text-2xl md:tw-text-5xl tw-text-white tw-font-semibold"
        >
          <Image src={Logo} alt="logo-images" className=" tw-max-w-[100px]" />
        </Link>
        <div className="mobile-menu tw-block md:tw-hidden">
          {!NavBarOpen ? (
            <button
              className="tw-flex tw-items-center tw-px-3 tw-py-2 tw-border tw-rounded tw-border-slate-200  tw-text-slate-200 hover:tw-text-white hover:tw-border-white"
              onClick={() => {
                SetNavBarOpen(true);
              }}
            >
              {/* <Bar3Icon classNam="tw-h-5 tw-w-5" /> */}
            </button>
          ) : (
            <button
              className="tw-flex tw-items-center tw-px-3 tw-py-2 tw-border tw-rounded tw-border-slate-200  tw-text-slate-200 hover:tw-text-white hover:tw-border-white"
              onClick={() => {
                SetNavBarOpen(false);
              }}
            >
              {/* <XmarkIcon classNam="tw-h-5 tw-w-5" /> */}
            </button>
          )}
        </div>
        <div className="menu tw-hidden md:tw-block md:tw-w-auto" id="navbar">
          <ul className="tw-flex tw-p-4 md:tw-p-0 md:tw-flex-row md:tw-space-x-8 tw-mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {NavBarOpen ? <MenuOverPlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
