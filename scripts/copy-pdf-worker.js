import path from "node:path";
import fs from "node:fs";

const pdfjsDistPath = path.dirname(require.resolve("pdfjs-dist/package.json"));
const pdfWorkerPath = path.join(pdfjsDistPath, "build", "pdf.worker.mjs");

// Copy worker into /public so Next.js can serve it
fs.copyFileSync(pdfWorkerPath, "./public/pdf.worker.mjs");
console.log("✅ Copied pdf.worker.mjs to /public");
