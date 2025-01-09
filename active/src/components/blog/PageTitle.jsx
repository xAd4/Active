export const PageTitle = () => {
  return (
    <>
      <div className="page-title light-background">
        <div className="container">
          <h1>Blog</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current">Blog</li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
};
