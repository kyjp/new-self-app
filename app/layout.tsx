import type { Metadata } from "next";
import {Noto_Sans_JP} from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/header/Header";

const noto = Noto_Sans_JP({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "自慢したっター",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${noto.className} antialiased h-full min-h-full`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
