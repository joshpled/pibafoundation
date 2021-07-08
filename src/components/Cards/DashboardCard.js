import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DashboardCards({ title, icon, detailsData }) {
  return (
    <>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Body>
          <Card.Text as="div">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "30px", color: "gray" }}>
                <FontAwesomeIcon icon={icon} size="2x" />
              </div>
              <div style={{ width: "100%", textAlign: "right" }}>{title}</div>
            </div>
            <hr />
            <div style={{ textAlign: "center" }}>{detailsData}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default DashboardCards;
