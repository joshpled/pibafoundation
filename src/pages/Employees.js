import React, { useState } from "react";
import { PersonCard, ModalComponent } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Employees() {
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);

  return (
    <div>
      <div style={{ height: "fit-content" }}>
        <div className="employee-add-new" onClick={handleShow}>
          <FontAwesomeIcon icon="plus-circle" size="2x" />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="slide-in-right">
          <PersonCard
            userData={{
              name: "Josh",
              position: "Software Engineer",
              email: "joshuapleduc@gmail.com",
              phone: "727.316.3996",
              permissions: "Admin",
            }}
          />
        </div>
        <div className="slide-in-right" style={{ animationDelay: ".1s" }}>
          <PersonCard
            userData={{
              name: "Josh",
              position: "Software Engineer",
              email: "joshuapleduc@gmail.com",
              phone: "727.316.3996",
              permissions: "Admin",
            }}
          />
        </div>
        <div className="slide-in-right" style={{ animationDelay: ".2s" }}>
          <PersonCard
            userData={{
              name: "Josh",
              position: "Software Engineer",
              email: "joshuapleduc@gmail.com",
              phone: "727.316.3996",
              permissions: "Admin",
            }}
          />
        </div>
      </div>
      <ModalComponent show={show} handleShow={handleShow} handleClose={handleClose} form="employee" />
    </div>
  );
}

export default Employees;
