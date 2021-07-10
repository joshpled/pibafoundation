import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PersonCard({ userData, handleUpdate }) {
  const { name, position, email, phone, permissions, photo } = userData;

  return (
    <>
      <Card style={{ width: "14em", margin: "10px", alignItems: "center", paddingTop: "10px" }}>
        <div className="employeeCog-PersonCard" onClick={() => handleUpdate(userData)}>
          <FontAwesomeIcon icon="cog" />
        </div>
        <Card.Img
          variant="top"
          src={photo}
          style={{ borderBottom: "solid 2px lightgray", borderRadius: "10%", width: "120px", height: "120px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Text as="div">
            <div style={{ width: "100%", textAlign: "center" }}>{name}</div>
            <hr />
            <div className="user-details">{position}</div>
            <div className="user-details">{email}</div>
            <div className="user-details">{phone}</div>
            <div className="user-details">{permissions}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default PersonCard;
