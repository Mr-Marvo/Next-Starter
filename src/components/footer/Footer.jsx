import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row gap-2 w-full min-h-[319px] items-center justify-center bg-colorPrimaryGradient px-5">
      <div className="max-w-[1440px] w-full my-20 md:my-0">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div>
            Logo
            <p className="text-sm font-normal text-[#1D1D1D] pt-2">
              Performance Perfected
            </p>
            <div className="flex flex-row gap-1 pt-10 md:pt-32">
              <div>x</div>
              <div>x</div>
              <div>x</div>
              <div>x</div>
              <div>x</div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 mt-8 md:mt-0">
            <div className="flex flex-col gap-2">
              <Link href="/">
                <p className="text-sm font-bold text-[#008464]">Home</p>
              </Link>
              <Link href="/">
                <p className="text-sm font-normal text-[#1D1D1D]">Features</p>
              </Link>
              <Link href="/">
                <p className="text-sm font-normal text-[#1D1D1D]">Blog</p>
              </Link>
              <Link href="/">
                <p className="text-sm font-normal text-[#1D1D1D]">FAQ</p>
              </Link>
              <Link href="/">
                <p className="text-sm font-normal text-[#1D1D1D]">Pricing</p>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <Link href="">
                <p className="text-sm font-bold text-[#008464]">Company</p>
              </Link>
              <Link href="/">
                <p className="text-sm font-normal text-[#1D1D1D]">About</p>
              </Link>
              <Link href="/">
                <p className="text-sm font-normal text-[#1D1D1D]">Blog</p>
              </Link>
              <Link href="/">
                <p className="text-sm font-normal text-[#1D1D1D]">Careers</p>
              </Link>
              <Link href="/">
                <p className="text-sm font-normal text-[#1D1D1D]">Manifesto</p>
              </Link>
              <Link href="/">
                <p className="text-sm font-normal text-[#1D1D1D]">Press</p>
              </Link>
              <Link href="/">
                <p className="text-sm font-normal text-[#1D1D1D]">Contact</p>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <Link href="/">
                <p className="text-sm font-bold text-[#008464]">Legal</p>
              </Link>
              <Link href="/">
                <p className="text-sm font-normal text-[#1D1D1D]">Privacy</p>
              </Link>
              <Link href="/">
                <p className="text-sm font-normal text-[#1D1D1D]">Terms</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
