"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import SvgMask from "./SvgMask";
import { mainFont } from "../../fonts";

export default function PdfBookViewer({
  file,
  cover,
  title,
  subtitle,
}: {
  file: string;
  cover?: string;
  title?: string;
  subtitle?: string;
}) {
  const [numPages, setNumPages] = useState<number>(0);
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800;

  return (
    <div className="flex justify-center items-center w-full h-screen relative overflow-hidden z-20">
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={(err) => console.error("PDF load error:", err)}
      >
        {numPages > 0 && (
          <HTMLFlipBook
            width={500}
            height={windowHeight}
            size="fixed"
            minWidth={600}
            maxWidth={1600}
            minHeight={400}
            maxHeight={2000}
            maxShadowOpacity={0.5}
            className="shadow-xl rounded-lg bg-transparent"
            showCover={true}
            mobileScrollSupport={true}
            style={{}}
            drawShadow={true}
            flippingTime={700}
            useMouseEvents={true}
            clickEventForward={true}
            usePortrait={false} // ✅ double-page mode
            startZIndex={0}
            autoSize={true}
            disableFlipByClick={false}
            swipeDistance={0}
            startPage={0}
            showPageCorners={true}
          >
            {/* Front cover */}
            <div className="relative w-full h-full bg-red-950 flex justify-center items-center">
              <SvgMask imgurl={cover} />
              <div className="h-1/3 w-full absolute text-center bottom-0 left-0 pt-10">
                <h1
                  className={` text-5xl text-[gold] mb-5 ${mainFont.className}`}
                >
                  {title}
                </h1>
                <h2 className="text-white">{subtitle}</h2>
                <div className="w-full h-[2px] bg-[gold] absolute bottom-10 left-0" />
                <div className="w-full h-[2px] bg-[gold] absolute bottom-14 left-0" />
              </div>
            </div>
            {/* Book pages */}
            {Array.from(new Array(numPages), (_, index) => (
              <div
                key={`page_${index + 1}`}
                className={`flex justify-center items-center drop-shadow-2xl`}
              >
                <Page
                  pageNumber={index + 1}
                  width={500} // half of total width, so 2 pages fit nicely
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </div>
            ))}
            {/* Back cover */}
            <div className="relative w-full h-full bg-red-950 flex justify-center items-center">
              <div className="w-full h-[2px] bg-[gold] absolute top-10 left-0" />
              <div className="w-full h-[2px] bg-[gold] absolute top-14 left-0" />
              <div className="w-full h-[2px] bg-[gold] absolute bottom-10 left-0" />
              <div className="w-full h-[2px] bg-[gold] absolute bottom-14 left-0" />
            </div>
          </HTMLFlipBook>
        )}
      </Document>
    </div>
  );
}
