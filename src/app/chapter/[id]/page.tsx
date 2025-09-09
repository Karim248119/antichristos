"use client";
import React from "react";
import { useParams } from "next/navigation";
import PdfBookViewer from "@/components/PdfViewer";
import CARDS from "../../../../data";

export default function Cahpter() {
  const searchParams = useParams();
  const id = Number(searchParams.id);
  const idx = id - 1;
  return (
    <div>
      <PdfBookViewer
        file={CARDS[idx].file}
        cover={CARDS[idx].cover}
        title={CARDS[idx].title}
        subtitle={CARDS[idx].subtitle}
      />
    </div>
  );
}
