import BeforeAndAfter from "../components/Home/BeforeAndAfter";
import YouTubePreview from "../components/Home/YouTubePreview";
import NewsSlider from "../components/Home/NewsSlider";
import ParallaxSection from "../components/Home/Parallax";
import ScrollReveal from "../components/ScrollReveal";

const heroImage =
  "https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1639204624-8.jpg";
const journeyImage =
  "https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1640600504-thumb-karnataka-op-4.jpg";
const newsImage =
  "https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1666948531-thumb-a98e7bab-885c-4399-b67e-2b5c66018214.jpg";

const Home = () => {
  return (
    <div>
      <section className="relative min-h-screen">
        <img
          src={heroImage}
          alt="Devine Studio"
          className="h-screen w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <ScrollReveal>
              <h1 className="mt-4 text-2xl font-heading md:text-5xl tracking-wide">
                Experience World-Class <br /> Interiors
              </h1>
              <p className="mt-6 text-sm text-white/70 max-w-xl font-body leading-relaxed">
                Transforming spaces with style Delivering quality that lasts
              </p>
              <button className="mt-10 border border-white/40 px-8 py-4 text-xs uppercase tracking-[0.4em] text-white hover:bg-white hover:text-charcoal transition-all duration-300">
                Explore Portfolio
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-charcoalDark py-24">
        <ScrollReveal className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1.2fr_1fr] items-center">
          <div className="content-center">
            <p className="section-title text-2xl mb-6">
              A Journey of Excellence
            </p>
            <p className="mt-6 text-base text-justify text-white/70 font-body leading-relaxed">
              Devinestudio is a trusted name in interior design and wooden
              furniture, rooted in Calicut, Kerala. With over 2 decades of
              expertise, we deliver customized solutions for homes, commercial,
              and industrial spaces. From elegant interiors to quality furniture
              and workshop services, we bring craftsmanship, innovation, and
              precision to every project we undertake.
            </p>
          </div>
          <div className="h-64 overflow-hidden rounded-xl shadow-soft md:h-80 relative group">
            <img
              src={journeyImage}
              alt="Journey"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-charcoal ">
        <ScrollReveal delay={200}>
          <YouTubePreview videoId="dQw4w9WgXcQ" />
        </ScrollReveal>
      </section>

      <section className="bg-charcoal bg-opacity-50 ">
        <ScrollReveal>
          <BeforeAndAfter />
        </ScrollReveal>
      </section>

      <section
        className="relative text-white py-24"
        style={{
          backgroundColor: "#1f1f1f",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <ScrollReveal className="max-w-5xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-3xl font-light tracking-[0.3em]">
              <span className="text-white">OUR DEDICATED</span> <br />
              <span className="text-[#c6a47e] font-heading font-normal">
                SERVICES AND PRODUCTS
              </span>
            </h2>
            <div className="w-24 h-px bg-[#c6a47e] mx-auto mt-8" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* LEFT */}
            <div>
              <h3 className="text-xs md:text-sm tracking-[0.4em] text-white mb-4">
                INTERIOR DESIGNING{" "}
              </h3>

              <div className="w-full h-[1px] bg-white/30 mb-6" />

              <p className="text-gray-300 text-justify text-xs leading-relaxed tracking-wide">
                Interior designing at Devinestudio blends creativity,
                functionality, and precision to transform spaces into inspiring
                environments. We create customized designs for residential,
                commercial, and industrial spaces, focusing on aesthetics and
                practicality. Our expert team ensures every project reflects
                client vision, delivering stylish, comfortable, and efficient
                interiors with attention to detail and quality craftsmanship.
                <br />
              </p>
            </div>

            {/* RIGHT */}
            <div className="">
              <h3 className="text-xs md:text-sm tracking-[0.4em] text-white mb-4">
                WOODEN FURNITURE{" "}
              </h3>

              <div className="w-full h-[1px] bg-white/30 mb-6" />

              <p className="text-gray-300 text-justify text-xs leading-relaxed tracking-wide">
                Specializing in manufacturing and distributing high-quality
                wooden furniture crafted with precision and durability. Our
                range includes tables, chairs, sofas, beds, and customized
                pieces for residential and commercial spaces. We combine skilled
                craftsmanship with quality materials to deliver furniture that
                ensures comfort, style, and long-lasting performance for every
                client
                <br />
              </p>
            </div>
            <div>
              <h3 className="text-xs md:text-sm tracking-[0.4em] text-white mb-4">
                PROFESSIONAL CONSULTATION FOR INTERIOR DESIGN PROJECTS{" "}
              </h3>

              <div className="w-full h-[1px] bg-white/30 mb-6" />

              <p className="text-gray-300 text-justify text-xs leading-relaxed tracking-wide">
                We also engaged in professional consultation for interior design
                projects, guiding clients from concept to execution. Our experts
                offer creative insights, space planning, material selection, and
                budget-friendly solutions tailored to individual needs. We
                ensure every project achieves the perfect balance of aesthetics
                and functionality, delivering efficient, stylish, and
                well-planned interior spaces.
                <br />
              </p>
            </div>

            {/* RIGHT */}
            <div className="">
              <h3 className="text-xs md:text-sm tracking-[0.4em] text-white mb-4">
                WOOD AND PLYWOOD CRAFTING{" "}
              </h3>

              <div className="w-full h-[1px] bg-white/30 mb-6" />

              <p className="text-gray-300 text-justify text-xs leading-relaxed tracking-wide">
                Our expert plywood finishing services for external clients,
                ensuring high-quality results with precision and care. Our
                workshop services include accurate cutting, edging, and
                finishing works tailored to project requirements. With advanced
                tools and skilled craftsmanship, we deliver reliable, efficient,
                and neatly finished materials for various interior and furniture
                applications.
                <br />
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-charcoalDark ">
        <ScrollReveal>
          <NewsSlider />
        </ScrollReveal>
      </section>

      <ParallaxSection />
    </div>
  );
};

export default Home;
