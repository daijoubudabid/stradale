import { Col, Row } from "react-bootstrap";
import gallery_1 from "../../assets/gallery-1.jpeg";
import gallery_2 from "../../assets/gallery-2.jpeg";
import gallery_3 from "../../assets/gallery-3.jpeg";
import gallery_4 from "../../assets/gallery-4.jpeg";
import "./GalleryItem.scss";

export const GalleryItem = () => {
  return (
    <div className="container-fluid">
      <Row>
        <Col md={3} className="p-0">
          <div className="gallery-item">
            <div className="image-section">
              <img src={gallery_1} alt="Gallery 1" />
              <div className="text-section">
                <span>Fresh Ingredients</span>
              </div>
            </div>
          </div>
        </Col>
        <Col md={3} className="p-0">
          <div className="gallery-item">
            <div className="image-section">
              <img src={gallery_2} alt="Gallery 2"/>
              <div className="text-section">
                <span>Authentic Taste</span>
              </div>
            </div>
          </div>
        </Col>
        <Col md={3} className="p-0">
          <div className="gallery-item">
            <div className="image-section">
              <img src={gallery_3} alt="Gallery 3" />
              <div className="text-section">
                <span>Cozy Atmosphere</span>
              </div>
            </div>
          </div>
        </Col>
        <Col md={3} className="p-0">
          <div className="gallery-item">
            <div className="image-section">
              <img src={gallery_4} alt="Gallery 4" />
              <div className="text-section">
                <span>Live Music</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
