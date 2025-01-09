import { PageTitle } from "../components/portfolio/portfolioDetail/PageTitle";
import { PortfolioDetailsSection } from "../components/portfolio/portfolioDetail/PortfolioDetailsSection";

export const PortfolioDetail = () => {
  return (
    <>
      <div>
        <main className="main">
          {/* Page Title */}
          <PageTitle />
          {/* End Page Title */}
          <PortfolioDetailsSection />
          {/* Portfolio Details Section */}
        </main>
      </div>
    </>
  );
};
