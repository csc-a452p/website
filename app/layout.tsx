import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const notoserif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: {
    template: "%s - 情報工学同好会 (非公認)",
    default: "情報工学同好会 (非公認)"
  },
  description: "高専生によって作られた同人グループ「沼津高専 情報工学同好会 (非公認)」の公式サイトです",
  authors: [],
  openGraph: {
    images: [
      {
        url: "https://csc.nikachu.net/ogp.png",  // Must be an absolute URL
        width: 1200,
        height: 675,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '情報工学同好会 (非公認)',
    description: '高専生によって作られた同人グループ「沼津高専 情報工学同好会 (非公認)」の公式サイトです',
    creator: '@csc_a452p',
    images: ["https://csc.nikachu.net/ogp.png"], // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoserif.variable} antialiased bg-[#191919] text-white`}
      >
        <div className="w-full md:w-[800px] p-3 md:m-auto md:p-0">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
