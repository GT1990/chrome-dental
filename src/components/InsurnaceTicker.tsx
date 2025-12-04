import React, { useEffect, useRef, useState } from "react";
import styles from "../css/InsuranceTicker.module.css";

// --- Types ---
interface InsuranceTickerProps {
  /** Speed in seconds for one full loop. Defaults to 40s. */
  speed?: number;
}

// --- Image Data ---
const INSURANCE_LOGOS = [
  "/img/insurance/aarp.png",
  "/img/insurance/aetna.png",
  "/img/insurance/ameritas.jpeg",
  "/img/insurance/assurant.webp",
  "/img/insurance/athemBlueCross.jpeg",
  "/img/insurance/care-credit.png",
  "/img/insurance/careington.png",
  "/img/insurance/cigna.png",
  "/img/insurance/delta-dental.png",
  "/img/insurance/dha.jpg",
  "/img/insurance/encore-dental.jpeg",
  "/img/insurance/forward-health.png",
  "/img/insurance/geha.png",
  "/img/insurance/guardian.png",
  "/img/insurance/metlife.png",
  "/img/insurance/molina.jpeg",
  "/img/insurance/premier-dental-group.webp",
  "/img/insurance/principal.png",
  "/img/insurance/renaissance.jpeg",
  "/img/insurance/scion.png",
  "/img/insurance/sunbit.webp",
  "/img/insurance/umr.gif",
  "/img/insurance/united-healthcare.webp",
  "/img/insurance/wea.jpeg",
];

export default function InsuranceTicker({ speed = 40 }: InsuranceTickerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // --- Drag State ---
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      if (!scroller) return;

      const deltaTime = time - lastTime;
      lastTime = time;

      // 1. Handle Infinite Loop Reset (Forward)
      // If we've scrolled past the first set of items (halfway), snap back to 0.
      if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
        scroller.scrollLeft = 0;
      }
      // 1b. Handle Infinite Loop Reset (Backward - for dragging left)
      // If we hit 0 while dragging back, snap to the middle.
      else if (scroller.scrollLeft <= 0) {
        scroller.scrollLeft = scroller.scrollWidth / 2;
      }

      // 2. Auto-Scroll Logic
      // Only scroll automatically if we aren't paused (hovering/dragging)
      if (!isPaused) {
        const pixelsPerSecond = scroller.scrollWidth / 2 / speed;
        const moveAmount = (pixelsPerSecond * deltaTime) / 1000;
        scroller.scrollLeft += moveAmount;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, speed]);

  // --- Interaction Handlers ---

  const handleMouseEnter = () => setIsPaused(true);

  const handleMouseLeave = () => {
    setIsPaused(false);
    isDragging.current = false; // Stop dragging if mouse leaves container
  };

  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 1000);
  };

  // --- Click & Drag Logic ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollerRef.current) return;
    isDragging.current = true;
    // Capture initial X position and scroll position
    startX.current = e.pageX - scrollerRef.current.offsetLeft;
    scrollLeftStart.current = scrollerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollerRef.current) return;
    e.preventDefault(); // Prevent accidental text selection

    const x = e.pageX - scrollerRef.current.offsetLeft;
    // Calculate how far we moved.
    // We subtract walk from scrollLeftStart because dragging Left (negative walk) should scroll Right (increase scrollLeft)
    const walk = x - startX.current;
    scrollerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div className={styles.tickerContainer}>
      <div
        ref={scrollerRef}
        className={styles.scroller}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className={styles.scrollerInner}>
          {/* ORIGINAL SET */}
          {INSURANCE_LOGOS.map((src, index) => (
            <div key={`original-${index}`} className={styles.logoItem}>
              <img
                src={src}
                alt={`Insurance partner logo ${index + 1}`}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}

          {/* DUPLICATE SET (Required for the seamless loop illusion) */}
          {INSURANCE_LOGOS.map((src, index) => (
            <div key={`duplicate-${index}`} className={styles.logoItem}>
              <img
                src={src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
