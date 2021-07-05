import React, { useState } from "react";
import { WorkflowStep } from "components";

function WorkflowSetup() {
  const [steps, setSteps] = useState([]);
  const handleAddingSteps = () => {
    setSteps((prev) => {
      console.log(prev);
      return [...prev, <WorkflowStep />];
    });
  };
  return (
    <div>
      <button onClick={handleAddingSteps}>Add Step</button>
      {steps}
    </div>
  );
}

export default WorkflowSetup;
