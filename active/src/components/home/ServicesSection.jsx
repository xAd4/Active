export const ServicesSection = () => {
  return (
    <>
      <section id="services" className="services section light-background">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-3">
              <div className="services-item">
                <div className="services-icon">
                  <i className="bi bi-bullseye"></i>
                </div>
                <div>
                  <h3>Technology</h3>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="services-item">
                <div className="services-icon">
                  <i className="bi bi-command"></i>
                </div>
                <div>
                  <h3>Web Design</h3>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="services-item">
                <div className="services-icon">
                  <i className="bi bi-bar-chart"></i>
                </div>
                <div>
                  <h3>Branding</h3>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Services Section */}
    </>
  );
};
