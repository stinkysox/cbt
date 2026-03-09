import { useLocation, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import PageTransition from "./PageTransition";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => {
  const location = useLocation();

  return (
    <div className="relative">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {/* Using location.pathname as key on a wrapper ensures fresh mount/unmount per route */}
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
