import { Col, Row } from "react-bootstrap";
import coffeeData from "../../MenuData/coffee";
import espressoData from "../../MenuData/espresso";
import MenuItems from "../MenuItems/MenuItems";
import { MenuTitle } from "../MenuTitle/MenuTitle";
import nonCoffeeData from '../../MenuData/nonCoffee'
import "./DrinksMenu.scss";
import { addOns } from "../../MenuData/addOns";

export const DrinksMenu = () => {
  const Options = [
    { label: "Medium", size: "16 oz" },
    { label: "Large", size: "20 oz" },
  ];

  const addons = [{ label: "", size: "" }];

  return (
    <div className="container drinks-menu">
      <Row>
        <Col md={6} className="px-4 px-md-4 px-lg-4">
          <MenuTitle title={"Coffee"} options={Options} />
          {coffeeData.map((item, index) => (
            <MenuItems
              key={index}
              name={item.name}
              mediumPrice={item.medium}
              largePrice={item.large}
            />
          ))}
          <Col lg={12} className="mt-5">
            <MenuTitle title={"Non Coffee"} options={Options} />
            {nonCoffeeData.map((item, index) => (
              <MenuItems
                key={index}
                name={item.name}
                mediumPrice={item.medium}
                largePrice={item.large}
              />
            ))}
          </Col>
        </Col>
        <Col md={6} className="px-4 px-md-4 px-lg-4 mt-5 mt-md-0 mt-lg-0">
          <MenuTitle title={"Espresso"} options={Options} />
          {espressoData.map((item, index) => (
            <MenuItems
              key={index}
              name={item.name}
              mediumPrice={item.medium}
              largePrice={item.large}
            />
          ))}
          <Col lg={12} className="mt-5">
            <MenuTitle title={"Add Ons"} options={addons} />
            {addOns.map((item, index) => (
              <MenuItems
                key={index}
                name={item.name}
                largePrice={item.medium}
              />
            ))}
          </Col>
        </Col>
      </Row>
    </div>
  );
};
