import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

const mockCategories = [
  { name: "Chairs", count: 100 },
  { name: "Tables", count: 150 },
  { name: "Sofas & Seating", count: 78 },
  { name: "Beds", count: 125 },
  { name: "Storage Units", count: 101 },
  { name: "Desks & Workstations", count: 2 },
  { name: "TV Units", count: 45 },
  { name: "Dining Sets", count: 30 },
  { name: "Bookshelves & Display Units", count: 60 },
  { name: "Shoe Racks", count: 25 },
  { name: "Dressing Tables", count: 40 },
  { name: "Sideboards & Buffets", count: 20 },
  { name: "Cradles & Kids Furniture", count: 15 },
  { name: "Outdoor Furniture", count: 35 },
];

const mockProducts = [
  {
    id: 1,
    category: "Chairs",
    title: "Classic Solid Back Dining Chair",
    price: "12,999",
    image: "/home-interior.jpg",
  },
  {
    id: 2,
    category: "Chairs",
    title: "Modern Minimalist Lounge Chair",
    price: "18,500",
    image: "/home-interior2.jpg",
  },
  {
    id: 3,
    category: "Tables",
    title: "Rustic Oak Coffee Table",
    price: "24,000",
    image: "/home-interior.jpg",
  },
  {
    id: 4,
    category: "Sofas & Seating",
    title: "Premium Leather 3-Seater Sofa",
    price: "85,000",
    image: "/home-interior2.jpg",
  },
  {
    id: 5,
    category: "Beds",
    title: "King Size Platform Bed with Storage",
    price: "65,000",
    image: "/home-interior.jpg",
  },
  {
    id: 6,
    category: "Storage Units",
    title: "Tall Narrow Bookcase",
    price: "15,500",
    image: "/home-interior2.jpg",
  },
  {
    id: 7,
    category: "TV Units",
    title: "Floating Wall TV Console",
    price: "22,000",
    image: "/home-interior.jpg",
  },
  {
    id: 8,
    category: "Dining Sets",
    title: "6-Seater Marble Top Dining Set",
    price: "1,20,000",
    image: "/home-interior2.jpg",
  },
  {
    id: 9,
    category: "Desks & Workstations",
    title: "Ergonomic Office Desk",
    price: "35,000",
    image: "/home-interior.jpg",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  // Filtering products
  const filteredProducts =
    activeCategory === "All Categories"
      ? mockProducts
      : mockProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-charcoal min-h-screen text-white font-body selection:bg-accent selection:text-white pb-20">
      <PageHeader
        title="Products"
        subtitle="Explore curated interior collections built for performance, luxury, and timeless appeal."
        image={mockProducts[0].image}
      />

      <section className="pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Sidebar Filter Menu */}
            <div className="w-full lg:w-1/4 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-2xl font-heading mb-6 tracking-widest uppercase border-b border-white/10 pb-4 inline-block lg:w-full font-semibold">
                  Filter
                </h2>
                
                <ul className="space-y-3 lg:max-h-[60vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                  <li
                    onClick={() => setActiveCategory("All Categories")}
                    className={`cursor-pointer transition-colors duration-300 text-[13px] tracking-wider uppercase flex justify-between items-center ${
                      activeCategory === "All Categories"
                        ? "text-sand font-bold"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    All Categories
                  </li>
                  {mockCategories.map((cat) => (
                    <li
                      key={cat.name}
                      onClick={() => setActiveCategory(cat.name)}
                      className={`cursor-pointer transition-colors duration-300 text-[13px] tracking-wider uppercase flex justify-between items-center ${
                        activeCategory === cat.name
                          ? "text-sand font-bold"
                          : "text-white/50 hover:text-white"
                      }`}
                    >
                      <span className="truncate pr-2">{cat.name}</span>
                      <span className="text-[10px] opacity-60">({cat.count})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="w-full lg:w-3/4">
              
              {/* Horizontal Top Filters */}
              <div className="mb-10 w-full">
                <div className="flex flex-col sm:flex-row w-full divide-y sm:divide-y-0 sm:divide-x divide-white/20 border border-white/20 bg-white/5 backdrop-blur-sm group hover:border-white/30 transition-colors">
                  <select 
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="flex-1 bg-transparent px-5 py-4 text-xs font-heading uppercase tracking-widest text-white/80 outline-none appearance-none cursor-pointer hover:bg-white/5 transition-colors focus:ring-1 focus:ring-inset focus:ring-sand"
                  >
                    <option value="All Categories" className="bg-charcoal text-white">Product category</option>
                    {mockCategories.map(c => (
                      <option key={c.name} value={c.name} className="bg-charcoal text-white">
                        {c.name}
                      </option>
                    ))}
                  </select>
                  
                  <select className="flex-1 bg-transparent px-5 py-4 text-xs font-heading uppercase tracking-widest text-white/50 outline-none appearance-none cursor-pointer hover:bg-white/5 transition-colors focus:ring-1 focus:ring-inset focus:ring-sand">
                    <option value="" className="bg-charcoal text-white">Type of Product</option>
                    <option value="premium" className="bg-charcoal text-white">Premium Collection</option>
                    <option value="standard" className="bg-charcoal text-white">Standard Edition</option>
                  </select>
                  
                  <select className="flex-1 bg-transparent px-5 py-4 text-xs font-heading uppercase tracking-widest text-white/50 outline-none appearance-none cursor-pointer hover:bg-white/5 transition-colors focus:ring-1 focus:ring-inset focus:ring-sand">
                    <option value="" className="bg-charcoal text-white">Price Range</option>
                    <option value="low" className="bg-charcoal text-white">Low to High</option>
                    <option value="high" className="bg-charcoal text-white">High to Low</option>
                  </select>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <ScrollReveal threshold={0.05} delay={(index % 6) * 100} key={product.id}>
                    <div className="group flex rounded-md flex-col h-full bg-transparent border border-white/20 hover:border-sand transition-all duration-300 shadow-sm cursor-pointer relative overflow-hidden">
                      
                      {/* Product Image */}
                      <div className="w-full h-72 sm:h-64 overflow-hidden relative bg-black/40 border-b border-white/20">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-60 mix-blend-multiply" />
                        
                        <div className="absolute top-4 left-4">
                           <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[9px] uppercase tracking-widest font-semibold border border-white/10 text-white/80">
                             {product.category}
                           </span>
                        </div>
                      </div>
                      
                      {/* Product Info */}
                      <div className="p-6 flex flex-col flex-grow bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-300">
                        <span className="text-[10px] tracking-[0.2em] font-heading uppercase text-white/40 mb-2">
                          {product.category.toUpperCase()}
                        </span>
                        <h4 className="text-base font-body font-medium leading-relaxed mb-6 flex-grow group-hover:text-sand transition-colors text-white/90">
                          {product.title}
                        </h4>
                        <div className="font-heading font-semibold text-sm tracking-widest flex items-center justify-between border-t border-white/10 pt-4">
                          <span className="text-sand/90">MRP : ₹ {product.price}/-</span>
                        </div>
                      </div>

                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <ScrollReveal delay={100}>
                  <div className="w-full py-32 text-center border border-white/10 bg-white/5 backdrop-blur-sm mt-8">
                    <p className="text-white/40 uppercase tracking-widest text-sm font-heading">
                      No products found in this category.
                    </p>
                  </div>
                </ScrollReveal>
              )}
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
