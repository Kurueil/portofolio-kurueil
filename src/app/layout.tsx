import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-quicksand",
});


export const metadata: Metadata = {
  title: "Angga Pradita - Web Developer & UI/UX Designer | Portofolio Kurueil",
  description: "Portfolio website of Angga Pradita (Kurueil), a passionate Software Engineering student specializing in web development, UI/UX design, and modern technologies like React, Next.js, and Laravel.",
  keywords: ["Angga Pradita", "Kurueil", "Web Developer", "UI/UX Designer", "Portfolio", "Next.js", "React", "TypeScript", "Tailwind CSS", "Software Engineering"],
  authors: [{ name: "Angga Pradita", url: "https://github.com/Kurueil" }],
  creator: "Angga Pradita",
  publisher: "Angga Pradita",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portofolio-kurueil.vercel.app",
    title: "Angga Pradita - Web Developer & UI/UX Designer",
    description: "Portfolio showcasing web development projects, UI/UX designs, and technical skills in modern web technologies.",
    siteName: "Portofolio Kurueil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angga Pradita - Web Developer & UI/UX Designer",
    description: "Portfolio showcasing web development projects, UI/UX designs, and technical skills.",
    creator: "@Kurueil",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} font-quicksand antialiased`}
      >

        {children}
      </body>
    </html>
  );
}
