"use client";
import Tarot from "@/components/Tarot";
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
          <Tarot />
        </div>
      </div>
    </main>
  );
}
