import { CommentWithReply } from "./CommentWithReply";

export const BlogCommentsSection = () => {
  return (
    <>
      <section id="blog-comments" className="blog-comments section">
        <div className="container">
          <h4 className="comments-count">8 Comments</h4>
          <CommentWithReply />
          <CommentWithReply />
          <CommentWithReply />
          {/* End comment #2*/}
        </div>
      </section>
    </>
  );
};
