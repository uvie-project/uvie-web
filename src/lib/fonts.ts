import { Inter, Nunito } from "next/font/google";

// Nunito's rounded terminals match the "uvie" wordmark in the app icon.
export const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700", "800", "900"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});
