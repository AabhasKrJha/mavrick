import { Inter } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import config from "../config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: config.originalTitle,
    template: `%s | ${config.originalTitle}`,
  },
  description: config.originalDescription,
  openGraph: {
    type: 'website',
    title: config.originalTitle,
    description: config.originalDescription,
    url: config.currentURL,
    siteName: config.siteName,
    images: [
      {
        url: config.originalImage,
        alt: config.originalTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: config.social.twitter,
    title: config.originalTitle,
    description: config.originalDescription,
    images: [
      {
        url: config.originalImage,
        alt: config.originalTitle,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <div className="min-h-[100vh] flex flex-col">
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  );
}
