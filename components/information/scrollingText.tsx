'use client'

import React, { useEffect, useRef } from 'react';
import './ScrollingText.css';

function ScrollingText ()  {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollText = scrollTextRef.current;

    if (scrollContainer && scrollText) {
      const scrollWidth = scrollText.offsetWidth;
      const containerWidth = scrollContainer.offsetWidth;

      if (scrollWidth > containerWidth) {
        const animationDuration = scrollWidth / 50; // Sesuaikan kecepatan scrolling

        scrollText.style.animationDuration = `${animationDuration}s`;
      }
    }
  }, []);

  return (
    <div ref={scrollContainerRef} className="scroll-container">
      <div ref={scrollTextRef} className="scroll-text aa">
        Contoh Teks Berjalan
      </div>
    </div>
  );
};

export default ScrollingText;
