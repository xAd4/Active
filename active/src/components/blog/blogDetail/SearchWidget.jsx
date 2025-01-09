export const SearchWidget = () => {
  return (
    <>
      <div className="search-widget widget-item">
        <h3 className="widget-title">Search</h3>
        <form action="">
          <input type="text" />
          <button type="submit" title="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </>
  );
};
