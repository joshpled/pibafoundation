import React, { useState } from "react";
import { ModalComponent } from "components";
import { Button, Container } from "react-bootstrap";

function Volunteers() {
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  return (
    <Container className="volunteer-wrapper">
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <ModalComponent show={show} handleShow={handleShow} handleClose={handleClose} />
    </Container>
  );
}

export default Volunteers;
