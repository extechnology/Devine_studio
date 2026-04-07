import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SocialSidebar from "./SocialSidebar";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-charcoal text-white relative">
      <Header isHome={isHome} />
      <SocialSidebar />
      <main className={isHome ? "" : "pt-28"}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
