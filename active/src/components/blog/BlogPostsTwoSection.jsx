import { BlogItem } from "./BlogItem";

const blogItems = [
  {
    id: 1,
    category: "Category 1",
    dateTime: "2023-10-01",
    title: "Blog Post 1",
    image: "./src/assets/img/blog/blog-1.jpg",
  },
  {
    id: 2,
    category: "Category 2",
    dateTime: "2023-10-02",
    title: "Blog Post 2",
    image: "./src/assets/img/blog/blog-2.jpg",
  },
  {
    id: 3,
    category: "Category 3",
    dateTime: "2023-10-03",
    title: "Blog Post 3",
    image: "./src/assets/img/blog/blog-3.jpg",
  },
];

export const BlogPostsTwoSection = () => {
  return (
    <>
      <section id="blog-posts-2" className="blog-posts-2 section">
        <div className="container">
          <div className="row gy-5">
            {blogItems.map(({ id, category, dateTime, title, image }) => (
              <BlogItem
                key={id}
                category={category}
                dateTime={dateTime}
                title={title}
                image={image}
              />
            ))}

            {/* End post list item */}
          </div>
          {/* End blog posts list */}
        </div>
      </section>
    </>
  );
};
