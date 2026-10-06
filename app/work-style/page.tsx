import MainLayouts from "@/components/layouts/MainLayout";
import WorkStyleContainer from "@/features/work-style/container/WorkStyleContainer";
import React from "react";

const WorkStylePage: React.FC = () => {
  return (
    <MainLayouts>
      <WorkStyleContainer />
    </MainLayouts>
  );
};

export default WorkStylePage;
