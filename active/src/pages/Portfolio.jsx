import { PortfolioSection } from "../components/portfolio/PortfolioSection";
import { PageTitle } from "../components/services/PageTitle";

export const Portfolio = () => {
  return (
    <>
      <div>
        <main className="main">
          {/* Page Title */}
          <PageTitle />
          {/* End Page Title */}

          {/* Portfolio Section */}
          <PortfolioSection />
          {/* /Portfolio Section */}
        </main>
      </div>
    </>
  );
};
