import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";

const InterFont = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Nibi",
  description: "Taxi Tv to Grow your Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterFont.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
