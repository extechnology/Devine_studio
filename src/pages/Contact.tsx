import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import useContact from "../hooks/useContact";
import useBannerImages from "../hooks/useBannerImages";

const locations = [
  {
    title: "DIVINE INTERIOR & FURNITURES",
    lines: [
      "📍 Thenhipalam, Puthur Pallikkal",
      "📞 +91 9388 67 87 68, +91 9037 78 77 88",
      "📧 divineclt@gmail.com",
      "🌐 divinestudio.in",
    ],
  },
];

const Contact = () => {
  const { mutate, isPending, isError, isSuccess } = useContact();
  const { data: banners } = useBannerImages();
  const contactBanner = banners?.find(
    (banner) => banner.banner_type === "contact",
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
    mutate(formData);
  };

  return (
    <div className="bg-charcoal min-h-screen text-white font-body">
      <PageHeader
        title="Contact"
        subtitle="Reach out to our design team and visit a Devine Studio showroom near you."
        image={contactBanner?.image || "/home-interior.jpg"}
      />

      <section className="py-24 relative overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-0 left-0 -ml-40 -mt-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <ScrollReveal className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid gap-16 lg:grid-cols-12 rounded-2xl">
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="section-title mb-4">GET IN TOUCH</p>
              <h2 className="text-4xl lg:text-5xl font-heading tracking-widest mb-6">
                Let's Talk Design.
              </h2>
              <p className="text-white/70 leading-relaxed mb-12 max-w-md">
                Whether you're looking to redefine an entire home or need expert
                consultation for your commercial space, our team is ready to
                bring your vision to life.
              </p>

              {/* Customer Care Box */}
              <div className="mb-10 bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-sand/5 transform origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <div className="relative z-10">
                  <h3 className="text-xs font-heading tracking-[0.35em] mb-4 text-sand">
                    CUSTOMER CARE
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-4">
                    Products giving you trouble? Reach out between 9:30 AM -
                    5:30 PM with your Work ID / Project Reference number.
                  </p>
                  <p className="text-sm font-medium tracking-wide">
                    Tel: +91 9388 67 87 68, +91 9037 78 77 88 <br />
                    Email: divineclt@gmail.com
                  </p>
                </div>
              </div>

              {/* Showrooms */}
              <h3 className="text-xs font-heading tracking-[0.35em] text-white/50 mb-6 uppercase">
                Our Office
              </h3>
              <div className="grid sm:grid-cols-1 gap-4">
                {locations.map((location) => (
                  <div
                    key={location.title}
                    className="p-5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors duration-300"
                  >
                    <h4 className="text-xs font-heading tracking-wider mb-2 text-white/90">
                      {location.title}
                    </h4>
                    <ul className="space-y-1 text-xs text-white/60">
                      {location.lines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#1f1f1f] rounded-2xl p-8 md:p-12 border border-white/5 shadow-2xl relative">
                {/* Form header */}
                <h3 className="text-2xl font-heading tracking-widest mb-8">
                  Send an Inquiry
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-xs uppercase tracking-widest text-white/50"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-sand focus:border-sand transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-widest text-white/50"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-sand focus:border-sand transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-xs uppercase tracking-widest text-white/50"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-sand focus:border-sand transition-all"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                    {/* subject */}
                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="block text-xs uppercase tracking-widest text-white/50"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        title="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white/70 focus:outline-none focus:ring-1 focus:ring-sand focus:border-sand transition-all appearance-none"
                      >
                        <option
                          value=""
                          disabled
                          className="bg-charcoal text-white"
                        >
                          Select a subject...
                        </option>
                        <option
                          value="Residential"
                          className="bg-charcoal text-white"
                        >
                          Residential Design
                        </option>
                        <option
                          value="Commercial"
                          className="bg-charcoal text-white"
                        >
                          Commercial Design
                        </option>
                        <option
                          value="Consultation"
                          className="bg-charcoal text-white"
                        >
                          General Consultation
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-widest text-white/50"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-sand focus:border-sand transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto relative overflow-hidden bg-sand text-charcoal font-heading tracking-widest uppercase text-xs px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors duration-300 disabled:bg-sand/60 disabled:cursor-not-allowed group"
                  >
                    <span
                      className={`inline-block transition-transform duration-300 ${isSubmitting ? "-translate-y-12" : "translate-y-0"}`}
                    >
                      {submitted ? "Message Sent ✓" : "Send Inquiry"}
                    </span>
                    <span
                      className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isSubmitting ? "translate-y-0" : "translate-y-12"}`}
                    >
                      <svg
                        className="animate-spin h-5 w-5 text-charcoal"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </span>
                  </button>

                  {/* Success Message overlay (optional visual aid) */}
                  <div
                    className={`absolute inset-0 bg-[#1f1f1f]/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center z-20 transition-all duration-500 ease-in-out pointer-events-none ${submitted ? "opacity-100" : "opacity-0"}`}
                  >
                    <div className="w-16 h-16 bg-sand/20 rounded-full flex items-center justify-center mb-4">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sand"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-heading tracking-widest mb-2">
                      Thank You
                    </h4>
                    <p className="text-white/60 text-sm">
                      We'll be in touch shortly.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Full Width Map Section */}
      <section className="h-[400px] w-full bg-charcoalDark relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3781.0142984847726!2d75.7986411750484!3d11.224385288952934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDEzJzI3LjgiTiA3NcKwNDgnMDQuNCJF!5e1!3m2!1sen!2sin!4v1777629430716!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
