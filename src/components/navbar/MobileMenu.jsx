"use client";

import Link from "next/link";
import React from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

const MobileMenu = ({ menuItems }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <>
      <div className="flex flex-row justify-between items-center w-full px-2 my-2">
        <div className="flex flex-row gap-2 items-center justify-center">
          <button className="text-3xl p-2right-0">
            <IoMdMenu
              className="text-black"
              onClick={() => {
                toggleMobileMenu();
              }}
            />
          </button>
          Logo
        </div>

        <Link href="/" className="flex">
          <p className="text-base font-medium text-colorWhite bg-buttonBgColor rounded-xl sm:py-2 px-2 sm:px-5">
            Signup
          </p>
        </Link>
      </div>

      <div
        className={`fixed top-0 right-0 w-full h-64 bg-[#EFFEFF] text-primary transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out overflow-hidden`}
      >
        <div className="flex justify-end">
          <button className="text-3xl p-3 mr-2">
            <IoMdClose
              onClick={() => {
                closeMobileMenu();
              }}
            />
          </button>
        </div>
        <div className="flex flex-col items-center h-full">
          {menuItems.map((item, index) => (
            <Link
              href={item?.url}
              onClick={() => {
                closeMobileMenu();
              }}
              className="text-lg font-medium mb-4 hover:text-primaryColor"
              key={index}
            >
              <p>{item?.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
