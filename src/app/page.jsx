"use client";

import NavBar from "@/components/navbar/NavBar";
import Hero from "@/sections/home/Hero";
import Footer from "@/components/footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="flex flex-col w-full min-h-screen h-full items-center gap-16">
      <NavBar />
      <Hero />
      <Footer />
    </main>
  );
}
