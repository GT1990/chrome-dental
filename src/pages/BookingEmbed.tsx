import { useEffect, useRef, useState } from "react";
import { PRACTICE } from "../config";
import { Seo } from "../seo/Seo";

export default function BookingEmbed() {
  const [blocked, setBlocked] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setBlocked(true), 3000);
    const node = iframeRef.current;
    const onLoad = () => clearTimeout(timer);
    node?.addEventListener("load", onLoad);
    return () => {
      clearTimeout(timer);
      node?.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <div className="section">
      <Seo title="Book an Appointment | Chrome Dental" />
      <div className="container stack">
        <h1 className="section-title">Book an Appointment</h1>
        {!blocked && (
          <iframe
            ref={iframeRef}
            style={{
              width: "100%",
              height: "70vh",
              border: "1px solid var(--chrome-200)",
              borderRadius: "16px",
            }}
            src={PRACTICE.bookingUrl}
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
        )}
        {blocked && (
          <div className="card">
            <p>
              The booking system needs to open in a new tab for security
              reasons.
            </p>
            <a
              className="btn btn-primary"
              href={PRACTICE.bookingUrl}
              target="_blank"
              rel="noopener"
            >
              Open Booking in New Tab
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
