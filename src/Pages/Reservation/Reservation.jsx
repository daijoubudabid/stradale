import { Banner } from "../../Components/Banner/Banner";
import { MainForm } from "../../Components/MainForm/MainForm.";

export const Reservation = () => {
  return (
    <div>
      <Banner
        title="Reservation"
        subtitle="Welcome To Stradale Cafe"
        className="banner-1"
      />
      <MainForm/>
    </div>
  );
};
