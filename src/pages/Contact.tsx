import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

const locations = [
  {
    title: "Cochin Office & Showroom",
    lines: [
      "D1-CC 487/15, Service Road",
      "Kakkanad, Kochi 682019",
      "Tel: +91 97456 12345",
    ],
  },
  {
    title: "Trivandrum Office & Showroom",
    lines: [
      "TC 84/2248, 12, 3rd",
      "Pettah, Trivandrum 695024",
      "Tel: +91 97456 12345",
    ],
  },
  {
    title: "Calicut Office & Showroom",
    lines: [
      "14/2386, 1st Floor",
      "Thadambatt, Calicut 673019",
      "Tel: +91 97456 12345",
    ],
  },
  {
    title: "Bangalore Office & Showroom",
    lines: [
      "1982/8, 27th Main, HSR",
      "Bangalore 560102",
      "Tel: +91 97456 12345",
    ],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-charcoal min-h-screen text-white font-body">
      <PageHeader
        title="Contact"
        subtitle="Reach out to our design team and visit a Devine Studio showroom near you."
        image="https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1768647651-thumb-rak%20interiors.jpg"
      />

      <section className="py-24 relative overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-0 left-0 -ml-40 -mt-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <ScrollReveal className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid gap-16 lg:grid-cols-12 rounded-2xl">
            
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="section-title mb-4">GET IN TOUCH</p>
              <h2 className="text-4xl lg:text-5xl font-heading tracking-widest mb-6">
                Let's Talk Design.
              </h2>
              <p className="text-white/70 leading-relaxed mb-12 max-w-md">
                Whether you're looking to redefine an entire home or need expert 
                consultation for your commercial space, our team is ready to bring 
                your vision to life.
              </p>

              {/* Customer Care Box */}
              <div className="mb-10 bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-sand/5 transform origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <div className="relative z-10">
                  <h3 className="text-xs font-heading tracking-[0.35em] mb-4 text-sand">CUSTOMER CARE</h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-4">
                    Products giving you trouble? Reach out between 9:30 AM - 5:30 PM
                    with your Work ID / Project Reference number.
                  </p>
                  <p className="text-sm font-medium tracking-wide">
                    Tel: +91 95677 66644 <br /> 
                    Email: support@devinestudio.com
                  </p>
                </div>
              </div>

              {/* Showrooms */}
              <h3 className="text-xs font-heading tracking-[0.35em] text-white/50 mb-6 uppercase">Our Showrooms</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {locations.map((location) => (
                  <div key={location.title} className="p-5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors duration-300">
                    <h4 className="text-xs font-heading tracking-wider mb-2 text-white/90">{location.title}</h4>
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
                <h3 className="text-2xl font-heading tracking-widest mb-8">Send an Inquiry</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs uppercase tracking-widest text-white/50">Full Name</label>
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
                      <label htmlFor="email" className="block text-xs uppercase tracking-widest text-white/50">Email Address</label>
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
                      <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-white/50">Phone Number</label>
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
                    {/* Service */}
                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-xs uppercase tracking-widest text-white/50">Subject</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white/70 focus:outline-none focus:ring-1 focus:ring-sand focus:border-sand transition-all appearance-none"
                      >
                        <option value="" disabled className="bg-charcoal text-white">Select a subject...</option>
                        <option value="Residential" className="bg-charcoal text-white">Residential Design</option>
                        <option value="Commercial" className="bg-charcoal text-white">Commercial Design</option>
                        <option value="Consultation" className="bg-charcoal text-white">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest text-white/50">Your Message</label>
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
                    <span className={`inline-block transition-transform duration-300 ${isSubmitting ? '-translate-y-12' : 'translate-y-0'}`}>
                      {submitted ? "Message Sent ✓" : "Send Inquiry"}
                    </span>
                    <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isSubmitting ? 'translate-y-0' : 'translate-y-12'}`}>
                      <svg className="animate-spin h-5 w-5 text-charcoal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  </button>
                  
                  {/* Success Message overlay (optional visual aid) */}
                  <div className={`absolute inset-0 bg-[#1f1f1f]/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center z-20 transition-all duration-500 ease-in-out pointer-events-none ${submitted ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-16 h-16 bg-sand/20 rounded-full flex items-center justify-center mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sand">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <h4 className="text-2xl font-heading tracking-widest mb-2">Thank You</h4>
                    <p className="text-white/60 text-sm">We'll be in touch shortly.</p>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </ScrollReveal>
      </section>

      {/* Full Width Map Section */}
      <section className="h-[400px] w-full bg-charcoalDark relative">
        <div className="absolute inset-0 bg-charcoal/40 mix-blend-multiply z-10 pointer-events-none" />
        <img
          src="https://www.google.com/maps/vt?pb=!1m5!1m4!1i14!2i11664!3i7735!4i256!2m3!1e0!2sm!3i772536432!2m3!1e2!2sspotlit!5i1!3m13!2sen!3sIN!5e289!12m5!1e68!2m2!1sset!2sRoadmap!4e2!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!1e3!23i47083502!27m15!299174093m14!14m13!1m8!1m2!1y4253664324147758709!2y15281339341920421450!2s%2Fg%2F11b6t49mn1!4m2!1x99811742!2x763165957!15sgcid%3Ainterior_designer!2b0!3b0!6b0!8b0&key=AIzaSyCmL18misQw9KdwqGaw3zHkitj8vG6QF2Y&token=73985"
          alt="Location Map"
          className="h-full w-full object-cover grayscale opacity-80 z-0"
        />
      </section>
    </div>
  );
};

export default Contact;
