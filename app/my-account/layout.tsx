import Footer from "@/components/footer";
import SideNav from "@/components/shared/user/side-nav";

export default function AccountLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex h-screen flex-col">
        <SideNav />
        <main className="flex-1 wrapper">
            {children}
        </main>
        <Footer /> 
      </div>
    )
  }