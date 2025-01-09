export const StatsSection = () => {
  return (
    <>
      <section id="stats" className="stats section light-background">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-5">
              <div className="images-overlap">
                <img
                  src="./src/assets/img/img_v_1.jpg"
                  alt="student"
                  className="img-fluid img-1"
                />
              </div>
            </div>

            <div className="col-lg-4 ps-lg-5">
              <span className="content-subtitle">Why Us</span>
              <h2 className="content-title">
                Far far away Behind the Word Mountains
              </h2>
              <p className="lead">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
              <p className="mb-5">
                There live the blind texts. Separated they live in
                Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
              </p>
              <div className="row mb-5 count-numbers">
                {/* Start Stats Item */}
                <div className="col-4 counter">
                  <span className="d-block">Coffee</span>
                </div>
                {/* End Stats Item */}

                {/* Start Stats Item */}
                <div className="col-4 counter">
                  <span className="d-block">Codes</span>
                </div>
                {/* End Stats Item */}

                {/* Start Stats Item */}
                <div className="col-4 counter">
                  <span className="d-block">Projects</span>
                </div>
                {/* End Stats Item */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
