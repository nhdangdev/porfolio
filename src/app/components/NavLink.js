import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="tw-block tw-py-2 tw-pl-3 tw-pr-4 tw-text-[#ADB7BE] sm:tw-text-xl tw-rounded mb:tw-p-0 hover:tw-text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
