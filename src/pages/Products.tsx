import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

const products = [
  {
    title: "Modular Kitchen",
    image: "https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1640348483-category-kitchen.jpg",
  },
  {
    title: "Living Room",
    image: "https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1650620413-category-living.jpg",
  },
  {
    title: "Bedroom",
    image: "https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1650620513-category-bedroom.jpg",
  },
  {
    title: "Dining Room",
    image: "https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1650620665-category-dining.jpg",
  },
  {
    title: "Bathrooms",
    image: "https://rakinteriors.com/trendcart/administrator/images/admin_uploads/1650620814-category-bathroom.jpg",
  },
];

const Products = () => {
  return (
    <div>
      <PageHeader
        title="Products"
        subtitle="Explore curated interior collections built for performance, luxury, and timeless appeal."
        image={products[0].image}
      />
      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {products.map((product, index) => (
              <ScrollReveal delay={index * 150} key={product.title} className="group overflow-hidden rounded-xl bg-white/5 border border-white/10 shadow-soft">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-heading tracking-[0.25em]">{product.title}</h3>
                  <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-md">
                    Bespoke layouts, premium finishes, and meticulous detailing
                    tailored to your lifestyle.
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
