export const BlogAuthorWidget = () => {
  return (
    <>
      <div className="blog-author-widget widget-item">
        <div className="d-flex flex-column align-items-center">
          <img
            src="./src/assets/img/blog/blog-author.jpg"
            className="rounded-circle flex-shrink-0"
            alt=""
          />
          <h4>Jane Smith</h4>
          <div className="social-links">
            <a href="https://x.com/#">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://facebook.com/#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com/#">
              <i className="biu bi-instagram"></i>
            </a>
            <a href="https://instagram.com/#">
              <i className="biu bi-linkedin"></i>
            </a>
          </div>

          <p>
            Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed
            possimus accusantium. Quas repellat voluptatem officia numquam sint
            aspernatur voluptas. Esse et accusantium ut unde voluptas.
          </p>
        </div>
      </div>
    </>
  );
};
