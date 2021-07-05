import React, { useState } from "react";
import { WorkflowSetup } from "components";
function Workflows() {
  const [hide, setHide] = useState(false);
  return (
    <div>
      <div style={{ display: hide ? "none" : "" }}>
        <div>Current Workflows</div>
        <div onClick={() => setHide((prev) => !prev)}>Add New Workflow</div>
      </div>
      <div style={{ display: hide ? "" : "none" }}>
        <button onClick={() => setHide((prev) => !prev)}>hide</button>
        <WorkflowSetup />
      </div>
    </div>
  );
}

export default Workflows;
