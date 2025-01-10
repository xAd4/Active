/* eslint-disable react/prop-types */
export const TabsDetailServices = ({ icon, title, description }) => {
  return (
    <>
      <div className="col-lg-3">
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
