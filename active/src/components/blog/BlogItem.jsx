/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export const BlogItem = ({ category, dateTime, title, image }) => {
  console.log("BlogDetail renderizado");
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <article>
          <div className="post-img">
            <img src={image} alt="" className="img-fluid" />
          </div>

          <div className="meta-top">
            <ul>
              <li className="d-flex align-items-center">
                <NavLink to="/blogDetail">{category}</NavLink>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-dot"></i>{" "}
                <NavLink to="/blogDetail">
                  <time dateTime="2022-01-01">{dateTime}</time>
                </NavLink>
              </li>
            </ul>
          </div>

          <h2 className="title">
            <NavLink to="/blogDetail">{title}</NavLink>
          </h2>
        </article>
      </div>
    </>
  );
};
