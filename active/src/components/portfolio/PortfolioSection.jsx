import { PortfolioItem } from "./PortfolioItem";

export const PortfolioSection = () => {
  return (
    <>
      <section id="portfolio" className="portfolio section">
        <div className="container">
          <div className="row gy-4 isotope-container">
            <PortfolioItem />
            {/* End Portfolio Item */}
          </div>
          {/* End Portfolio Container */}
        </div>
      </section>
    </>
  );
};
