import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function AddModal({ show, handleClose, apps, setApps, proficient }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const handleSubmit = (e) => {
    e.preventDefault();

    //diziye obje ekliyoruz. bu yüzden spread yönt. ile diziyi açıyoruz. yeni objeyi süslünün içind eyazıcaz olması gerekenleri
    setApps([
      ...apps,
      {
        id: apps.length + 1,
        patient: name,
        day: date,
        consulted: false,
        proficient: proficient,
      },
    ]);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-warning" closeButton>
          <Modal.Title className="text-danger">
            Appoinment for {proficient}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date"
                required
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="success" type="submit" className="me-2">
                Save
              </Button>
              <Button variant="danger">Close</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
