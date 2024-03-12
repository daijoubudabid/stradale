import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import gallery_1 from "../../assets/gallery-1.jpeg";
import gallery_2 from "../../assets/gallery-2.jpeg";
import gallery_3 from "../../assets/gallery-3.jpeg";
import gallery_4 from "../../assets/gallery-4.jpeg";
import gallery_5 from "../../assets/gallery-5.jpg";
import gallery_6 from "../../assets/gallery-6.jpg";
import "./Gallery.scss";

const galleryImages = [
  { id: 1, img: gallery_1 },
  { id: 2, img: gallery_2 },
  { id: 3, img: gallery_3 },
  { id: 4, img: gallery_4 },
  { id: 5, img: gallery_5 },
  { id: 6, img: gallery_6 },
];

export const Gallery = () => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (img) => {
    setSelectedImage(img);
    setShow(true);
  };

  return (
    <div className="gallery-section container-fluid">
      <Row>
        {galleryImages.map((item) => (
          <Col key={item.id} md={4} className="p-0">
            <div className="gallery-image" onClick={() => handleShow(item.img)}>
              <img src={item.img} alt={`gallery-${item.id}`} />
              <h3 className="text-nowrap">Gallery Title</h3>
            </div>
          </Col>
        ))}
      </Row>

      <Modal
        className="modal"
        show={show}
        onHide={handleClose}
        centered
        size="lg"
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="selected-gallery"
            className="w-100"
          />
        )}
      </Modal>
    </div>
  );
};

export default Gallery;
