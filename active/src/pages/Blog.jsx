import { PageTitle } from "../components/about/PageTitle";
// import { BlogModern } from "../components/blog/BlogModern";
import { BlogPaginationSection } from "../components/blog/BlogPaginationSection";
import { BlogPostsTwoSection } from "../components/blog/BlogPostsTwoSection";

export const Blog = () => {
  return (
    <div className="blog-page">
      <main className="main">
        {/* Page Title */}
        <PageTitle />
        {/* End Page Title */}

        {/* Blog Posts 2 Section */}
        <BlogPostsTwoSection />
        {/* /Blog Posts 2 Section */}

        {/* Blog Pagination Section */}
        <BlogPaginationSection />
        {/* /Blog Pagination Section */}

        {/*<BlogModern />*/}
      </main>
    </div>
  );
};
