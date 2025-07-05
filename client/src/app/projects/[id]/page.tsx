import React, { useState } from "react";

type Props = {
  params: { id: string };
};

const Project = ({ params }: Props) => {
  const { id } = params;
  const { activeTab, setActiveTab } = useState("Board");
  const [isModelNewTaskOpen, setIsModelNewTaskOpen] = useState(false);
  return (
    <div>
      {/* MODAL NEW TASKS */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* {activeTab === "Board" && (
            <Board/>
        )} */}
    </div>
  );
};

export default Project;
