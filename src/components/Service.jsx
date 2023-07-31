import AddModal from "./AddModal";
import Container from "react-bootstrap/Container";
import { serviceData } from "../helper/data";
import { Row, Col } from "react-bootstrap";

import { useState } from "react";

const Service = () => {
  const [show, setShow] = useState(false);

  const handleImgClick = () => {
    setShow(true);
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "#7a7672" }}>
        OUR SERVICES
      </h3>

      <Row className="flex-wrap">
        {serviceData.map((item) => {
          console.log(item, "item");
          return (
            <Col xs={6} sm={4} md={3}>
              <img
                src={item.img}
                alt={item.name}
                className="service-img"
                onClick={handleImgClick}
              />
              <h5>{item.name}</h5>
              <h6>{item.service}</h6>
            </Col>
          );
        })}
      </Row>

      <AddModal show={show} handleClose={() => setShow(false)} />
    </Container>
  );
};
export default Service;
