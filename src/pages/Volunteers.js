import React, { useState } from "react";
import { ModalComponent } from "components";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Volunteers() {
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  return (
    <Container className="volunteer-wrapper">
      <div style={{ height: "fit-content" }}>
        <div className="employee-add-new" onClick={handleShow}>
          <FontAwesomeIcon icon="plus-circle" size="2x" />
        </div>
      </div>
      <ModalComponent show={show} handleShow={handleShow} handleClose={handleClose} form="volunteer" />
    </Container>
  );
}

export default Volunteers;
