import { NavLink } from "react-router-dom";

export const PageTitle = () => {
  return (
    <>
      <div className="page-title light-background">
        <div className="container">
          <h1>Portfolio Details</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="current">Portfolio Details</li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
};
