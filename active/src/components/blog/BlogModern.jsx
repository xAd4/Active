import { Search, ChevronLeft, ChevronRight } from "lucide-react";

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

export const BlogModern = () => {
  return (
    <div className="containerBlogModern">
      <div className="blog-container">
        <header className="blog-header">
          <h1 className="main-title">Nuestro Blog</h1>
          <p className="subtitle">
            Descubre las últimas noticias y artículos sobre tecnología
          </p>

          <div className="search-bar">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              className="search-input"
            />
          </div>
        </header>

        <div className="blog-grid">
          {blogItems.map(({ id, category, dateTime, title, image }) => (
            <article key={id} className="blog-card">
              <div className="blog-image">
                <img src={image} alt={`Blog post ${id}`} className="card-img" />
                <span className="category">{category}</span>
              </div>
              <div className="blog-content">
                <div className="meta">
                  <span className="date">{dateTime}</span>
                </div>
                <h2 className="blog-title">{title}</h2>
                <div className="author">
                  <img src="#" alt="Author" className="author-img" />
                  <div className="author-info">
                    <span className="author-name">Alex García</span>
                    <span className="author-role">Tech Writer</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pagination">
          <button className="page-btn">
            <ChevronLeft size={20} />
          </button>
          <div className="page-numbers">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span className="page-dots">...</span>
            <button className="page-btn">10</button>
          </div>
          <button className="page-btn">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
