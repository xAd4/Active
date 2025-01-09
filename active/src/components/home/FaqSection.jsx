export const FaqSection = () => {
  return (
    <>
      <section id="faq" className="faq section">
        {/* Section Title */}
        <div className="container section-title">
          <p>Plans</p>
          <h2>Frequently Asked Questions</h2>
        </div>
        {/* End Section Title */}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="custom-accordion" id="accordion-faq">
                <div className="accordion-item">
                  <h2 className="mb-0">
                    <button className="btn btn-link" type="button">
                      How to download and register?
                    </button>
                  </h2>

                  <div
                    id="collapse-faq-1"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion-faq"
                  >
                    <div className="accordion-body">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </div>
                  </div>
                </div>
                {/* .accordion-item */}

                <div className="accordion-item">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-faq-2"
                    >
                      How to create your paypal account?
                    </button>
                  </h2>
                  <div
                    id="collapse-faq-2"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion-faq"
                  >
                    <div className="accordion-body">
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia. It is a
                      paradisematic country, in which roasted parts of sentences
                      fly into your mouth.
                    </div>
                  </div>
                </div>
                {/* .accordion-item */}

                <div className="accordion-item">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-faq-3"
                    >
                      How to link your paypal and bank account?
                    </button>
                  </h2>

                  <div
                    id="collapse-faq-3"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion-faq"
                  >
                    <div className="accordion-body">
                      When she reached the first hills of the Italic Mountains,
                      she had a last view back on the skyline of her hometown
                      Bookmarksgrove, the headline of Alphabet Village and the
                      subline of her own road, the Line Lane. Pityful a rethoric
                      question ran over her cheek, then she continued her way.
                    </div>
                  </div>
                </div>
                {/* .accordion-item */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
