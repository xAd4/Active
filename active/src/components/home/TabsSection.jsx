import { ServicesContents } from "./tabsSectionDetail/ServicesContents";

const servicesContents = [
  {
    id: 1,
    icon: "bi bi-bag-check",
    title: "Sell Products",
    detail: "Far far away, behind the word mountains, far from the countries.",
  },
  {
    id: 2,
    icon: "bi bi-briefcase",
    title: "Success Every Day",
    detail: "Far far away, behind the word mountains, far from the countries.",
  },
  {
    id: 3,
    icon: "bi bi-easel",
    title: "Bring Ideas to Life",
    detail: "Far far away, behind the word mountains, far from the countries.",
  },
  {
    id: 4,
    icon: "bi bi-alarm",
    title: "Modern and clean design",
    detail: "Far far away, behind the word mountains, far from the countries.",
  },
];

export const TabsSection = () => {
  return (
    <>
      <section id="tabs" className="tabs section light-background">
        <div className="container">
          <div className="row gap-x-lg-4 justify-content-between">
            <div className="col-lg-4 js-custom-dots">
              {servicesContents.map(({ id, icon, title, detail }) => (
                <ServicesContents
                  key={id}
                  icon={icon}
                  title={title}
                  detail={detail}
                />
              ))}
            </div>

            <div className="col-lg-8">
              <div className="swiper init-swiper-tabs">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img
                      src="./src/assets/img/img_h_1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                    <div className="p-4">
                      <h3 className="text-black h5 mb-3">
                        Modern and clean design
                      </h3>
                      <div className="row">
                        <div className="col-lg-8">
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics,
                            a large language ocean.
                          </p>
                          <p>
                            A small river named Duden flows by their place and
                            supplies it with the necessary regelialia. It is a
                            paradisematic country, in which roasted parts of
                            sentences fly into your mouth.
                          </p>
                        </div>
                        <div className="col-lg-4">
                          <ul className="list-unstyled list-check">
                            <li>Far far away, behind the word</li>
                            <li>Far from the countries Vokalia</li>
                            <li>Separated they live in Bookmarksgrove</li>
                          </ul>
                        </div>
                      </div>
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
