const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_CONFIG = {
  BASE_URL: API_URL ? API_URL.replace(/\/$/, "") : "http://localhost:8080",

  ENDPOINTS: {
    PUBLIC: {
      PROFILE: "/public/profile",
      PROJECTS: "/public/projects",
      SKILLS: "/public/skill",
      EXPERIENCES: "/public/experience",
      EDUCATIONS: "/public/education",
      SOCIAL_LINKS: "/public/social_link",
      VIDEO_PROJECT: "/public/video",
    },

    USER: {
      PROFILE: "/user/profile",
      PROJECTS: "/user/projects",
      SKILLS: "/user/skill",
      EXPERIENCES: "/user/experience",
      EDUCATIONS: "/user/education",
      SOCIAL_LINKS: "/user/social_link",
      VIDEO_PROJECT: "/user/video",
    },
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },
} as const;
