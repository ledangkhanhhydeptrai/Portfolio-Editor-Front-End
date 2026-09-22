const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_CONFIG = {
  BASE_URL: API_URL ? API_URL.replace(/\/$/, "") : "http://localhost:8080",

  ENDPOINTS: {
    PROFILE: "/profile",
    PROJECTS: "/projects",
    SKILLS: "/skill",
    EXPERIENCES: "/experience",
    EDUCATIONS: "/education",
    SOCIAL_LINKS: "/social_link"
  }
} as const;
