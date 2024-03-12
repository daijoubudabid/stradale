import { useEffect, useState } from "react";
import special_item from "../../assets/mocha-late.png";
import "./SpecialItem.scss";

export const SpecialItem = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < 600) {
        setCounter((prevCounter) => prevCounter + 20);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <section className="">
      <div className="container special-item-section">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <div className="text-area">
              <h3 data-aos="fade-up">
                Specials
              </h3>
              <span data-aos="fade-up"  data-aos-delay="200" data-aos-once={false}>of the day</span>
              <h4 data-aos="fade-up"  data-aos-delay="400">classic cappuccino</h4>
              <p data-aos="fade-up"  data-aos-delay="600">
                Composed of a single espresso shot and hot milk, with the
                surface topped with foamed milk. Prepared with an espresso
                machine.
              </p>
            </div>
          </div>
          <div className="col-lg-6 image-area d-flex align-items-center" data-aos="zoom-in-up" data-aos-duration="1000">
            <img src={special_item} alt="" />
            <div className="counter">
              <span>{counter}</span>
              <p>sold today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
