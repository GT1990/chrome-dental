import React from "react";
import styles from "../css/SocialProofRibbon.module.css";

const SocialProofRibbon: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.glassContainer}>
        {/* Item 1: Google Reviews */}
        <div className={styles.statItem}>
          <div className={styles.iconWrapper}>
            {/* Google "G" Icon SVG */}
            <svg
              viewBox="0 0 24 24"
              width="40"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21-1.19-2.63z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          </div>
          <div className={styles.textGroup}>
            <span className={styles.statNumber}>Top Rated Dentists</span>
            <span className={styles.statLabel}>5-Star Care in Green Bay</span>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Item 2: Insurance & Medicaid */}
        <div className={styles.statItem}>
          <div className={styles.iconWrapper}>
            {/* Shield Icon with Checkmark */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                fill="#E8F0FE"
                stroke="#4285F4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12L11 14L15 10"
                stroke="#34A853"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.textGroup}>
            <span className={styles.statNumber}>Most Insurances Accepted</span>
            <span className={styles.statLabel}>
              Including Medicaid / Forward Health
            </span>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Item 3: Emergency Care (Updated Text & Icon) */}
        <div className={styles.statItem}>
          <div className={styles.iconWrapper}>
            {/* Tooth with "Urgent" Alert Icon */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0056b3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Tooth Outline */}
              <path d="M16.5 2c-1.7 0-3 1.5-3 3.5 0 1.5 1 2.5 1 4C14.5 11 12 12 12 12s-2.5-1-2.5-2.5c0-1.5 1-2.5 1-4C10.5 3.5 9.2 2 7.5 2 5.5 2 4 4 4 6c0 4 2 6 4 9 1 1.5 2 3 4 5 2-2 3-3.5 4-5 2-3 4-5 4-9 0-2-1.5-4-3.5-4z" />

              {/* Small Red Alert Circle overlaid */}
              <circle cx="18" cy="18" r="5" fill="#FFF" stroke="none" />
              <circle
                cx="18"
                cy="18"
                r="4"
                stroke="#EA4335"
                strokeWidth="1.5"
                fill="#FFF"
              />
              <line
                x1="18"
                y1="16"
                x2="18"
                y2="18"
                stroke="#EA4335"
                strokeWidth="1.5"
              />
              <line
                x1="18"
                y1="20"
                x2="18.01"
                y2="20"
                stroke="#EA4335"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className={styles.textGroup}>
            <span className={styles.statNumber}>Emergency Care</span>
            {/* Safe phrasing: promises priority, not a specific time */}
            <span className={styles.statLabel}>Prompt Appointments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofRibbon;
