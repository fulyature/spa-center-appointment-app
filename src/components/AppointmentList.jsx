import { Container, Row, Col } from "react-bootstrap";

import { RiDeleteBack2Line } from "react-icons/ri";

const AppoinmentList = ({ apps, setApps }) => {
  console.log(apps);
  const handleDelete = (id) => {
    setApps();
  };
  return (
    <Container className="p-2">
      <h3 className="display-6" style={{ color: "#DFD7BF" }}>
        Appointment List
      </h3>

      {apps.map(({ id, patient, consulted, day, proficient }) => (
        <div
          key={id}
          className={consulted ? "appoinments consulted" : "appoinments"}
        >
          <Row
            className="justify-content-between align-item-center"
            style={{ color: "#DFD7BF" }}
          >
            <Col xs={12} sm={12} md={6}>
              <h4>{patient}</h4>
              <h5>{proficient}</h5>
            </Col>
            <Col>{day}</Col>
            <Col className="text-end">
              <RiDeleteBack2Line
                className="text-danger fs-2"
                type="button"
                onClick={handleDelete(id)}
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppoinmentList;
