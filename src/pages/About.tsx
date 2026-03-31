import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import HighlightSection from "../components/About/HightlightSection";
import AboutSection from "../components/About/AboutSection";

export const aboutSections = [
  {
    title: "Our Evolution and Growth",
    image: "/home-interior.jpg",
    content:
      "Over the years, Devinestudio has grown from a local initiative into a well-recognized brand serving clients across India. Our expansion has been fueled by our ability to adapt to changing trends, integrate modern technologies, and maintain a customer-first approach.We have successfully diversified our offerings to cater to a wide spectrum of clients—residential homeowners, commercial establishments, and industrial spaces. Each project is approached with a unique perspective, ensuring that the final outcome reflects the client’s vision while maintaining our signature quality standards.Our growth is not just measured by the number of projects completed, but by the satisfaction of our clients and the trust we have earned in the market. Today, Devinestudio stands as a symbol of reliability, creativity, and technical excellence."
  },
  {
    title: "Comprehensive Interior Design Services",
    image: "/home-interior2.jpg",
    content:
      "At Devinestudio, we specialize in delivering end-to-end interior design solutions tailored to diverse needs. Our services cover everything from conceptual design to execution, ensuring a seamless experience for our clients.We design interiors that are not only visually appealing but also functional and durable. Whether it is a modern modular kitchen, a cozy bedroom, a vibrant living room, or a professional office space, our team ensures that every detail is thoughtfully crafted.Our approach involves understanding the client’s lifestyle, preferences, and requirements, and translating them into designs that are both practical and aesthetically pleasing. By combining creativity with technical expertise, we create spaces that truly inspire."
  },
  {
    title: "Premium Wooden Furniture Manufacturing",
    image: "/home-interior.jpg",
    content:
"Furniture is at the heart of what we do. Devinestudio offers a wide range of high-quality wooden furniture designed to enhance both comfort and style. Our product portfolio includes tables, chairs, sofas, beds, kitchen units, storage solutions, and decorative accessories.Each piece of furniture is crafted with precision, using premium materials and advanced manufacturing techniques. We pay close attention to every detail—from design and structure to finishing and durability—ensuring that our products stand the test of time.Our custom furniture solutions allow clients to choose designs that perfectly fit their space and personal style, making every piece unique and meaningful."
  },
  {
    title: "Customized Solutions for Every Space",
    image: "/home-interior.jpg",
    content:
"Every space has its own identity, and at Devinestudio, we believe in enhancing that uniqueness through customized solutions. We work closely with our clients to understand their specific requirements and deliver designs that align with their vision.Whether it is a residential home, a retail showroom, or an industrial facility, our team ensures that every project is executed with precision and creativity. Our ability to customize designs and furniture allows us to cater to a wide range of styles—from contemporary and minimalist to traditional and luxurious."
  },
  {
    title: "Advanced Workshop & Precision Services",
    image: "/home-interior2.jpg",
    content:
"One of our key strengths lies in our advanced workshop services. We provide specialized solutions such as plywood cutting, compressing, edging, and precision finishing, ensuring accuracy and consistency in every component.Our workshop is equipped with modern machinery and tools that enable us to deliver high-quality outputs efficiently. These services are not only used for our in-house projects but are also offered to external clients who require precision woodworking solutions.By maintaining strict quality standards in our workshop processes, we ensure that every product and project meets the highest levels of craftsmanship."
  },
  {
    title: "Strong Infrastructure & Technology",
    image: "/home-interior.jpg",
    content:
"Our infrastructure plays a crucial role in our ability to deliver exceptional results. Devinestudio operates from a well-equipped facility in Calicut, featuring advanced machinery, modern tools, and a highly skilled workforce.We leverage the latest technologies in design and manufacturing to ensure precision, efficiency, and consistency. From digital design tools to automated cutting and finishing equipment, our infrastructure is designed to support high-quality production.This strong foundation enables us to handle projects of varying scales and complexities, ensuring timely delivery without compromising on quality"
  },
  {
    title: "Commitment to Quality Assurance",
    image: "/home-interior2.jpg",
    content:
"Quality is at the core of everything we do at Devinestudio. We follow a rigorous quality assurance process that covers every stage of production—from material selection to final delivery.Our team conducts thorough inspections to ensure that every product meets our high standards of durability, precision, and finish. We use only high-quality materials and proven techniques to deliver results that exceed expectations.By maintaining strict quality control measures, we ensure consistency across all our projects, building trust and confidence among our clients"
 },
  {
    title: "Management Message: Vision & Values",
    image: "/home-interior.jpg",
    content:
"At Devinestudio, our management is driven by a clear vision—to create inspiring spaces that combine aesthetics, functionality, and durability. With years of industry experience, our leadership team is committed to innovation, excellence, and customer satisfaction.We believe in continuous improvement and staying ahead of industry trends. By investing in technology, training, and research, we ensure that our services remain relevant and competitive.Our values are rooted in integrity, transparency, and reliability. These principles guide every decision we make and every project we undertake"
 },
  {
    title: "Our Promise",
    image: "/home-interior2.jpg",
    content:
      "As we look to the future, Devinestudio remains committed to delivering excellence in every project. Our mission is to create spaces that inspire, comfort, and elevate the lives of our clients We take pride in our ability to turn ideas into reality, combining creativity with technical expertise to deliver outstanding results. Whether it is a small residential project or a large commercial undertaking, we approach every assignment with the same level of dedication and attention to detail.With a strong legacy, advanced capabilities, and a passion for design, Devinestudio continues to shape spaces that reflect quality, innovation, and timeless elegance",
  },
];

const About = () => {
  return (
    <div>
      <PageHeader
        title="About Devine Studio"
        subtitle="An interior design house committed to timeless craft, precision manufacturing, and inspired living across South India."
        image="/home-interior.jpg"
      />

      <ScrollReveal>
        <HighlightSection />
      </ScrollReveal>

      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-6xl px-6 space-y-20">
          {aboutSections.map((section, index) => (
            <ScrollReveal key={section.title} delay={index * 100}>
              <AboutSection {...section} reverse={index % 2 !== 0} />
            </ScrollReveal>
          ))}
        </div>
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
