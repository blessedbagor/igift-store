import Footer from "@/components/footer";
import Header from "@/components/shared/header";

export default function ShopLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex h-screen flex-col">
        <Header />
        <main className="max-w-7xl mx-auto flex-1 p-4">
            {children}
        </main>
        <Footer /> 
      </div>
    )
  }