import React from "react";
import { PersonCard } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

function Employees() {
  return (
    <div>
      <div style={{ height: "fit-content" }}>
        <Button style={{ margin: "10px" }}>Add Employee</Button>
        <div className="employee-add-new">
          <FontAwesomeIcon icon="plus-circle" size="2x" />
        </div>
      </div>
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
  );
}

export default Employees;
