"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { getEducationRequest } from "../educationSlice";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

import EducationBackground from "../components/EducationBackground";
import EducationHeader from "../components/EducationHeader";
import EducationTimeline from "../components/EducationTimeline";
import EducationEmpty from "../components/EducationEmpty";

const EducationContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const { data, loading, error } = useAppSelector((state) => state.education);

  React.useEffect(() => {
    dispatch(getEducationRequest());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  const educations = [...(data ?? [])].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1B1E29] px-6 py-24 text-[#F0EFEA] lg:px-10">
      <EducationBackground />

      <div className="relative z-10 mx-auto w-full max-w-350">
        <EducationHeader total={educations.length} />

        {educations.length > 0 ? (
          <EducationTimeline educations={educations} />
        ) : (
          <EducationEmpty />
        )}
      </div>
    </section>
  );
};

export default EducationContainer;
