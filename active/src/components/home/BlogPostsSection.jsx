import { NavLink } from "react-router-dom";

export const BlogPostsSection = () => {
  return (
    <>
      <section id="blog-posts" className="blog-posts section">
        {/* Section Title */}
        <div className="container section-title">
          <p>Recent Posts</p>
          <h2>Blog Posts</h2>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-6 col-lg-4">
              <div className="post-entry">
                <NavLink to="/blogDetail" className="thumb d-block">
                  <img
                    src="./src/assets/img/img_h_4.jpg"
                    alt="Image"
                    className="img-fluid rounded"
                  />
                </NavLink>
                <div className="post-content">
                  <div className="meta">
                    <NavLink to="/blogDetail" className="cat">
                      Development
                    </NavLink>{" "}
                    •<span className="date">July 20, 2020</span>
                  </div>
                  <h3>
                    <NavLink to="/blogDetail">
                      There live the blind texts they live
                    </NavLink>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex author align-items-center">
                    <div className="pic">
                      <img
                        src="./src/assets/img/team/team-3.jpg"
                        alt="Image"
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="author-name">
                      <strong className="d-block">Winston Gold</strong>
                      <span className="">Lead Product Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="post-entry">
                <NavLink to="/blogDetail" className="thumb d-block">
                  <img
                    src="./src/assets/img/img_h_2.jpg"
                    alt="Image"
                    className="img-fluid rounded"
                  />
                </NavLink>
                <div className="post-content">
                  <div className="meta">
                    <NavLink to="/blogDetail" className="cat">
                      Development
                    </NavLink>{" "}
                    •<span className="date">July 20, 2020</span>
                  </div>
                  <h3>
                    <NavLink to="/blogDetail">
                      There live the blind texts they live
                    </NavLink>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex author align-items-center">
                    <div className="pic">
                      <img
                        src="./src/assets/img/team/team-2.jpg"
                        alt="Image"
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="author-name">
                      <strong className="d-block">Winston Gold</strong>
                      <span className="">Lead Product Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="post-entry">
                <NavLink to="/blogDetail" className="thumb d-block">
                  <img
                    src="./src/assets/img/img_h_3.jpg"
                    alt="Image"
                    className="img-fluid rounded"
                  />
                </NavLink>
                <div className="post-content">
                  <div className="meta">
                    <NavLink to="/blogDetail" className="cat">
                      Development
                    </NavLink>{" "}
                    •<span className="date">July 20, 2020</span>
                  </div>
                  <h3>
                    <NavLink to="/blogDetail">
                      There live the blind texts they live
                    </NavLink>
                  </h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex author align-items-center">
                    <div className="pic">
                      <img
                        src="./src/assets/img/team/team-1.jpg"
                        alt="Image"
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="author-name">
                      <strong className="d-block">Winston Gold</strong>
                      <span className="">Lead Product Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
