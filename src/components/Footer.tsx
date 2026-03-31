import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-charcoalDark/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="text-lg font-heading tracking-[0.4em]">
            Devine Studio
          </div>
          <p className="text-sm text-white/70">
            Crafted interiors with timeless elegance, blending bespoke design
            with cutting-edge manufacturing.
          </p>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-white/60">
            Quick Links
          </div>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <Link
                to="/"
                onClick={scrollToTop}
                className="transition-colors hover:text-sand"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={scrollToTop}
                className="transition-colors hover:text-sand"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={scrollToTop}
                className="transition-colors hover:text-sand"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={scrollToTop}
                className="transition-colors hover:text-sand"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/projects-gallery"
                onClick={scrollToTop}
                className="transition-colors hover:text-sand"
              >
                Projects & Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="transition-colors hover:text-sand"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.4em] text-white/60">
            Our Branches
          </div>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Cochin Studio</li>
            <li>Trivandrum Studio</li>
            <li>Bangalore Studio</li>
            <li>Calicut Studio</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs uppercase tracking-[0.4em] text-white/50">
        © 2026 Devine Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
