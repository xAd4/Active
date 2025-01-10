import { ServicesDetail } from "./servicesDetail/ServicesDetail";

export const ServicesTwoSection = () => {
  const services = [
    {
      id: 1,
      icon: "bi bi-search",
      title: "Square",
      description: "Separated they live in Bookmarksgrove right at the coast",
    },
    {
      id: 2,
      icon: "bi bi-command",
      title: "Technology",
      description: "Separated they live in Bookmarksgrove right at the coast",
    },
    {
      id: 3,
      icon: "bi bi-grid",
      title: "Brilliant Ideas",
      description: "Separated they live in Bookmarksgrove right at the coast",
    },
    {
      id: 4,
      icon: "bi bi-globe",
      title: "Blueprint",
      description: "Separated they live in Bookmarksgrove right at the coast",
    },
  ];
  return (
    <>
      <section id="services-2" className="services-2 section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <span className="content-subtitle">Our Services</span>
              <h2 className="content-title">
                Far far away, behind the word mountains, far from the countries
                Vokalia
              </h2>
              <p className="lead">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p className="mb-5">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
            </div>
            <div className="col-md-6 col-lg-6 ps-lg-5">
              <div className="row">
                {services.map(({ id, icon, title, description }) => (
                  <ServicesDetail
                    key={id}
                    icon={icon}
                    title={title}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
