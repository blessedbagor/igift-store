import { Metadata } from "next";
import {Outfit} from 'next/font/google';
import '@/assets/styles/global.css';
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({subsets: ['latin']});

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: `${APP_DESCRIPTION}`,
  metadataBase: new URL(SERVER_URL),
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className}`}>
        <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
        
        </body>
    </html>
  )
}
