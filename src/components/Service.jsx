import AddModal from "./AddModal";
import Container from "react-bootstrap/Container";
import { serviceData } from "../helper/data";
import { Row, Col } from "react-bootstrap";

const Service = () => {
  console.log(serviceData);
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-" style={{ color: "#7a7672" }}>
        OUR SERVICES
      </h3>

      <Row>
        {serviceData.map((item) => {
          console.log(item, "item");
          return (
            <Col xs={6} sm={4} md={3}>
              <img src={item.img} alt={item.name} className="img-thumbnail" />
              <h5>{item.name}</h5>
              <h6>{item.service}</h6>
            </Col>
          );
        })}
      </Row>

      <AddModal />
    </Container>
  );
};
export default Service;
