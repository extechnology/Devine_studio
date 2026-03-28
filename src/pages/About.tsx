import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import HighlightSection from "../components/About/HightlightSection";

const About = () => {
  return (
    <div>
      <PageHeader
        title="About Devine Studio"
        subtitle="An interior design house committed to timeless craft, precision manufacturing, and inspired living across South India."
        image="/home-interior.jpg"
      />
      {/* <section className="bg-charcoalDark py-16">
        <ScrollReveal className="mx-auto grid max-w-6xl gap-5 px-6 ">
          <h1 className="text-2xl">Welcome to Devine Studio</h1>
          <div className=" text-sm text-white/70 ">
            <p>
              Founded by a team of dedicated professionals, Devine Studio
              transforms ordinary spaces into soulful homes. Our process blends
              design intelligence with meticulous craftsmanship. From concept to
              installation, we partner with you to create personalized interiors
              that are functional, elegant, and built to last.
            </p>
          </div>
        </ScrollReveal>
      </section> */}

      <ScrollReveal>
        <HighlightSection />
      </ScrollReveal>

      <section className="bg-charcoal py-16">
        <ScrollReveal className="mx-auto max-w-6xl px-6">
          <p className="section-title">Our Work Cycle</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Understanding client needs",
              "Rough estimation & planning",
              "Final design & quotation",
              "On-site work",
              "Key handover",
              "Lifetime service",
            ].map((step, index) => (
              <ScrollReveal
                delay={index * 100}
                key={step}
                className="glass-panel rounded-lg p-6 text-sm text-white/70"
              >
                <div className="text-xs uppercase tracking-[0.4em] text-white/40">
                  Step {index + 1}
                </div>
                <div className="mt-3 font-heading text-sm tracking-[0.3em] text-white">
                  {step}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-charcoalDark py-16">
        <ScrollReveal className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_1.1fr]">
          <div className="glass-panel rounded-lg p-6 text-sm text-white/70 flex flex-col justify-center">
            <p className="section-title">Our Factory</p>
            <p className="mt-4">
              Equipped with German machinery, our factory ensures precision
              manufacturing and uncompromised quality. Every finish is inspected
              to meet the Devine Studio standard.
            </p>
          </div>
          <div className="h-64 overflow-hidden rounded-lg shadow-soft">
            <img
              src="https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1747032447-RAK%20Interiors%20Factory.jpg"
              alt="Factory"
              className="h-full w-full object-cover"
            />
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default About;
