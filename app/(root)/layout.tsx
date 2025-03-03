import Footer from "@/components/footer";
import { NavBar } from "@/components/shared/header/navbar";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex h-screen flex-col">
        <NavBar />
        <main >
            {children}
        </main>
        <Footer /> 
      </div>
    )
  }

  // className="flex-1 wrapper"