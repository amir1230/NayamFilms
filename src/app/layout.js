import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Suspense } from "react";
import QueryProvider from "../lib/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nayam Films",
  description:
    "Nayam Films, with bases in Islamabad, Riyadh, and Dubai, offers comprehensive production and rental services. Our expertise spans the creation of feature films, TV commercials, corporate films, documentaries, branded entertainment, photo-shoots, event coverage, TV shows and animations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.svg" />
      </head>
      <body className={inter.className}>
        <Suspense>
          <QueryProvider>
            <Navbar />
            {children}
            <Footer />
          </QueryProvider>
        </Suspense>
      </body>
    </html>
  );
}
