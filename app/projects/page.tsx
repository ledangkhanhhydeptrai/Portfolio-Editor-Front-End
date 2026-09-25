import React from "react";

import MainLayouts from "@/components/layouts/MainLayout";

import Loading from "@/components/ui/Loading";
import ProjectContainer from "@/features/project/container/projectContainer";

export default function ProjectPage() {
  return (
    <MainLayouts>
      <React.Suspense fallback={<Loading />}>
        <ProjectContainer />
      </React.Suspense>
    </MainLayouts>
  );
}
