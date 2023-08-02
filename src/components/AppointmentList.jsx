import { Container, Row, Col } from "react-bootstrap";

import { RiDeleteBack2Line } from "react-icons/ri";

const AppoinmentList = ({ apps }) => {
  console.log(apps);
  return (
    <Container className="p-2">
      <h3 className="display-6" style={{ color: "#DFD7BF" }}>
        Appointment List
      </h3>

      {apps.map(({ id, customer, consulted, day, proficient }) => (
        <div
          key={id}
          className={consulted ? "appoinments consulted" : "appoinments"}
        >
          <Row style={{ color: "#DFD7BF" }}>
            <Col>
              <h4>{customer}</h4>
              <h5>{proficient}</h5>
            </Col>
            {/* <Col>{day}</Col> */}
            <Col>
              <RiDeleteBack2Line className="text-danger fs-2" />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppoinmentList;
