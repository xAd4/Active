import { ContactSection } from "../components/contact/ContactSection";
import { PageTitle } from "../components/contact/PageTitle";

export const Contact = () => {
  return (
    <div className="contact-page">
      <main className="main">
        {/* Page Title */}
        <PageTitle />
        {/* End Page Title */}

        {/* Contact Section */}

        <ContactSection />

        {/* /Contact Section */}
      </main>
    </div>
  );
};
