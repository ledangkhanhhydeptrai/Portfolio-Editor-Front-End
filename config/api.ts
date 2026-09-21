const API_URL = process.env.NEXT_PUBLIC_API_URL;
if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined in .env.local");
}
export const API_CONFIG = {
  BASE_URL: API_URL,

  ENDPOINTS: {
    PROFILE: "/profile",
    PROJECTS: "/projects",
    SKILLS: "/skill",
    EXPERIENCES: "/experience",
    EDUCATIONS: "/education",
    SOCIAL_LINKS: "/social_link"
  }
} as const;
