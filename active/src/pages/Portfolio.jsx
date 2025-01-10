import { PageTitle } from "../components/portfolio/PageTitle";
import { PortfolioSection } from "../components/portfolio/PortfolioSection";

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
