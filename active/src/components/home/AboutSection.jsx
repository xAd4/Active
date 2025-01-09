export const AboutSection = () => {
  return (
    <>
      <section id="about" className="about section">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0 order-lg-2">
              <div className="swiper init-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img
                      src="./src/assets/img/img_h_6.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-1">
              <span className="section-subtitle">Welcome</span>
              <h1 className="mb-4">
                Excepteur sint occaecat cupidatat non proident
              </h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}
    </>
  );
};
