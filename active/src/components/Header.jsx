import { NavBar } from "./home/NavBar";
export const Header = () => {
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt="" /> */}
            <h1 className="sitename">Active.</h1>
          </a>

          {/* NavBar */}
          <NavBar />
        </div>
      </header>
    </>
  );
};
