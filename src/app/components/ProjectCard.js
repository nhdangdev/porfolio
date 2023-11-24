import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="tw-relative tw-group tw-h-52 md:tw-h-72 tw-rounded-t-xl"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="tw-overplay tw-items-center tw-justify-center tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-[#181818] tw-opacity-0 tw-hidden group-hover:tw-flex group-hover:tw-opacity-80 tw-transition-all tw-duration-500">
          <Link
            href={gitUrl}
            className="tw-relative tw-h-14 tw-w-14 tw-mr-2 tw-border-2 tw-rounded-full tw-border-[#ADB7BE] hover:tw-border-white tw-group/link"
          >
            <CodeBracketIcon className="tw-absolute tw-top-1/2 tw-left-1/2 tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 tw-h-10 tw-w-10 tw-text-[#ADB7BE] tw-m-2 tw-cursor-pointer group-hover/link:tw-text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="tw-relative tw-h-14 tw-w-14 tw-border-2 tw-rounded-full tw-border-[#ADB7BE] hover:tw-border-white tw-group/link"
          >
            <EyeIcon className="tw-absolute tw-top-1/2 tw-left-1/2 tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 tw-h-10 tw-w-10 tw-text-[#ADB7BE] tw-m-2 tw-cursor-pointer group-hover/link:tw-text-white" />
          </Link>
        </div>
      </div>
      <div className="tw-text-white tw-rounded-b-xl tw-mt-3 tw-bg-[#181818] tw-py-6 tw-px-4">
        <h5 className="tw-text-xl tw-font-semibold tw-mb-2">{title}</h5>
        <p className="tw-text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
