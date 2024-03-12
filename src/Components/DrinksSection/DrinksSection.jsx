import { DrinksMenu } from "../DrinksMenu/DrinksMenu";
import "./DrinksSection.scss";


export const DrinksSection = () => {
  return (
    <>
      <div className="drinks-section">
          <h3 data-aos="fade-up" data-aos-duration="500">Favorite</h3>
          <h5 data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Drinks</h5>
      </div>
      <DrinksMenu/>
    </>
  );
};
