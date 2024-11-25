import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Inter-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Inter-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "Soarinc",
  description: "Dashboard for Soarinc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <div className="">
          <Header/>
          {children}
          </div>     
      </body>
    </html>
  );
}
