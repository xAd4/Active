export const TestimonialSection = () => {
  return (
    <>
      <section id="testimonials" className="testimonials section">
        {/* Section Title */}
        <div className="container section-title">
          <p>Happy Customers</p>
          <h2>Testimonials</h2>
        </div>
        {/* End Section Title */}

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="swiper init-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial mx-auto">
                      <figure className="img-wrap">
                        <img
                          src="./src/assets/img/testimonials/testimonials-1.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </figure>
                      <h3 className="name">Adam Aderson</h3>
                      <blockquote>
                        <p>
                          “There live the blind texts. Separated they live in
                          Bookmarksgrove right at the coast of the Semantics, a
                          large language ocean.”
                        </p>
                      </blockquote>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial mx-auto">
                      <figure className="img-wrap">
                        <img
                          src="./src/assets/img/testimonials/testimonials-2.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </figure>
                      <h3 className="name">Lukas Devlin</h3>
                      <blockquote>
                        <p>
                          “There live the blind texts. Separated they live in
                          Bookmarksgrove right at the coast of the Semantics, a
                          large language ocean.”
                        </p>
                      </blockquote>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial mx-auto">
                      <figure className="img-wrap">
                        <img
                          src="./src/assets/img/testimonials/testimonials-3.jpg"
                          alt="Image"
                          className="img-fluid"
                        />
                      </figure>
                      <h3 className="name">Kayla Bryant</h3>
                      <blockquote>
                        <p>
                          “There live the blind texts. Separated they live in
                          Bookmarksgrove right at the coast of the Semantics, a
                          large language ocean.”
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
