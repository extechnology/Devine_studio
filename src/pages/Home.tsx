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
                Designer spaces that speak to the heart—crafted for modern
                families who value elegance, comfort, and a flawless finish.
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
            <p className="mt-6 text-base text-white/70 font-body leading-relaxed">
              Devine Studio blends design intelligence with precision
              manufacturing. Our team delivers homes that feel bespoke, refined,
              and distinctly yours. We are committed to turning your ordinary
              spaces into extraordinary environments that inspire everyday
              living.
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
              <span className="text-white">OUR</span>{" "}
              <span className="text-[#c6a47e] font-heading font-normal">
                SEGMENTS
              </span>
            </h2>
            <div className="w-24 h-px bg-[#c6a47e] mx-auto mt-8" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* LEFT */}
            <div>
              <h3 className="text-xs md:text-sm tracking-[0.4em] text-white mb-4">
                HOME INTERIORS
              </h3>

              <div className="w-full h-[1px] bg-white/30 mb-6" />

              <p className="text-gray-300 text-xs leading-relaxed tracking-wide">
                Our designs are fully customised to suit client requirements.
                Customers can choose from the wide range of colours and finishes
                we have in store to design their home or office space. Our
                products are manufactured with unmatched quality and delivered
                to site on-time. Every segment that comprises a home – Foyer,
                Living area, Dining area, Bedrooms, Bathroom, Partitions,
                Wardrobes, Crockery shelves etc. are keenly looked into and
                worked in detail to give you the finish you have in mind.
                <br />
                <br />
                Your ideas can be conveyed to us in the form of sketches or
                drawings from any source, and we convert them into our grounds
                to start building your dreams. Our rough estimation process lets
                the customer get a grip on the finances to initiate a booking
                payment.
              </p>
            </div>

            {/* RIGHT */}
            <div className="">
              <h3 className="text-xs md:text-sm tracking-[0.4em] text-white mb-4">
                TURNKEY SOLUTIONS
              </h3>

              <div className="w-full h-[1px] bg-white/30 mb-6" />

              <p className="text-gray-300 text-xs leading-relaxed tracking-wide">
                At RAK, we have mastered the art of end-to-end solutions. Our
                turnkey solutions are hassle-free and absolutely in line with
                designs and ideas discussed with our team. Turnkey solutions
                include every piece of furniture, electrical works, plumbing,
                flooring, tile works, wooden flooring, carpet works, home
                appliances, wallpapers, wall texturing, light fitting, décor,
                and more.
                <br />
                <br />
                Our design team will approach clients with a final quotation
                that meets their needs. Post approval, all one needs to do is
                make an initial payment and sign up for the work.
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
