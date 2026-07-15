import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Interview Prep",
  description: "A web application to help you prepare for interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${lora.variable} ${dmSans.variable} font-sans `}
    >
      <body className="min-h-full flex flex-col">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
