import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://biruk-portfolio.vercel.app"),
  title: "Biruk Ayele",
  description:
    "Portfolio of Biruk Ayele Birhanu - Full-Stack Web Developer, ERPNext Developer, and Odoo Developer.",
  icons: {
    icon: "/images/profile/BirukFavicon.png",
  },
  keywords: [
    "Biruk Ayele",
    "Full-Stack Developer",
    "ERPNext Developer",
    "Odoo Developer",
    "React",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: "Biruk Ayele Birhanu" }],
  openGraph: {
    title: "Biruk Ayele",
    description:
      "Explore projects, experiences, and technical skills of Biruk Ayele.",
    url: "https://biruk-portfolio.vercel.app",
    siteName: "Biruk Ayele Portfolio",
    images: [
      {
        url: "/images/profile/Biruk.jpg",
        width: 800,
        height: 800,
        alt: "Biruk Ayele Birhanu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#f5f5f5] text-[#4e4e4e] flex flex-col font-sans selection:bg-[#0078ff] selection:text-white"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
