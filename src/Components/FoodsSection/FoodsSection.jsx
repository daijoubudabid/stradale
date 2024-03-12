import { FoodsMenu } from "../FoodsMenu/FoodsMenu";
import "./FoodsSection.scss";

export const FoodsSection = () => {
  return (
    <>
      <div className="foods-section">
      <h3 data-aos="fade-up" data-aos-duration="500">Favorite</h3>
          <h5 data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Foods</h5>
      </div>
      <FoodsMenu/>
    </>
  );
};
