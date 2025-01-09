import { BlogAuthorWidget } from "../components/blog/blogDetail/BlogAuthorWidget";
import { BlogCommentsSection } from "../components/blog/blogDetail/BlogCommentsSection";
import { BlogDetailSection } from "../components/blog/blogDetail/BlogDetailSection";
import { CommentFormSection } from "../components/blog/blogDetail/CommentFormSection";
import { PageTitle } from "../components/blog/blogDetail/PageTitle";
import { RecentPostsWidget } from "../components/blog/blogDetail/RecentPostsWidget";
import { SearchWidget } from "../components/blog/blogDetail/SearchWidget";
import { TagsWidget } from "../components/blog/blogDetail/TagsWidget";

export const BlogDetail = () => {
  console.log("BlogDetail renderizado");
  return (
    <div className="blog-details-page">
      <main className="main">
        {/* Page Title */}
        <PageTitle />
        {/* End Page Title */}

        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Blog Details Section */}
              <BlogDetailSection />
              {/* /Blog Details Section */}

              {/* Blog Comments Section */}
              <BlogCommentsSection />
              {/* /Blog Comments Section */}

              {/* Comment Form Section */}
              <CommentFormSection />
              {/* /Comment Form Section */}
            </div>

            <div className="col-lg-4 sidebar">
              <div className="widgets-container">
                {/* Blog Author Widget */}
                <BlogAuthorWidget />
                {/*/Blog Author Widget */}

                {/* Search Widget */}
                <SearchWidget />
                {/*/Search Widget */}

                {/* Recent Posts Widget */}
                <RecentPostsWidget />
                {/*/Recent Posts Widget */}

                {/* Tags Widget */}
                <TagsWidget />
                {/*/Tags Widget */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
