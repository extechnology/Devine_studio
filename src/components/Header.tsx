import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Service", to: "/gallery" }, // Linking to the existing services/gallery
  { label: "Products", to: "/products" },
  { label: "Projects & Gallery", to: "/projects-gallery" },
  { label: "Contact Us", to: "/contact" },
];

const Header = ({ isHome }: { isHome?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to={'/'}>
              <img
                src="/devine-logo.png"
                className="h-16 w-auto relative z-50"
                alt="Devine Studio"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.35em] text-white/70 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `transition hover:text-white ${isActive ? "text-white" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-xs uppercase tracking-[0.4em] text-white/60 hover:text-white transition-colors focus:outline-none relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-10 text-sm uppercase tracking-[0.4em] text-white/70">
          {navItems.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `transition-all duration-500 hover:text-white hover:scale-110 ${
                  isActive ? "text-sand font-bold" : ""
                } ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`
              }
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
