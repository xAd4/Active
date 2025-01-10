import { NavLink } from "react-router-dom";
import { BlogPostDetail } from "./blogPostDetail/BlogPostDetail";

const blogs = [
  {
    id: 1,
    image: "./src/assets/img/img_h_4.jpg",
    category: "Development",
    date: "July 20, 2020",
    title: "There live the blind texts they live",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    author: {
      name: "Winston Gold",
      position: "Lead Product Designer",
      authorImage: "./src/assets/img/team/team-3.jpg",
    },
  },
  {
    id: 2,
    image: "./src/assets/img/img_h_2.jpg",
    category: "Development",
    date: "July 20, 2020",
    title: "There live the blind texts they live",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    author: {
      name: "Winston Gold",
      position: "Lead Product Designer",
      authorImage: "./src/assets/img/team/team-2.jpg",
    },
  },
  {
    id: 3,
    image: "./src/assets/img/img_h_3.jpg",
    category: "Development",
    date: "July 20, 2020",
    title: "There live the blind texts they live",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    author: {
      name: "Winston Gold",
      position: "Lead Product Designer",
      authorImage: "./src/assets/img/team/team-1.jpg",
    },
  },
];

export const BlogPostsSection = () => {
  return (
    <>
      <section id="blog-posts" className="blog-posts section">
        {/* Section Title */}
        <div className="container section-title">
          <p>Recent Posts</p>
          <h2>Blog Posts</h2>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            {blogs.map(
              ({ id, image, category, date, title, description, author }) => (
                <BlogPostDetail
                  key={id}
                  image={image}
                  category={category}
                  date={date}
                  title={title}
                  description={description}
                  author={author}
                />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};
