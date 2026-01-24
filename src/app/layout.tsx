import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";

export const metadata: Metadata = {
  title: "E-Commerce Store | Buy the Best Products Online",
  description: "Shop high-quality products with fast delivery and secure payments.",
  metadataBase: new URL("https://your-domain.com"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "E-Commerce Store",
    description: "Shop high-quality products with fast delivery and secure payments.",
    url: "https://your-domain.com",
    siteName: "E-Commerce Store",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Store Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Store",
    description: "Shop high-quality products with fast delivery and secure payments.",
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <nav>
          <Navbar />
        </nav>
        <main id="main-content">
          {children}
        </main>
        <footer role="contentinfo">
          <Footer/>
        </footer>
      </body>
    </html>
  );
}