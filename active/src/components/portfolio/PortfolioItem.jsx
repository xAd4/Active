import { NavLink } from "react-router-dom";

export const PortfolioItem = () => {
  return (
    <>
      <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
        <img
          src="./src/assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
          className="img-fluid"
          alt=""
        />
        <div className="portfolio-info">
          <h4>App 1</h4>
          <p>Lorem ipsum, dolor sit</p>
          <a
            href="./src/assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
            title="App 1"
            data-gallery="portfolio-gallery-app"
            className="glightbox preview-link"
          ></a>
          <NavLink to="/portfolioDetail" className="details-link">
            <i className="bi bi-link-45deg"></i>
          </NavLink>
        </div>
      </div>
    </>
  );
};
