/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import CARDS from "../../data";
import Link from "next/link";
import { GiExpander, GiSheikahEye } from "react-icons/gi";
import { motion } from "framer-motion";

export default function Tarot({
  selectedCard,
  setSelectedCard,
}: {
  selectedCard: number | null;
  setSelectedCard: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const [rotate, setRotate] = useState(0);

  return (
    <div
      className={`w-full flex flex-col items-center justify-center relative ${
        selectedCard && "h-screen"
      }`}
    >
      {/* controls only show if no card is selected */}
      {selectedCard === null && (
        <div className="grid grid-cols-2 w-full h-full px-20 absolute z-30 top-0 text-white">
          <button
            className="prev"
            disabled={rotate == -40}
            onClick={() => setRotate(rotate - 10)}
          />
          <button
            className="next"
            disabled={rotate == 50}
            onClick={() => setRotate(rotate + 10)}
          />
        </div>
      )}

      <div
        className={`w-full flex-1 flex items-center justify-center relative ${
          selectedCard ? "mt-[45vh]" : "mt-[60vh]"
        }`}
      >
        {CARDS.map((t, idx) => {
          // hide all except selected
          const i = idx + 1;
          if (selectedCard !== null && selectedCard !== i) return null;

          return (
            <>
              <Card
                key={i}
                t={t.card}
                i={i}
                rotate={rotate}
                selected={selectedCard === i}
                onClick={() => setSelectedCard(selectedCard === i ? null : i)}
              />
              <div
                key={i + "buttons"}
                className={`absolute bottom-10 left-0 w-full flex items-center justify-center gap-2 text-white z-20 duration-1000 delay-500 ${
                  selectedCard === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <Link
                  href={`/chapter/${i}`}
                  className="w-24 py-1 rounded-full uppercase text-xs font-semibold flex justify-center items-center gap-1 border-2 border-white  hover:bg-white hover:text-black duration-300"
                >
                  check
                  <GiSheikahEye className="text-base" />
                </Link>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="w-24 py-1 rounded-full uppercase text-xs font-semibold flex justify-center items-center gap-1 border-2 border-white  hover:bg-white hover:text-black duration-300"
                >
                  close
                  <GiExpander className="text-xs" />
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

const Card = ({
  t,
  i,
  rotate,
  selected,
  onClick,
}: {
  t: string;
  i: number;
  rotate: number;
  selected: boolean;
  onClick: () => void;
}) => {
  const centerIndex = Math.floor(CARDS.length / 2);
  const offset = i - centerIndex;

  const radius = 400; // circle radius
  const angleStep = Math.PI / 25; // spacing between cards
  const angle = offset * angleStep + (rotate * Math.PI) / 180;

  // Circle coordinates
  const x = Math.sin(angle) * radius;
  const y = -Math.cos(angle) * radius + radius;

  return (
    <motion.div
      onClick={onClick}
      className={`absolute origin-bottom z-50 cursor-pointer`}
      initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
      animate={
        selected
          ? { x: 0, y: -170, scale: 1.1, opacity: 1 }
          : { x, y, rotate: (angle * 180) / Math.PI, opacity: 1 }
      }
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ perspective: "1000px" }}
    >
      <div
        className={`relative w-80 h-[500px] preserve-3d duration-700 ${
          selected ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <img
          src="https://i.pinimg.com/736x/79/55/a2/7955a2a683271884cf297e3da1b6bb78.jpg"
          alt={t}
          className="w-80 h-full rounded-lg brightness-50 hover:brightness-100 duration-300 absolute top-0 left-0 backface-hidden"
        />
        {/* Back */}
        <div className="w-80 h-full rounded-lg absolute top-0 left-0 rotate-y-180 backface-hidden">
          <img src={t} alt={t} className="w-80 h-full" />
        </div>
      </div>
    </motion.div>
  );
};
