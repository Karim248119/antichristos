"use client";
import FloatingCard from "@/components/FloatingCard";
import StarsCanvas from "@/components/Stars";
import Tarot from "@/components/Tarot";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return (
    <main className="w-full h-[100vh] relative bg-black ">
      <div className="flex justify-center items-center w-full h-full relative">
        <div
          ref={constraintsRef}
          className="w-full h-screen absolute top-0 left-0 flex justify-center items-center  overflow-hidden"
        >
          {/* <Image
            src="/bg2.jpg"
            alt=""
            fill
            className="w-full h-full object-cover absolute top-0 left-0 brightness-[0.2]"
          /> */}
          <Tarot />
        </div>
      </div>
    </main>
  );
}
