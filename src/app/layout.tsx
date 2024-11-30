import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import ConferenceFooter from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI in Biomedical Research Conference",
  description:
    "Exploring the Intersection of AI, Machine Learning, and Cutting-Edge Medical Research",
  keywords: [
    "AI",
    "Machine Learning",
    "Biomedical Research",
    "Drug Development",
    "Conference",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          `${geistSans.variable} ${geistMono.variable} antialiased` +
          " bg-white "
        }
      >
        <Header />
        {children}
        <ConferenceFooter />
      </body>
    </html>
  );
}
