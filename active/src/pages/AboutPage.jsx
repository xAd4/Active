import { AboutTwoSection } from "../components/about/AboutTwoSection";
import { PageTitle } from "../components/about/PageTitle";
// import { ServicesSection } from "../components/about/ServicesSection";
import { StatsSection } from "../components/about/StatsSection";

export const AboutPage = () => {
  return (
    <>
      <div>
        <main className="main">
          {/* Page Title */}
          <PageTitle />
          {/* End Page Title */}

          {/* About 2 Section */}
          <AboutTwoSection />
          {/* /About 2 Section */}

          {/* Services Section */}
          {/*<ServicesSection />*/}
          {/* /Services Section */}

          {/* Stats Section */}
          <StatsSection />
          {/* /Stats Section */}
        </main>
      </div>
    </>
  );
};
