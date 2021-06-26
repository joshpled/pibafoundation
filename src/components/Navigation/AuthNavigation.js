import React from "react";
import { Image } from "react-bootstrap";
import favicon96 from "../../assets/images/favicon-96.png";

function AuthNavigation() {
  return (
    <div className="auth-navigation">
      <Image src={favicon96} />
    </div>
  );
}

export default AuthNavigation;
