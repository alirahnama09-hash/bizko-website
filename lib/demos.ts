export const DEMOS: Record<string, { name: string; file: string }> = {
  "bizko-market": {
    name: "بیزکو مارکت",
    file: "/api/download/bizko-market",
  },
  bizcofood: {
    name: "بیزکوفود",
    file: "/api/download/bizcofood",
  },
};

export const OWNER_EMAIL = "bizkogroups@gmail.com";
export const BASE_URL = "https://bizko.ir";
export const EMAIL_FROM = process.env.RESEND_FROM ?? "onboarding@resend.dev";