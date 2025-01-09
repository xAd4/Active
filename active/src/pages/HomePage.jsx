import { AboutSection } from "../components/home/AboutSection";
import { AboutTwoSection } from "../components/home/AboutTwoSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { BlogPostsSection } from "../components/home/BlogPostsSection";
import { TabsSection } from "../components/home/TabsSection";
import { ServicesTwoSection } from "../components/home/ServicesTwoSection";
import { PricingSection } from "../components/home/PricingSection";
// import { FaqSection } from "../components/home/FaqSection";
export const HomePage = () => {
  return (
    <>
      {/* About Section */}
      <AboutSection />
      {/* About 2 Section */}
      <AboutTwoSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Blog Posts Section */}
      <BlogPostsSection />
      {/* /Blog Posts Section */}

      {/* Tabs Section */}
      <TabsSection />
      {/* /Tabs Section */}

      {/* Services 2 Section */}
      <ServicesTwoSection />
      {/* /Services 2 Section */}

      {/* Pricing Section */}
      <PricingSection />
      {/* /Pricing Section */}

      {/* Faq Section */}
      {/* <FaqSection /> */}
      {/* /Faq Section */}
    </>
  );
};
