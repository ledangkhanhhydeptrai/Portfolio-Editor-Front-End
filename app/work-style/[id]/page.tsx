import MainLayouts from "@/components/layouts/MainLayout";
import WorkStyleContainerById from "@/features/work-style/container/WorkStyleContainerById";
import React from "react";

const WorkStyleIdPage: React.FC = () => {
  return (
    <MainLayouts>
      <WorkStyleContainerById />
    </MainLayouts>
  );
};

export default WorkStyleIdPage;
