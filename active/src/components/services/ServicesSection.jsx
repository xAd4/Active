import { TabsDetailServices } from "./servicesDetail/TabsDetailServices";

export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "bi bi-bullseye",
      title: "Technology",
      description: "Separated they live in Bookmarksgrove right at the coast",
    },
    {
      id: 2,
      icon: "bi bi-command",
      title: "Web Design",
      description: "Separated they live in Bookmarksgrove right at the coast",
    },
    {
      id: 3,
      icon: "bi bi-bar-chart",
      title: "Branding",
      description: "Separated they live in Bookmarksgrove right at the coast",
    },
  ];

  return (
    <>
      <section id="services" className="services section light-background">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            {services.map(({ id, icon, title, description }) => (
              <TabsDetailServices
                key={id}
                icon={icon}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
