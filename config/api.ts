const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_CONFIG = {
  BASE_URL: API_URL ? API_URL.replace(/\/$/, "") : "http://localhost:8080",

  ENDPOINTS: {
    PROFILE: "/public/profile",
    PROJECTS: "/public/projects",
    SKILLS: "/public/skill",
    EXPERIENCES: "/public/experience",
    EDUCATIONS: "/public/education",
    SOCIAL_LINKS: "/public/social_link"
  }
} as const;
