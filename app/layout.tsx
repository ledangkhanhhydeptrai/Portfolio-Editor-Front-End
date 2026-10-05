import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio-Editor",
  description: "Video Editor Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
