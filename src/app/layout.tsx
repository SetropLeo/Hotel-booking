import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/layout/NavBar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BeGuest",
  description: "Book a hotel of your coice.",
  icons: { icon: "/website-icon.svg" },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="flex flex-col min-h-screen bg-secondary">
              <NavBar />
              <section className="flex-grow">{children}</section>
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
