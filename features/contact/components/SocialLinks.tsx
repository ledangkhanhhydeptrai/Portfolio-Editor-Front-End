import { SocialLinkProps } from "@/features/social-link/socialLinkTypes";
import Image from "next/image";
import React from "react";

interface SocialLinksProps {
  socialLinks: SocialLinkProps[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks }) => {
  if (socialLinks.length === 0) {
    return null;
  }

  return (
    <div className="border-t border-white/8 p-6 sm:p-8">
      <p className="mb-4 font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.24em] text-white/30">
        Find me online
      </p>

      <div className="flex flex-wrap gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="
              group
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-white/3
              px-4
              py-3
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#8EA5FF]/40
              hover:bg-[#8EA5FF]/7
            "
          >
            <div className="relative h-7 w-7 overflow-hidden rounded-lg bg-white/5">
              {social.iconUrl && (
                <Image
                  src={social.iconUrl}
                  alt={social.platform}
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              )}
            </div>

            <span className="text-xs font-medium text-white/65 transition-colors group-hover:text-white">
              {social.platform}
            </span>

            <span className="text-xs text-white/25 transition-colors group-hover:text-[#9BADFF]">
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
