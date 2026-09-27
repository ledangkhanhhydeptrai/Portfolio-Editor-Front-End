import React from "react";

interface ContactIntroProps {
  shortDescription: string;
  email: string;
  cvUrl: string;
}

const ContactIntro: React.FC<ContactIntroProps> = ({
  shortDescription,
  email,
  cvUrl
}) => {
  return (
    <div>
      <div className="mb-7 flex items-center gap-3">
        <span className="h-px w-10 bg-[#8EA5FF]" />

        <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.28em] text-[#9BADFF]">
          Contact
        </span>
      </div>

      <h2 className="max-w-150 text-5xl font-semibold leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl">
        Let&apos;s create
        <span className="block text-white/35">something together.</span>
      </h2>

      <p className="mt-7 max-w-135 text-sm leading-7 text-white/55 sm:text-base">
        {shortDescription}
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={`mailto:${email}`}
          className="
            inline-flex
            min-h-12
            items-center
            justify-center
            rounded-xl
            bg-[#8EA5FF]
            px-6
            text-sm
            font-medium
            text-[#11131A]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#A4B5FF]
          "
        >
          Gửi Email
          <span className="ml-3">↗</span>
        </a>

        {cvUrl && (
          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              min-h-12
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/4
              px-6
              text-sm
              font-medium
              text-white/75
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/7
              hover:text-white
            "
          >
            Xem CV
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactIntro;
