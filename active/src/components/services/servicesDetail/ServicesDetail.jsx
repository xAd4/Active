/* eslint-disable react/prop-types */
export const ServicesDetail = ({ icon, title, description }) => {
  return (
    <>
      <div className="col-6 col-sm-6 col-md-6 col-lg-6">
        <div className="services-item">
          <div className="services-icon">
            <i className={icon}></i>
          </div>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
