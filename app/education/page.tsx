import MainLayouts from "@/components/layouts/MainLayout";
import EducationContainer from "@/features/education/container/EducationContainer";
import React from "react";

const EducationPage: React.FC = () => {
  return (
    <MainLayouts>
      <EducationContainer />
    </MainLayouts>
  );
};

export default EducationPage;
