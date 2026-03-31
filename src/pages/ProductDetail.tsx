import { useParams, Link } from "react-router-dom";
import { mockProducts } from "../data/products";
import PageHeader from "../components/PageHeader";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === Number(id)) || mockProducts[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-charcoal min-h-screen text-white font-body selection:bg-accent selection:text-white pb-20">
      {/* <PageHeader
        title="Product Details"
        subtitle={product.title}
        image={product.image}
      /> */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          {/* Top Section */}
          <div className="flex flex-col  lg:flex-row gap-8 mb-20 border border-white/20 bg-white/5 shadow-sm rounded-sm">
            {/* Image (Left) */}
            <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[500px] bg-black/40 border-b lg:border-b-0 lg:border-r border-white/20 p-8 flex items-center justify-center relative overflow-hidden group">
              <img src={product.image} alt={product.title} className="max-w-full max-h-[500px] object-contain transition-transform duration-700 group-hover:scale-105" />
            </div>

            {/* Info (Right) */}
            <div className="w-full lg:w-1/2 flex flex-col p-8 sm:p-12">
              <h2 className="text-3xl lg:text-4xl font-heading mb-4 leading-tight">{product.title}</h2>
              <div className="mb-6 flex items-end gap-4 border-b border-white/10 pb-6">
                 <span className="text-white/40 line-through text-lg block">₹ {product.originalPrice || "0,000"}.00</span>
                 <span className="text-sand text-3xl font-semibold">₹ {product.price}.00</span>
              </div>
              
              <p className="text-white/70 text-sm leading-relaxed mb-10 flex-grow">
                {product.description || "This exceptional piece blends modern design with structural integrity. Designed specifically to elevate any space while providing maximum utility. Comes with standard industry assurances and warranty."}
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 mt-auto">
                <button className="bg-sand text-charcoal py-4 px-6 text-[13px] font-heading font-semibold uppercase tracking-widest hover:bg-white transition-colors text-center shadow-sm border border-transparent">
                  Order / Enquire Now!
                </button>
                <button className="bg-transparent text-white border border-white/30 py-4 px-6 text-[13px] font-heading font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors text-center">
                  Download Brochure
                </button>
              </div>

              {/* Feature Boxes */}
              <div className="grid grid-cols-3 divide-x divide-white/20 border-t border-b border-white/20 py-6 text-center text-[11px] sm:text-xs font-heading tracking-widest uppercase bg-white/5">
                 <div className="flex flex-col items-center justify-center px-2 hover:text-sand transition-colors">
                    <span className="font-bold text-sand mb-2 text-lg">100%</span>
                    <span className="text-white/60">Customization</span>
                 </div>
                 <div className="flex flex-col items-center justify-center px-2 hover:text-sand transition-colors">
                    <span className="font-bold text-sand mb-2 text-lg">3 Years</span>
                    <span className="text-white/60">Warranty</span>
                 </div>
                 <div className="flex flex-col items-center justify-center px-2 hover:text-sand transition-colors">
                    <span className="font-bold text-sand mb-2 text-lg">Fast</span>
                    <span className="text-white/60">Delivery</span>
                 </div>
              </div>

            </div>
          </div>

          {/* Product Description */}
          <div className="mb-24">
            <h3 className="text-xl font-heading mb-8 tracking-widest uppercase border-b border-white/10 pb-4 inline-block">Product Description</h3>
            <div className="border border-white/20 bg-white/5 p-8 sm:p-12 min-h-[200px] shadow-sm hover:border-white/30 transition-colors">
               <p className="text-white/70 leading-relaxed max-w-4xl text-sm sm:text-base">
                 {product.fullDescription || "A beautifully crafted piece of furniture that brings sophistication and resilience to interior setups. Combining robust materials with ergonomic finesse, it promises longevity without compromising on aesthetic appeal. Seamlessly blends into diverse decors whether residential or commercial."}
               </p>
            </div>
          </div>

          {/* Related Products */}
          <div>
            <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
               <h3 className="text-xl font-heading tracking-widest uppercase">Related Products</h3>
               <Link to="/products" className="text-xs uppercase tracking-widest text-sand hover:text-white transition-colors">View All →</Link>
            </div>
            
            <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
               {mockProducts.filter(p => p.id !== product.id).slice(0, 4).map(related => (
                 <Link to={`/product/${related.id}`} key={related.id} className="min-w-[280px] w-1/4 flex-shrink-0 snap-start bg-transparent border border-white/20 group hover:border-sand transition-all duration-300 block shadow-sm">
                   <div className="h-64 sm:h-72 bg-black/40 overflow-hidden relative border-b border-white/20">
                      <img src={related.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-transform duration-[1500ms] group-hover:scale-110" alt={related.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-60 mix-blend-multiply" />
                      <div className="absolute top-4 left-4">
                         <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[9px] uppercase tracking-widest font-semibold border border-white/10 text-white/80">
                           {related.category}
                         </span>
                      </div>
                   </div>
                   <div className="p-5 bg-white/5 group-hover:bg-white/10 transition-colors flex flex-col justify-between min-h-[100px]">
                     <h4 className="font-heading text-sm text-white/90 group-hover:text-sand tracking-wider leading-relaxed mb-3">{related.title}</h4>
                     <p className="font-heading font-semibold text-xs tracking-widest text-sand/90">₹ {related.price}/-</p>
                   </div>
                 </Link>
               ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
