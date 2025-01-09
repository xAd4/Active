import { PageTitle } from "../components/services/PageTitle";
import { ServicesSection } from "../components/services/ServicesSection";
import { ServicesTwoSection } from "../components/services/ServicesTwoSection";

export const Services = () => {
  return (
    <div>
      <main className="main">
        {/* Page Title */}
        <PageTitle />
        {/* End Page Title */}

        {/* Services 2 Section */}
        <ServicesTwoSection />
        {/* /Services 2 Section */}

        {/* Services Section */}
        <ServicesSection />
        {/* /Services Section */}
      </main>
    </div>
  );
};
