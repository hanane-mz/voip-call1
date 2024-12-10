import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/layout/NavBar";
import Container from "@/components/layout/Container";
import SocketProvider from "@/providers/SocketProvide";
import { cn } from "@/lib/utils";

const inter  = Inter({ subsets : ["latin"] });


export const metadata: Metadata = {
  title: "VidChat",
  description: "video call",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={cn(inter.className, 'ralative')}>
        <SocketProvider> 
          <main className="flex flex-col min-h-screen bg-secondary">
            <NavBar />
              <Container>
                {children}
              </Container>
            </main>
        </SocketProvider>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
