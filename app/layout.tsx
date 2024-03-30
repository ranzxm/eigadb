import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "EigaDB",
    template: "%s — EigaDB",
  },
  description:
    "EigaDB is your ultimate destination for movie and TV series enthusiasts seeking high-quality recommendations. With a comprehensive database covering thousands of titles, we offer an unparalleled experience in discovering entertainment tailored to your preferences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="min-h-[calc(100vh-56px)]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
