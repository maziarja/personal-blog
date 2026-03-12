import type { Metadata } from "next";
import { DM_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/shared/Navbar";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/shared/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal blog",
  description:
    "A personal space to share insights, experiences, and ideas on technology, lifestyle, and creativity. Explore thoughtful articles, tutorials, and reflections designed to inspire, inform, and spark curiosity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${firaCode.variable} ${dmSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-2xl">
            <div className="mx-4 mt-4 md:mt-5">
              <Navbar />
            </div>
            <div className="border-border mx-5 border-x px-2.5 pt-8 pb-4">
              {children}
              <div className="space-y-4">
                <Separator />
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
