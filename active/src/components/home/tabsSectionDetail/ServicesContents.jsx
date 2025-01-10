/* eslint-disable react/prop-types */
export const ServicesContents = ({ icon, title, detail }) => {
  return (
    <>
      <a className="service-item link horizontal d-flex active">
        <div className="service-icon color-1 mb-4">
          <i className={icon}></i>
        </div>
        {/* /.icon */}
        <div className="service-contents">
          <h3>{title}</h3>
          <p>{detail}</p>
        </div>
        {/* /.service-contents*/}
      </a>
      {/* /.service */}
    </>
  );
};
