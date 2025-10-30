import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PRACTICE } from "../config";
import logoUrl from "../img/chrome-dental-logo.svg";

export default function Header() {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isSolid ? "header-solid" : ""}`}>
      <div className="container header-inner">
        <Link
          to="/"
          className="brand"
          style={{ display: "flex", alignItems: "center", gap: 12 }}
          aria-label={PRACTICE.name}
        >
          <img
            src={logoUrl}
            alt={`${PRACTICE.name} logo`}
            className="brand-logo"
            loading="lazy"
          />
        </Link>
        <nav className="nav" aria-label="Main">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dental Services
          </NavLink>
          <NavLink
            to="/insurance"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Insurance
          </NavLink>
          <NavLink
            to="/new-patients"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            New Patients
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </nav>
        <a
          className="btn btn-primary header-cta"
          href={PRACTICE.bookingUrl}
          target="_blank"
          rel="noopener"
        >
          Book Online
        </a>
      </div>
    </header>
  );
}
