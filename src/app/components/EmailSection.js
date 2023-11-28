"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// import Icons
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    //From the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data
      method: "POST",
      // Tell the  we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData)

    if (response.status === 200) {
      console.log("Message sent successfully");
      setEmailSubmitted(true);
    } else {
      console.log("Message sent failed");
      setEmailError(false);
    }
  };

  return (
    <section className="tw-grid md:tw-grid-cols-2 tw-relative tw-my-12 md:tw-my-12 tw-py-24 tw-gap-4">
      <div className="tw-absolute tw-bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] tw-from-purple-900 tw-to-transparent tw-rounded-full tw-h-80 tw-w-80 tw-z-0 tw-blur-lg tw-top-3/4 -tw-left-4 tw-transform -tw-translate-x-1/2 -tw-translate-1/2"></div>
      <div className="tw-z-10">
        <h5 className="tw-text-xl tw-font-bold tw-text-white tw-my-2">
          Let's Connect
        </h5>
        <p className="tw-text-[#ABD7BE] tw-mb-4 tw-max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials tw-flex tw-flex-row tw-gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="tw-flex tw-flex-col" onSubmit={handleSubmit}>
          <div className="tw-mb-6">
            <label
              htmlFor="email"
              className="tw-text-white tw-block tw-mb-2 tw-text-sm tw-font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="tw-bg-[#18191E] tw-border tw-border-[#33353F] placeholder:tw-text-[#9CA2A9] tw-text-gray-100 tw-text-sm tw-rounded-lg tw-block tw-w-full tw-p-2.5"
              placeholder="example123@gmail.com"
            />
          </div>
          <div className="tw-mb-6">
            <label
              htmlFor="subject"
              className="tw-text-white tw-block tw-mb-2 tw-text-sm tw-font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="tw-bg-[#18191E] tw-border tw-border-[#33353F] placeholder:tw-text-[#9CA2A9] tw-text-gray-100 tw-text-sm tw-rounded-lg tw-block tw-w-full tw-p-2.5"
              placeholder="Just say something!"
            />
          </div>
          <div className="tw-mb-6">
            <label
              htmlFor="message"
              className="tw-text-white tw-block tw-text-sm tw-mb-2 tw-font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="tw-bg-[#18191E] tw-border tw-border-[#33353F] placeholder:tw-text-[#9CA2A9] tw-text-gray-100 tw-text-sm tw-rounded-lg tw-block tw-w-full tw-p-2.5 tw-h-[150px] tw-max-h-full"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="tw-bg-purple-500 hover:tw-bg-purple-600 tw-text-white tw-font-medium tw-py-2.5 tw-px-5 tw-rounded-lg tw-w-full"
          >
            Send Message
          </button>
          {
            // If you email was submitted successfully, show a success message.
            (emailSubmitted && (
              <p className="tw-text-green-500 tw-text-sm tw-mt-2">
                Email sent success !
              </p>
            ))
            ||
            (emailError && (
              <p className="tw-text-red-500 tw-text-sm tw-mt-2">
                Failed to send email. Please try again.
              </p>
            ))
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
