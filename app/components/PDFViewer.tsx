"use client";
import React, { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PDFViewer: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
  const [error, setError] = useState<string | null>(null);
  const [pages, setPages] = useState<HTMLCanvasElement[]>([]);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const pdf = await pdfjsLib.getDocument({
          url: pdfUrl,
          cMapUrl: "https://unpkg.com/pdfjs-dist@2.16.105/cmaps/",
          cMapPacked: true,
        }).promise;

        const canvasElements: HTMLCanvasElement[] = [];
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale: 1.5 });

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          if (!context) continue;

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          const renderContext = {
            canvasContext: context,
            viewport,
          };

          await page.render(renderContext).promise; // ページを描画
          canvasElements.push(canvas); // 描画済みCanvasを配列に追加
        }

        setPages(canvasElements); // 描画済みCanvasをステートに保存
      } catch (err) {
        setError(`Failed to load PDF: ${err}`);
      }
    };

    loadPdf();
  }, [pdfUrl]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        pages.map((canvas, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <img src={canvas.toDataURL()} alt={`Page ${index + 1}`} />
          </div>
        ))
      )}
    </div>
  );
};

export default PDFViewer;
