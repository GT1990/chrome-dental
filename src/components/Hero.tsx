import { useEffect, useRef, useState } from "react";
import { PRACTICE } from "../config";
import styles from "../css/Hero.module.css";
import heroVideoSrc from "../video/office-video.mp4";
import heroPoster from "../video/office-video-image.png";

type HeroProps = {
  titleL1: string;
  titleL2?: string;
  subline?: string;
  bookingHref?: string;
};

export default function Hero({
  titleL1,
  titleL2,
  subline,
  bookingHref,
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const start = () => setShouldLoadVideo(true);

    // Check if window exists and supports requestIdleCallback
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      (window as any).requestIdleCallback(start);
    } else {
      // Use global setTimeout, which is safer here
      setTimeout(start, 150);
    }
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo) return;
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const handleCanPlay = () => {
      videoEl.playbackRate = 0.7; // slow down video
      videoEl.play().catch(() => {
        /* ignore autoplay failures */
      });
    };

    videoEl.addEventListener("canplay", handleCanPlay);
    return () => {
      videoEl.removeEventListener("canplay", handleCanPlay);
    };
  }, [shouldLoadVideo]);

  return (
    <section className={`${styles.hero}`}>
      <div className={styles.heroVideo} aria-hidden="true">
        {shouldLoadVideo ? (
          <video
            ref={videoRef}
            className={styles.heroVideoEl}
            src={heroVideoSrc}
            poster={heroPoster}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            controls={false}
          />
        ) : null}
      </div>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>{titleL1}</h1>
          {titleL2 ? <h1 className={styles.heroTitle}>{titleL2}</h1> : null}
          {subline ? <p className={styles.heroSubline}>{subline}</p> : null}
          <div className={styles.heroActions}>
            {bookingHref ? (
              <a
                className={`btn ${styles.heroBtn} ${styles.heroBtnPrimary}`}
                href={bookingHref}
                target="_blank"
                rel="noopener"
              >
                Book Online
              </a>
            ) : null}
            <a
              className={`btn ${styles.heroBtn} ${styles.heroBtnSecondary}`}
              href={`tel:${PRACTICE.phone.replace(/[^\d]/g, "")}`}
            >
              {PRACTICE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
