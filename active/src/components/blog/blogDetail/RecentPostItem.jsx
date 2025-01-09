/* eslint-disable react/prop-types */
export const RecentPostItem = ({ title, dateTime }) => {
  return (
    <>
      <div className="post-item">
        <h4>
          <a href="blog-details.html">{title}</a>
        </h4>
        <time dateTime="2020-01-01">{dateTime}</time>
      </div>
    </>
  );
};
