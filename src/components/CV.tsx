import { useCallback, useId, useState } from 'react';
// import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import React from "react";

// import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
  wasmUrl: '/wasm/',
};


const CV = () => {
  const [numPages, setNumPages] = useState<number>(2);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className="container">
      
      <div className="about-section">
        <div className="content">
          <h1>Sofia Kwok</h1>
          <p>Hello! I am an engineer interested in space, robots, and space robots. 
            I currently work at Starfish Space, an in-orbit satellite servicing startup in Seattle. </p>
          <p>I have a Master of Science in Robotics from Carnegie Mellon University and a Bachelor of Science in Mechanical Engineering from the California Institute of Technology. 
            My past experience includes building a bipedal robot, designing a percussive drill for lunar regolith, and making robot arms that can solve jigsaw puzzles and play Bananagrams.
            For more details, refer to my 
            <a target='_blank'
            rel='noopener noreferrer' href="https://drive.google.com/file/d/1ioJZOdRj4lQY6y68mH5pT8S_YvrGLlZZ/view?usp=sharing"> CV.</a>
            </p>
        </div>
      </div>
    </div>
  );
}

export default CV;