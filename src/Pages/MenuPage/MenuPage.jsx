import { DrinksSection } from "../../Components/DrinksSection/DrinksSection";
import { FoodsSection } from "../../Components/FoodsSection/FoodsSection";

export const MenuPage = () => {
  return (
    <div className="overflow-hidden ">
      <DrinksSection />
      <FoodsSection />
    </div>
  );
};
