import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PRACTICE } from "../config";
import logo from "../img/chrome-dental-logo.svg";
import styles from "../css/Header.module.css";

export default function Header() {
  const [isSolid, setIsSolid] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Home",
      to: "/",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-5h-4v5H5a1 1 0 0 1-1-1v-9.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Dental Services",
      to: "/services",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M5 6.5h14M5 12h14M5 17.5h14"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Insurance",
      to: "/insurance",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 4c3 2 5.5 2 8 0v7.5c0 3.8-2.7 7.3-8 8-5.3-.7-8-4.2-8-8V4c2.5 2 5 2 8 0Z"
            stroke="currentColor"
            strokeWidth="1.7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "New Patients",
      to: "/new-patients",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 7a7 7 0 0 1 14 0"
            stroke="currentColor"
            strokeWidth="1.7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Contact",
      to: "/contact",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4 6.5 12 12l8-5.5M6 18h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Book Online",
      href: PRACTICE.bookingUrl,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M16 3v3M8 3v3m-3 4h14M6 5h12a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      variant: "cta" as const,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1030 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  const handleNavClick = () => {
    scrollToTop();
    closeMenu();
  };

  return (
    <header
      className={`${styles.header} ${
        isSolid || isMenuOpen ? styles.headerSolid : ""
      }`}
    >
      <div className={`container ${styles.headerInner}`}>
        <Link
          to="/"
          className={styles.brand}
          aria-label={PRACTICE.name}
          onClick={handleNavClick}
        >
          <img
            src={logo}
            alt={`${PRACTICE.name} logo`}
            className={styles.brandLogo}
            loading="lazy"
          />
        </Link>
        <button
          className={`${styles.menuToggle}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <svg
              className={styles.menuCloseIcon}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M5 5l14 14M19 5 5 19"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <>
              <span />
              <span />
              <span />
            </>
          )}
        </button>
        <nav
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
          aria-label="Main"
        >
          <div className={styles.navList}>
            {navItems.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  className={`${styles.navItem} ${styles.navLink} ${
                    item.variant === "cta" ? styles.navCta : ""
                  }`}
                  onClick={closeMenu}
                >
                  <span className={styles.navIcon}>{item.icon}</span>
                  <span className={styles.navLabel}>{item.label}</span>
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to!}
                  className={({ isActive }) =>
                    [
                      styles.navItem,
                      styles.navLink,
                      isActive ? styles.active : "",
                      item.variant === "cta" ? styles.navCta : "",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                  onClick={handleNavClick}
                >
                  <span className={styles.navIcon}>{item.icon}</span>
                  <span className={styles.navLabel}>{item.label}</span>
                </NavLink>
              )
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
