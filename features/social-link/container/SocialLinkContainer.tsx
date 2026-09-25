"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { getLinkRequest } from "../socialLinkSlice";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

import SocialLinkBackground from "../components/SocialLinkBackground";
import SocialLinkHeader from "../components/SocialLinkHeader";
import SocialLinkGrid from "../components/SocialLinkGrid";
import SocialLinkEmpty from "../components/SocialLinkEmpty";

export default function SocialLinkContainer() {
  const dispatch = useAppDispatch();

  const { data, loading, error } = useAppSelector((state) => state.socialLink);

  React.useEffect(() => {
    dispatch(getLinkRequest());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  const socialLinks = [...(data ?? [])].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1B1E29] px-6 py-24 text-[#F0EFEA] lg:px-10">
      <SocialLinkBackground />

      <div className="relative z-10 mx-auto w-full max-w-350">
        <SocialLinkHeader total={socialLinks.length} />

        {socialLinks.length > 0 ? (
          <SocialLinkGrid socialLinks={socialLinks} />
        ) : (
          <SocialLinkEmpty />
        )}
      </div>
    </section>
  );
}
