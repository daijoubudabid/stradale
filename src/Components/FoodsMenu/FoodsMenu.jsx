import { Col, Row } from "react-bootstrap";
import { MenuTitle } from "../MenuTitle/MenuTitle";
import '../DrinksMenu/DrinksMenu.scss'
import MenuItems from "../MenuItems/MenuItems";
import breadData from '../../MenuData/bread'
import snacksData from '../../MenuData/snacks'

export const FoodsMenu = () => {
  const Options = [{ label: "Price" }];
  return (
    <div>
      <div className="container drinks-menu">
        <Row>
          <Col md={6} className="px-4 px-md-4 px-lg-4">
            <MenuTitle title={"Bread"} options={Options} />
            {breadData.map((item, index) => (
            <MenuItems
              key={index}
              name={item.name}
              largePrice={item.price}
            />
          ))}
          </Col>
          <Col md={6} className="px-4 px-md-4 px-lg-4 mt-5 mt-md-0 mt-lg-0">
            <MenuTitle title={"Bread"} options={Options} />
            {snacksData.map((item, index) => (
            <MenuItems
              key={index}
              name={item.name}
              largePrice={item.price}
            />
          ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};
