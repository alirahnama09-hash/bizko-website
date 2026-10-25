// Site-wide constants used by structured data and trust pages.
// TODO: Replace the empty social URLs with the real profile URLs before
// launch. Do not invent URLs; empty entries are omitted automatically.
export const SOCIAL_LINKS: Record<string, string> = {
  instagram: "",
  telegram: "",
  linkedin: "",
  x: "",
};

export const sameAs: string[] = Object.values(SOCIAL_LINKS).filter(Boolean);

// TODO: Update this whenever the home page content changes.
export const SITE_LAST_UPDATED = "2026-10-24";

export const SITE_LAST_UPDATED_LABEL = new Intl.DateTimeFormat(
  "fa-IR-u-ca-persian",
  { year: "numeric", month: "long", day: "numeric" }
).format(new Date(`${SITE_LAST_UPDATED}T12:00:00Z`));
