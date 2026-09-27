"use client";

import React from "react";

import ErrorMessage from "@/components/ui/ErrorMessage";
import Loading from "@/components/ui/Loading";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { getProfileRequest } from "../profile/profileSlice";
import { getLinkRequest } from "../social-link/socialLinkSlice";

import ContactBackground from "./components/ContactBackground";
import ContactCard from "./components/ContactCard";
import ContactIntro from "./components/ContactIntro";

const ContactContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    data: profileData,
    loading: loadingProfile,
    error: errorProfile
  } = useAppSelector((state) => state.profile);

  const {
    data: socialLinkData,
    loading: socialLoading,
    error: socialError
  } = useAppSelector((state) => state.socialLink);

  React.useEffect(() => {
    dispatch(getProfileRequest());
    dispatch(getLinkRequest());
  }, [dispatch]);

  const loading = loadingProfile || socialLoading;

  const error = errorProfile || socialError;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  const profile = Array.isArray(profileData) ? profileData[0] : profileData;

  const socialLinks = Array.isArray(socialLinkData)
    ? [...socialLinkData].sort((a, b) => a.displayOrder - b.displayOrder)
    : [];

  if (!profile) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-[#1B1E29]">
        <p className="text-sm text-white/50">Không có thông tin liên hệ</p>
      </div>
    );
  }

  return (
    <section className="relative min-h-dvh w-full overflow-hidden bg-[#1B1E29] text-[#F0EFEA]">
      <ContactBackground />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-dvh
          w-full
          max-w-7xl
          grid-cols-1
          gap-12
          px-5
          py-20
          sm:px-8
          md:px-10
          lg:grid-cols-[0.9fr_1.1fr]
          lg:items-center
          lg:gap-20
          lg:px-12
          xl:px-14
        "
      >
        <ContactIntro
          shortDescription={profile.shortDescription}
          email={profile.email}
          cvUrl={profile.cvUrl}
        />

        <ContactCard profile={profile} socialLinks={socialLinks} />
      </div>
    </section>
  );
};

export default ContactContainer;
