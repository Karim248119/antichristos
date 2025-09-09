import React from "react";
import MusicPlayer from "./MusicPlayer";
import Link from "next/link";
import { IoTriangle } from "react-icons/io5";

export default function Nav() {
  return (
    <div className="w-full h-16 text-white flex items-center justify-between px-20 fixed top-0 left-0 z-50">
      <Link href="/" className="text-xl font-semibold flex">
        <div className="relative w-10 h-10">
          <IoTriangle
            color="#fff"
            className="text-3xl absolute top-0 left-1/2 -translate-x-1/2"
          />
          <img
            src="/i.gif"
            alt=""
            className="h-2 absolute bottom-4 left-1/2 -translate-x-1/2 invert"
          />
        </div>
        <span className="mt-1.5 tracking-wide -ml-1">ntichristos</span>
      </Link>
      <MusicPlayer />
    </div>
  );
}
