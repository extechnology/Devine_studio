import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-charcoal text-white">
      <Header isHome={isHome} />
      <main className={isHome ? "" : "pt-28"}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
