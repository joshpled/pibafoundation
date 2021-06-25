import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PersonCard() {
  return (
    <>
      <Card style={{ width: "14em", margin: "10px", alignItems: "center", paddingTop: "10px" }}>
        <Card.Img
          variant="top"
          src="https://i.imgur.com/5YAGklB.jpeg/100px180"
          style={{ borderBottom: "solid 2px lightgray", borderRadius: "10%", width: "50%" }}
        />
        <Card.Body>
          <Card.Text as="div">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: "30px", color: "gray" }}>
                <FontAwesomeIcon icon="wrench" size="2x" />
              </div>
              <div style={{ width: "100%", textAlign: "right" }}>Current Updates</div>
            </div>
            <hr />
            <div style={{ textAlign: "center" }}>Most recent updates</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default PersonCard;
