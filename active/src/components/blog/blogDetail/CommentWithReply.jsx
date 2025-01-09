export const CommentWithReply = () => {
  return (
    <>
      <div id="comment-2" className="comment">
        <div className="d-flex">
          <div className="comment-img">
            <img src="./src/assets/img/blog/comments-2.jpg" alt="" />
          </div>
          <div>
            <h5>
              <a href="">Aron Alvarado</a>
              <a href="#" className="reply">
                <i className="bi bi-reply-fill"></i> Reply
              </a>
            </h5>
            <time dateTime="2020-01-01">01 Jan,2022</time>
            <p>
              Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque
              eveniet saepe. Officiis illo ut beatae.
            </p>
          </div>
        </div>

        <div id="comment-reply-1" className="comment comment-reply">
          <div className="d-flex">
            <div className="comment-img">
              <img src="./src/assets/img/blog/comments-3.jpg" alt="" />
            </div>
            <div>
              <h5>
                <a href="">Lynda Small</a>
                <a href="#" className="reply">
                  <i className="bi bi-reply-fill"></i> Reply
                </a>
              </h5>
              <time dateTime="2020-01-01">01 Jan,2022</time>
              <p>
                Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta. Est
                ullam aspernatur ut vitae quia mollitia id non. Qui ad quas
                nostrum rerum sed necessitatibus aut est. Eum officiis sed
                repellat maxime vero nisi natus. Amet nesciunt nesciunt qui
                illum omnis est et dolor recusandae. Recusandae sit ad aut
                impedit et. Ipsa labore dolor impedit et natus in porro aut.
                Magnam qui cum. Illo similique occaecati nihil modi eligendi.
                Pariatur distinctio labore omnis incidunt et illum. Expedita et
                dignissimos distinctio laborum minima fugiat. Libero corporis
                qui. Nam illo odio beatae enim ducimus. Harum reiciendis error
                dolorum non autem quisquam vero rerum neque.
              </p>
            </div>
          </div>

          <div id="comment-reply-2" className="comment comment-reply">
            <div className="d-flex">
              <div className="comment-img">
                <img src="./src/assets/img/blog/comments-4.jpg" alt="" />
              </div>
              <div>
                <h5>
                  <a href="">Sianna Ramsay</a>
                  <a href="#" className="reply">
                    <i className="bi bi-reply-fill"></i> Reply
                  </a>
                </h5>
                <time dateTime="2020-01-01">01 Jan,2022</time>
                <p>
                  Et dignissimos impedit nulla et quo distinctio ex nemo. Omnis
                  quia dolores cupiditate et. Ut unde qui eligendi sapiente
                  omnis ullam. Placeat porro est commodi est officiis voluptas
                  repellat quisquam possimus. Perferendis id consectetur
                  necessitatibus.
                </p>
              </div>
            </div>
          </div>
          {/* End comment reply #2*/}
        </div>
        {/* End comment reply #1*/}
      </div>
    </>
  );
};
