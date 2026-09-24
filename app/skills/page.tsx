import React, {
  Suspense,
} from "react";

import MainLayouts from "@/components/layouts/MainLayout";

import SkillContainer from "@/features/skill/container/SkillContainer";

import Loading from "@/components/ui/Loading";

export default function SkillPage() {
  return (
    <MainLayouts>
      <Suspense
        fallback={
          <Loading />
        }
      >
        <SkillContainer />
      </Suspense>
    </MainLayouts>
  );
}