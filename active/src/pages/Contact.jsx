import { ContactSection } from "../components/contact/ContactSection";
import { PageTitle } from "../components/contact/PageTitle";
import { ProtectedRoute } from "../App";

export const Contact = () => {
  return (
    <div className="contact-page">
      <main className="main">
        {/* Page Title */}
        <PageTitle />
        {/* End Page Title */}

        {/* Contact Section */}
        <ProtectedRoute>
          <ContactSection />
        </ProtectedRoute>
        {/* /Contact Section */}
      </main>
    </div>
  );
};
