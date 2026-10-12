export interface Demo {
  name: string;
  file: string;
  available: boolean;
  /** When true, demo requests are fulfilled manually by the owner:
      no approve link, no download link, no file served. */
  manualFulfillment?: boolean;
}

export const DEMOS: Record<string, Demo> = {
  "bizko-market": {
    name: "بیزکو مارکت",
    file: "/api/download/bizko-market",
    available: false,
  },
  bizcofood: {
    name: "بیزکوفود",
    file: "/api/download/bizcofood",
    available: true,
  },
  "bizcofood-mobile": {
    name: "بیزکوفود نسخه موبایل",
    file: "",
    available: true,
    manualFulfillment: true,
  },
};

export function isDemoAvailable(product: string): boolean {
  return Object.hasOwn(DEMOS, product) && DEMOS[product].available === true;
}

export const OWNER_EMAIL = "bizkogroups@gmail.com";
export const BASE_URL = "https://bizko.ir";