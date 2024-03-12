/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Col, Row } from "react-bootstrap";
import { BsCup } from "react-icons/bs";
import { TfiEmail, TfiLocationPin } from "react-icons/tfi";
import "./ContactDetails.scss";

export const ContactDetails = ({className}) => {
  return (
    <div className={`contact-details-section ${className}`}>
      <div className="container">
        <Row>
          <Col md={4}>
            <div className="details">
              <TfiLocationPin className="icon" />
              <h3>Location</h3>
              <p>08 W 36th St, New York, NY 10001</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="details">
              <BsCup className="icon" />
              <h3>We'are Open</h3>
              <p>Weekdays 08:00 - 22:00. Weekends 08:00 - 24:00.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="details">
              <TfiEmail className="icon" />
              <h3>Contact Us</h3>
              <p> P: +1 333 1000 2000. E: contact@example.com. </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
