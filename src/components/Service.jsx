import AddModal from "./AddModal";
import Container from "react-bootstrap/Container";
import { serviceData } from "../helper/data";
import { Row, Col } from "react-bootstrap";

import { useState } from "react";

const Service = ({ apps, setApps }) => {
  const [show, setShow] = useState(false);
  const [proficient, setProficient] = useState("");
  const handleImgClick = () => {
    setShow(true);
  };
  return (
    <Container className="p-1">
      <h3 className="display-6 mb-3" style={{ color: "#DFD7BF" }}>
        OUR SERVICES
      </h3>

      <Row
        className="flex-wrap justify-content-center"
        style={{ color: "#DFD7BF" }}
      >
        {serviceData.map(({ id, name, service, img }) => {
          return (
            <Col key={id} xs={6} sm={4} md={3}>
              <img
                src={img}
                alt={name}
                className="service-img"
                onClick={() => {
                  setProficient(name);
                  handleImgClick();
                }}
              />
              <h5>{name}</h5>
              <h6>{service}</h6>
            </Col>
          );
        })}
      </Row>

      <AddModal
        show={show}
        handleClose={() => setShow(false)}
        apps={apps}
        setApps={setApps}
        proficient={proficient}
      />
    </Container>
  );
};
export default Service;
