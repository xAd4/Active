import { Routes, Navigate, Route } from "react-router";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollTop } from "./components/ScrollTop";
import { useScript } from "./hooks/useScript";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { Blog } from "./pages/Blog";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Contact } from "./pages/Contact";
import { BlogDetail } from "./pages/BlogDetail";
import { PortfolioDetail } from "./pages/PortfolioDetail";

export const App = () => {
  const scripts = [
    "./src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
    "./src/assets/vendor/php-email-form/validate.js",
    "./src/assets/vendor/aos/aos.js",
    "./src/assets/vendor/swiper/swiper-bundle.min.js",
    "./src/assets/vendor/purecounter/purecounter_vanilla.js",
    "./src/assets/vendor/glightbox/js/glightbox.min.js",
    "./src/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js",
    "./src/assets/vendor/isotope-layout/isotope.pkgd.min.js",
  ];

  scripts.forEach(useScript);
  return (
    <div className="index-page">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolioDetail" element={<PortfolioDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetail" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <Footer />

      {/* Scroll Top */}
      <ScrollTop />
    </div>
  );
};
