import React from "react";
import { PersonCard } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Employees() {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon="plus-circle" />
      </div>
      <PersonCard />
    </div>
  );
}

export default Employees;
