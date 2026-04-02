import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import PageTransition from "./components/PageTransition";

// Lazy-loaded pages
const Index = React.lazy(() => import("./pages/Index"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Work = React.lazy(() => import("./pages/Work"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Terms = React.lazy(() => import("./pages/Terms"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Must be a child of BrowserRouter to access useLocation
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync">
      <Suspense 
        fallback={
          <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          </div>
        }
      >
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
            <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;