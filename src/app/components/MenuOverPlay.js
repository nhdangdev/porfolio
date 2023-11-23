import React from "react";
import NavLink from "./NavLink";

const MenuOverPlay = ({ links }) => {
  return (
    <ul className="tw-flex tw-flex-col tw-py-4 tw-items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverPlay;
