import { Col, Row } from "react-bootstrap";
import caramel_late from "../../assets/caramel-late.png";
import mocha_late from "../../assets/mocha-late-2.png";
import "./Welcome.scss";

export const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="container">
        <div className="welcome-title">
          <h3 data-aos="fade-up" data-aos-duration="500">
            Welcome to
          </h3>
          <span data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
            Stradale
          </span>
          <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
            Lorem ipsum aute enim pariatur ea culpa nulla ut laborum sint nisi
            laborum culpa ea enim do qui ea deserunt amet proident cillum tempor
            fugiat magna aliquip sed cillum ullamco sit adipisicing ut velit
            nulla aliqua.
          </p>
        </div>
        <Row className="overflow-hidden">
          <Col lg={6} className="overflow-hidden">
            <div className="overflow-hidden">
              <div className="limited-product-1">
                <img src={mocha_late} alt="" className="img-fluid" />
                <div className="product-details">
                  <h4>Mocha Latte</h4>
                  <h3>
                    Buy 1 <span>Get 1</span>
                  </h3>
                  <button>Order Now</button>
                  <p>*Limited time offer</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="overflow-hidden">
            <div className="limited-product-2">
              <img src={caramel_late} alt="" className="img-fluid" />
              <div className="product-details">
                <h4>Caramel Latte</h4>
                <h3>
                  Free <span>Upsize</span>
                </h3>
                <button>Order Now</button>
                <p>*Limited time offer</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
