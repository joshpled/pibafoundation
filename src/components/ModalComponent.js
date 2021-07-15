import React from "react";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { NewVolunteer, EmployeeForm } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ModalComponent({ show, handleClose, form, update, person, forceUpdate, permissions }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="modalcontainer">
        <div style={{ padding: "30px" }}>
          {form === "volunteer" && <NewVolunteer />}
          {form === "employee" && (
            <EmployeeForm update={update} employeeObj={person} handleClose={handleClose} forceUpdate={() => forceUpdate()} permissions={permissions} />
          )}

          <OverlayTrigger
            key="left"
            placement="left"
            overlay={
              <Tooltip id={`tooltip-left`}>
                <strong>Close</strong>
              </Tooltip>
            }
          >
            <FontAwesomeIcon
              icon="times-circle"
              onClick={handleClose}
              style={{ float: "right", position: "absolute", right: "0", top: "0", margin: "10px 10px 0 0", cursor: "pointer" }}
            />
          </OverlayTrigger>
        </div>
      </Modal>
    </>
  );
}

export default ModalComponent;
