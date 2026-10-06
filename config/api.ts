const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8080/api";
if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not configured");
}
export const API_CONFIG = {
  BASE_URL: API_URL ? API_URL.replace(/\/$/, "") : "http://localhost:8080",

  ENDPOINTS: {
    PUBLIC: {
      PROFILE: "/public/profile",
      PROJECTS: "/public/projects",
      PROJECTS_ID: (id: string) => `/public/projects/${id}`,
      SKILLS: "/public/skill",
      SKILLS_BY_ID: (id: string) => `/public/skill/${id}`,
      EXPERIENCES: "/public/experience",
      EXPERIENCES_ID: (id: string) => `/public/experience/${id}`,
      EDUCATIONS: "/public/education",
      EDUCATIONS_ID: (id: string) => `/public/education/${id}`,
      SOCIAL_LINKS: "/public/social-link",
      SOCIAL_LINK_BY_ID: (id: string) => `/public/social-link/${id}`,
      VIDEO_PROJECT: "/public/video",
      VIDEO_PROJECT_BY_ID: (id: string) => `/public/video/${id}`,
      CURRICULUM_PUBLIC: "/public/CV",
      CURRICULUM_PUBLIC_ID: (id: string) => `/public/CV/${id}`,
    },

    USER: {
      PROFILE: "/user/profile",
      PROJECTS: "/user/project",
      PROJECTS_USER_ID: (id: string) => `/user/project/${id}`,
      SKILLS: "/user/skill",
      SKILLS_USER_BY_ID: (id: string) => `/user/skill/${id}`,
      EXPERIENCES: "/user/experience",
      EXPERIENCES_USER_ID: (id: string) => `/user/experience/${id}`,
      EDUCATIONS: "/user/education",
      EDUCATIONS_USER_ID: (id: string) => `/user/education/${id}`,
      SOCIAL_LINKS: "/user/social-link",
      SOCIAL_LINKS_USER_BY_ID: (id: string) => `/user/social-link/${id}`,
      VIDEO_PROJECT: "/user/video",
      VIDEO_PROJECT_USER_BY_ID: (id: string) => `/user/video/${id}`,
      USERPROFILE: "/user/profile",
      CURRICULUM_USER: "/user/CV",
      CURRICULUM_USER_ID: (id: string) => `/user/CV/${id}`,
    },
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    CHANGE_PASSWORD: "/auth/change-password",
    FORGOT_PASSWORD: "/auth/forgot-password",
    VERIFY_OTP: "/auth/verify-otp",
    RESET_PASSWORD: "/auth/reset-password",
  },
} as const;
console.log(
  "API_CONFIG.BASE_URL =",
  API_CONFIG.BASE_URL
);