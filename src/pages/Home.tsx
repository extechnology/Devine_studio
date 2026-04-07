import BeforeAndAfter from "../components/Home/BeforeAndAfter";
import YouTubePreview from "../components/Home/YouTubePreview";
import NewsSlider from "../components/Home/NewsSlider";
import ParallaxSection from "../components/Home/Parallax";
import ScrollReveal from "../components/ScrollReveal";
import AboutHome from "../components/Home/AboutHome";
import DedicatedServices from "../components/Home/DedicatedServices";
import Hero from "../components/Home/Hero";

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
        <Hero/>
      </section>

      <section>
        <ScrollReveal>
          <AboutHome/>
        </ScrollReveal>
      </section>

      

      <section className="bg-charcoal ">
        <ScrollReveal delay={200}>
          <YouTubePreview />
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
          <DedicatedServices/>
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
