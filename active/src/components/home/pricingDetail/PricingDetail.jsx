/* eslint-disable react/prop-types */
export const PricingDetail = ({ title, classesName, price, description }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className={classesName[0]}>
          <span className={classesName[1]}>{classesName[2]}</span>
          <h3>{title}</h3>
          <h4>
            <sup>$</sup>
            {price}
            <span> / month</span>
          </h4>
          <ul>
            {description.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
          <div className="btn-wrap">
            <a href="#" className="btn-buy">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
