/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export const BlogPostDetail = ({
  image,
  category,
  date,
  title,
  description,
  author = {},
}) => {
  const { name, position, authorImage } = author;
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="post-entry">
          <NavLink to="/blogDetail" className="thumb d-block">
            <img src={image} alt="Image" className="img-fluid rounded" />
          </NavLink>
          <div className="post-content">
            <div className="meta">
              <NavLink to="/blogDetail" className="cat">
                {category}
              </NavLink>{" "}
              •<span className="date">{date}</span>
            </div>
            <h3>
              <NavLink to="/blogDetail">{title}</NavLink>
            </h3>
            <p>{description}</p>
            <div className="d-flex author align-items-center">
              <div className="pic">
                <img
                  src={authorImage}
                  alt="Image"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="author-name">
                <strong className="d-block">{name}</strong>
                <span className="">{position}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
