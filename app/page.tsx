import { Metadata } from "next";
import HomePageContent from "./page.content";

export const metadata: Metadata = {
  title: "Shrinkr",
  description: "A URL shortener",
  openGraph: {
    type: "website",
    url: "https://Shrinkr.cantcode.fyi",
    title: "Shrinkr",
    description: "A URL shortener",
  },
};

export default function Home() {
  return (
    <main>
      <HomePageContent />
    </main>
  );
}
