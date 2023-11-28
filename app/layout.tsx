import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { WalletContextProvider } from "./context/wallet";
import WagmiMagic from "./libs/WagmiMagic";
import ThemeRegistry from "@/theme/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enmaar",
  description: "An communtiy App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeRegistry>
        <WalletContextProvider>
          <WagmiMagic>{children}</WagmiMagic>
        </WalletContextProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
