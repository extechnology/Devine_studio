import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const ProjectAndGallery = lazy(() => import("./pages/ProjectAndGallery"));
const Gallery = lazy(() => import("./pages/Gallery"));
const ServiceImages = lazy(() => import("./pages/ServiceImages"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const ReturnAndRefund = lazy(() => import("./pages/ReturnAndRefund"));
const ShippingPolicy = lazy(() => import("./pages/ShippingPolicy"));

const PageLoader = () => (
  <div className="min-h-screen bg-charcoal flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-white/20 border-t-sand rounded-full animate-spin" />
  </div>
);

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/projects-gallery" element={<ProjectAndGallery />} />
            <Route path="/gallery/:category" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/service-images/:category"
              element={<ServiceImages />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-conditions"
              element={<TermsAndConditions />}
            />
            {/* <Route path="/return-policy" element={<ReturnAndRefund />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
