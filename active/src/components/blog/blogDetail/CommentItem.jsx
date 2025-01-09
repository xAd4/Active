export const CommentItem = () => {
  return (
    <>
      <div id="comment-1" className="comment">
        <div className="d-flex">
          <div className="comment-img">
            <img src="./src/assets/img/blog/comments-1.jpg" alt="" />
          </div>
          <div>
            <h5>
              <a href="">Georgia Reader</a>
              <a href="#" className="reply">
                <i className="bi bi-reply-fill"></i> Reply
              </a>
            </h5>
            <time dateTime="2020-01-01">01 Jan,2022</time>
            <p>
              Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et
              et. Est ad aut sapiente quis molestiae est qui cum soluta. Vero
              aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui
              facilis et.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
