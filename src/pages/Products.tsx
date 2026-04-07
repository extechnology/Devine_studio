import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import { mockCategories, mockProducts } from "../data/products";
import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategory";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [activeType, setActiveType] = useState("Type of Product");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [priceInitialised, setPriceInitialised] = useState(false);
  const { data: products } = useProducts();
  const { data: categories } = useCategories();

  // Derive real min / max from dynamic product data
  const computedMin = products?.length
    ? Math.min(...products.map((p) => Number(p.price)))
    : 0;
  const computedMax = products?.length
    ? Math.max(...products.map((p) => Number(p.price)))
    : 0;

  // Sync slider bounds once products are loaded (only the first time)
  useEffect(() => {
    if (products?.length && !priceInitialised) {
      setPriceRange({ min: computedMin, max: computedMax });
      setPriceInitialised(true);
    }
  }, [products, priceInitialised, computedMin, computedMax]);

  // Step ≈ 1 % of the range (rounded to a nice number), minimum 1
  const priceStep = computedMax > computedMin
    ? Math.max(1, Math.round((computedMax - computedMin) / 100))
    : 1;

  // Dropdown States
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsCategoryOpen(false);
        setIsTypeOpen(false);
        setIsPriceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const parsePrice = (priceStr: string) =>
    parseInt(priceStr.replace(/,/g, ""), 10);

  const filteredProducts = products?.filter((p) => {
    const pCategory =
      activeCategory === "All Categories" || p?.category_name === activeCategory;
    const pPrice = p?.price;
    const inRange = pPrice >= priceRange.min && pPrice <= priceRange.max;
    return pCategory && inRange;
  });

  return (
    <div className="bg-charcoal min-h-screen text-white font-body selection:bg-accent selection:text-white pb-20">
      <PageHeader
        title="Products"
        subtitle="Explore curated interior collections built for performance, luxury, and timeless appeal."
        image={mockProducts[0].image}
      />

      <section className="pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sidebar Filter Menu */}
            {/* <div className="w-full lg:w-1/4 flex-shrink-0">
              ... commented out ...
            </div> */}

            {/* Main Content Area */}
            <div className="w-full">
              {/* Horizontal Top Filters */}
              <div className="mb-10 w-full relative z-40" ref={containerRef}>
                <div className="flex flex-col sm:flex-row w-full divide-y sm:divide-y-0 sm:divide-x divide-white/20 border border-white/20 bg-white/5 backdrop-blur-sm group hover:border-white/30 transition-colors">
                  {/* Category Filter Dropdown */}
                  <div className="relative flex-1">
                    <button
                      onClick={() => {
                        setIsCategoryOpen(!isCategoryOpen);
                        setIsTypeOpen(false);
                        setIsPriceOpen(false);
                      }}
                      className="w-full flex justify-between items-center bg-transparent px-5 py-4 text-xs font-heading uppercase tracking-widest text-white/80 hover:bg-white/5 transition-colors focus:outline-none"
                    >
                      <span className="truncate">
                        {activeCategory === "All Categories"
                          ? "Product category"
                          : activeCategory}
                      </span>
                      <svg
                        className={`w-4 h-4 ml-3 opacity-60 transition-transform duration-300 ${isCategoryOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`absolute top-full left-0 w-full md:w-64 mt-2 bg-charcoal border border-white/20 shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 z-50 transition-all duration-300 origin-top ${isCategoryOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}
                      style={{ maxHeight: "300px" }}
                    >
                      <div
                        onClick={() => {
                          setActiveCategory("All Categories");
                          setIsCategoryOpen(false);
                        }}
                        className="px-5 py-3 text-xs font-heading uppercase tracking-widest text-white/80 hover:bg-white/10 hover:text-white cursor-pointer border-b border-white/10"
                      >
                        All Categories
                      </div>
                      {categories?.map((c) => (
                        <div
                          key={c.name}
                          onClick={() => {
                            setActiveCategory(c.name);
                            setIsCategoryOpen(false);
                          }}
                          className="px-5 py-3 text-xs font-heading uppercase tracking-widest text-white/80 hover:bg-white/10 hover:text-white cursor-pointer border-b border-white/10 last:border-0"
                        >
                          {c.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Type of Product Dropdown */}
                  <div className="relative flex-1">
                    <button
                      onClick={() => {
                        setIsTypeOpen(!isTypeOpen);
                        setIsCategoryOpen(false);
                        setIsPriceOpen(false);
                      }}
                      className="w-full flex justify-between items-center bg-transparent px-5 py-4 text-xs font-heading uppercase tracking-widest text-white/80 hover:bg-white/5 transition-colors focus:outline-none"
                    >
                      <span className="truncate">{activeType}</span>
                      <svg
                        className={`w-4 h-4 ml-3 opacity-60 transition-transform duration-300 ${isTypeOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`absolute top-full left-0 w-full mt-2 bg-charcoal border border-white/20 shadow-2xl z-50 transition-all duration-300 origin-top ${isTypeOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}
                    >
                      <div
                        onClick={() => {
                          setActiveType("Type of Product");
                          setIsTypeOpen(false);
                        }}
                        className="px-5 py-3 text-xs font-heading uppercase tracking-widest text-white/80 hover:bg-white/10 cursor-pointer border-b border-white/10"
                      >
                        Reset Type
                      </div>
                      <div
                        onClick={() => {
                          setActiveType("Premium Collection");
                          setIsTypeOpen(false);
                        }}
                        className="px-5 py-3 text-xs font-heading uppercase tracking-widest text-white/80 hover:bg-white/10 cursor-pointer border-b border-white/10"
                      >
                        Premium Collection
                      </div>
                      <div
                        onClick={() => {
                          setActiveType("Standard Edition");
                          setIsTypeOpen(false);
                        }}
                        className="px-5 py-3 text-xs font-heading uppercase tracking-widest text-white/80 hover:bg-white/10 cursor-pointer border-b border-white/10"
                      >
                        Standard Edition
                      </div>
                    </div>
                  </div>

                  {/* Price Range Dropdown */}
                  <div className="relative flex-1">
                    <button
                      onClick={() => {
                        setIsPriceOpen(!isPriceOpen);
                        setIsCategoryOpen(false);
                        setIsTypeOpen(false);
                      }}
                      className="w-full flex justify-between items-center bg-transparent px-5 py-4 text-xs font-heading uppercase tracking-widest text-white/80 hover:bg-white/5 transition-colors focus:outline-none"
                    >
                      <span className="truncate">Price Range</span>
                      <svg
                        className={`w-4 h-4 ml-3 opacity-60 transition-transform duration-300 ${isPriceOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`absolute top-full right-0 w-full sm:w-80 mt-2 bg-charcoal border border-white/20 shadow-2xl p-6 z-50 transition-all duration-300 origin-top ${isPriceOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}
                    >
                      <div className="flex justify-between items-center mb-6 text-xs font-heading tracking-widest">
                        <span className="text-white/60">
                          ₹ {priceRange.min.toLocaleString("en-IN")}
                        </span>
                        <span className="text-sand font-bold px-3 py-1 bg-white/5 border border-white/10">
                          ₹ {priceRange.max.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <div className="relative w-full h-8 mb-6 flex items-center">
                        {/* Built-in range slider — bounds derived from real product prices */}
                        <input
                          title="max price"
                          type="range"
                          min={computedMin}
                          max={computedMax}
                          step={priceStep}
                          value={priceRange.max}
                          onChange={(e) =>
                            setPriceRange({
                              min: computedMin,
                              max: Number(e.target.value),
                            })
                          }
                          className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#c8b8a0]"
                        />
                      </div>

                      <button
                        onClick={() => setIsPriceOpen(false)}
                        className="w-full py-3 bg-white/10 hover:bg-sand hover:text-charcoal text-white text-xs font-heading uppercase tracking-widest transition-colors font-bold shadow-soft"
                      >
                        Apply Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProducts?.map((product, index) => (
                  <ScrollReveal
                    threshold={0.05}
                    delay={(index % 6) * 100}
                    key={product.id}
                  >
                    <Link
                      to={`/product/${product.id}`}
                      className="group flex rounded-sm flex-col h-full bg-transparent border border-white/20 hover:border-sand transition-all duration-300 shadow-sm cursor-pointer relative overflow-hidden"
                    >
                      {/* Product Image */}
                      <div className="w-full h-72 sm:h-64 overflow-hidden relative bg-black/40 border-b border-white/20">
                        <img
                          src={product.image}
                          alt={product?.name}
                          className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-60 mix-blend-multiply" />

                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[9px] uppercase tracking-widest font-semibold border border-white/10 text-white/80">
                            {product?.category_name.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6 flex flex-col flex-grow bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-300">
                        <span className="text-[10px] tracking-[0.2em] font-heading uppercase text-white/40 mb-2">
                          {product.category_name.toUpperCase()}
                        </span>
                        <h4 className="text-base font-body font-medium leading-relaxed mb-6 flex-grow group-hover:text-sand transition-colors text-white/90">
                          {product.name}
                        </h4>
                        <div className="font-heading font-semibold text-sm tracking-widest flex items-center justify-between border-t border-white/10 pt-4">
                          <span className="text-sand/90">
                            MRP : ₹ {product.price}/-
                          </span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>

              {filteredProducts?.length === 0 && (
                <ScrollReveal delay={100}>
                  <div className="w-full py-32 text-center border border-white/10 bg-white/5 backdrop-blur-sm mt-8">
                    <p className="text-white/40 uppercase tracking-widest text-sm font-heading mb-4">
                      No products found in this price range.
                    </p>
                    <button
                      onClick={() => {
                        setPriceRange({ min: computedMin, max: computedMax });
                        setActiveCategory("All Categories");
                      }}
                      className="px-6 py-2 bg-transparent border border-white/20 text-white/70 hover:text-white hover:border-white transition-colors text-xs uppercase tracking-widest font-heading"
                    >
                      Clear Filters
                    </button>
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
