"use client";
import Tarot from "@/components/Tarot";
import { useRef, useState } from "react";
import { motion } from "framer-motion"; // ✅ Framer Motion
import { mainFont } from "../../fonts";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const text = "اسحب ورقة تاروت لاكتشاف الاسرار المختبئة ورائها";
  const words = text.split(" ");

  return (
    <main className="w-full h-[100vh] relative bg-black ">
      <div className="flex justify-center items-center w-full h-full relative">
        <div
          ref={constraintsRef}
          className="w-full h-screen absolute z-10 top-0 left-0 flex flex-col justify-center items-center overflow-hidden"
        >
          <img
            src="/a.png"
            alt=""
            className=" h-full absolute -top-10 left-1/2 -translate-x-1/2  opacity-20"
          />
          <motion.h1
            className={`text-3xl tracking-widest text-white flex flex-wrap justify-center text-center absolute left-1/2 -translate-x-1/2 top-52 ${
              mainFont.className
            } ${selectedCard !== null ? "opacity-0" : "0.8"}`}
            dir="rtl"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2, // delay between words
                },
              },
            }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="mx-2"
                variants={{
                  hidden: { opacity: 0, y: 5 },
                  visible: { opacity: 0.8, y: 0 },
                }}
                transition={{ duration: 1, delay: 0.3 * i, ease: "easeInOut" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <Tarot
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        </div>
      </div>
    </main>
  );
}
