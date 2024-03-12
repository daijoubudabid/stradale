import { Blogs } from "../../Components/Blogs/Blogs";
import { ContactDetails } from "../../Components/ContactDetails/ContactDetails";
import { DrinksSection } from "../../Components/DrinksSection/DrinksSection";
import { FoodsSection } from "../../Components/FoodsSection/FoodsSection";
import { GalleryItem } from "../../Components/GalleryItem/GalleryItem";
import { QuoteSection } from "../../Components/QuoteSection/QuoteSection";
import { Slider } from "../../Components/Slider/Slider";
import { SpecialItem } from "../../Components/SpecialItem/SpecialItem";
import { Welcome } from "../../Components/Welcome/Welcome";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Slider />
      <Welcome />
      <GalleryItem />
      <SpecialItem />
      <DrinksSection />
      <FoodsSection />
      <Blogs />
      <ContactDetails />
      <QuoteSection />
    </div>
  );
};
