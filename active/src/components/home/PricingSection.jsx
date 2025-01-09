import { PricingDetail } from "./pricingDetail/PricingDetail";

const pricingItems = [
  {
    id: 1,
    title: "Free",
    classesName: ["pricing-item", "", ""],
    price: "0",
    description: [
      "Aida dere",
      "Nec feugiat nisl",
      "Nulla at volutpat dola",
      "Pharetra massa",
      "Massa ultricies mi",
    ],
  },
  {
    id: 2,
    title: "Business",
    classesName: ["pricing-item", "recommended-badge", "Recommended"],
    price: "19",
    description: [
      "Aida dere",
      "Nec feugiat nisl",
      "Nulla at volutpat dola",
      "Pharetra mastgsa",
      "Massa ultricies mi",
    ],
  },
  {
    id: 3,
    title: "Developer",
    classesName: ["pricing-item", "", ""],
    price: "29",
    description: [
      "Aida dere",
      "Nec feugiat nisl",
      "Nulla at sfgvolutpat dola",
      "Pharetra massa",
      "Massa ultricies mi",
    ],
  },
];

export const PricingSection = () => {
  return (
    <>
      <section id="pricing" className="pricing section light-background">
        {/* Section Title */}
        <div className="container section-title">
          <p>Plans</p>
          <h2>Pricing Table</h2>
        </div>
        {/* End Section Title */}

        <div className="container">
          <div className="row gy-4">
            {pricingItems.map(
              ({ id, title, classesName, price, description }) => (
                <PricingDetail
                  key={id}
                  title={title}
                  classesName={classesName}
                  price={price}
                  description={description}
                />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};
