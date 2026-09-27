import React from "react";

const ContactBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-40 top-10 h-100 w-100 rounded-full bg-[#6F8CFF]/10 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-100 w-100 rounded-full bg-[#9B8CFF]/10 blur-3xl" />

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-size-[28px_28px]
          opacity-20
        "
      />
    </div>
  );
};

export default ContactBackground;
