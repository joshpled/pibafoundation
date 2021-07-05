import React from "react";
import { UserEmailPassword } from "components";

function UserSettings() {
  return (
    <div className="usersettings-wrapper">
      <div className="usersettings-emailpassword">
        <UserEmailPassword />
      </div>
    </div>
  );
}

export default UserSettings;
