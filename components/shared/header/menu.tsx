import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import UserButton from "./user-button";
import CartCount from "./cart-count";
import { getMyCart } from "@/lib/actions/cart.actions";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Product", link: "/products" },
  { name: "Earn", link: "/earn" },
  { name: "Services", link: "/services" },
  { name: "Token", link: "/token" },
  { name: "Centers", link: "/centers" },
  { name: "Events", link: "/events" },
  { name: "Resources", link: "/resources" },
  { name: "Contact", link: "/contact" },
];

const Menu = async () => {
    const cart = await getMyCart();

    return (
        <div className="flex justify-end gap-3">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex w-full max-w-xs gap-1 items-center">
                <CartCount cart={cart} />
                <UserButton />
            </nav>
            
            {/* Mobile Navigation */}
            <nav className="lg:hidden">
                <Sheet>
                    <SheetTrigger className='align-middle'>
                    <AlignJustify />
                    </SheetTrigger>
                    <SheetContent className='flex flex-col items-start gap-2 p-4'>
                        <SheetTitle>Menu</SheetTitle>
                        <CartCount cart={cart} />
                        {navItems.map((item) => (
                            <a key={item.link} href={item.link} className="py-2 px-3 text-lg hover:underline uppercase font-semidbold">
                                {item.name}
                            </a>
                        ))}
                        <UserButton />
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
};

export default Menu;
