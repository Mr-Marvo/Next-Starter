import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex flex-col max-w-[1200px] justify-center items-center gap-16">
        <div className="flex flex-col gap-0 w-full items-center leading-tight">
          <h1 className="flex text-center text-4xl sm:text-title1 font-bold custom-font">
            Welcome
          </h1>
          <h1 className="flex text-center text-4xl sm:text-title1 font-bold custom-font">
            to my,
          </h1>
          <h1 className="flex text-center text-4xl sm:text-title1 font-bold custom-font bg-gradient-to-r from-[rgb(75,175,189)] to-[#73D977] bg-clip-text text-transparent">
            Landing Page
          </h1>
        </div>
        <div className="flex flex-col items-center sm:w-[600px] gap-16">
          <p className="flex text-lg sm:text-1xl font-normal w-full item-center text-center">
            This is a landing page quickstarter template developed using Next.js
            and Tailwind css.
          </p>
          <div className="flex flex-row gap-4">
            <Link href="/">
              <p className="text-base font-medium text-colorWhite bg-darkBlue rounded-xl py-2 px-5">
                Try for free
              </p>
            </Link>
            <Link
              href="/"
              className="flex flex-row gap-2 items-center text-base font-semibold text-[#185454]"
            >
              Learn more <IoMdArrowForward />
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-center items-center">
          {/* <Image
            src="/hero-banner.webp"
            alt="KPIscore"
            width={1200}
            height={600}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
