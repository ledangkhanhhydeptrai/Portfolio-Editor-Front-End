import Image from "next/image";
import React from "react";

import SocialLinks from "./SocialLinks";

interface Profile {
  fullName: string;
  jobTitle: string;
  avatarUrl?: string;
  email: string;
  phone: string;
  location: string;
}

interface SocialLink {
  id: string;
  platform: string;
  iconUrl: string;
  url: string;
  displayOrder: number;
}

interface ContactCardProps {
  profile: Profile;
  socialLinks: SocialLink[];
}

const ContactCard: React.FC<ContactCardProps> = ({ profile, socialLinks }) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-[#222632]/80
        shadow-[0_30px_100px_-40px_rgba(0,0,0,0.9)]
        backdrop-blur-xl
      "
    >
      {/* PROFILE */}
      <div className="border-b border-white/8 p-6 sm:p-8">
        <div className="flex items-center gap-5">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:h-18 sm:w-18">
            {profile.avatarUrl && (
              <Image
                src={profile.avatarUrl}
                alt={profile.fullName}
                fill
                sizes="72px"
                className="object-cover"
              />
            )}
          </div>

          <div className="min-w-0">
            <p className="truncate text-lg font-semibold tracking-[-0.02em] text-white">
              {profile.fullName}
            </p>

            <p className="mt-1 text-sm text-white/45">{profile.jobTitle}</p>
          </div>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="divide-y divide-white/7">
        <a
          href={`mailto:${profile.email}`}
          className="group flex items-center justify-between gap-5 px-6 py-5 transition-colors hover:bg-white/3 sm:px-8"
        >
          <div className="min-w-0">
            <p className="font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.22em] text-white/30">
              Email
            </p>

            <p className="mt-2 truncate text-sm text-white/75">
              {profile.email}
            </p>
          </div>

          <Arrow />
        </a>

        <a
          href={`tel:${profile.phone}`}
          className="group flex items-center justify-between gap-5 px-6 py-5 transition-colors hover:bg-white/3 sm:px-8"
        >
          <div>
            <p className="font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.22em] text-white/30">
              Số điện thoại
            </p>

            <p className="mt-2 text-sm text-white/75">{profile.phone}</p>
          </div>

          <Arrow />
        </a>

        <div className="flex items-center justify-between gap-5 px-6 py-5 sm:px-8">
          <div>
            <p className="font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.22em] text-white/30">
              Tọa lạc
            </p>

            <p className="mt-2 text-sm text-white/75">{profile.location}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-[10px] text-white/35">Đang hoạt động</span>
          </div>
        </div>
      </div>

      <SocialLinks socialLinks={socialLinks} />
    </div>
  );
};

const Arrow: React.FC = () => {
  return (
    <span
      className="
        text-white/25
        transition-all
        duration-300
        group-hover:-translate-y-0.5
        group-hover:translate-x-0.5
        group-hover:text-[#9BADFF]
      "
    >
      ↗
    </span>
  );
};

export default ContactCard;
