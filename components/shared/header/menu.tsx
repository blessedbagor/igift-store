import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { 
    AlignJustify, 
    ShoppingBag, 
    ArrowUpRight
} from "lucide-react";
import { 
    Sheet, 
    SheetContent, 
    SheetDescription, 
    SheetTitle, 
    SheetTrigger 
} from "@/components/ui/sheet";
import UserButton from "./user-button";
// import { getMyCart } from "@/lib/actions/cart.actions";

const Menu = () => {
    // const cart = getMyCart();

    return <div className="flex justify-end gap-3">
        <nav className="hidden md:flex w-full max-w xs gap-1">
        <ModeToggle />
            <Button asChild variant='ghost'>
                <Link href='/cart'>
                    <ShoppingBag /> 
                </Link>
            </Button>
            {/* <Button asChild variant="ghost">
                <Link href="/cart" className="relative">
                <ShoppingBag />
                     <span
                        className="absolute -top-2 -right-2 bg-yellow-700 text-white text-xs font-bold rounded-full px-2 py-0.5"
                         >
                        {cart.reduce((a,c) => a + c.qty, 0)}
                    </span>
                </Link>
            </Button> */}

            <UserButton/>
            <Button asChild>
                <Link 
                href='https://igiftmit.com/' 
                target='_blank'
                rel='noopener noreferrer'>
                DISTRIBUTOR&apos;S LOGIN<ArrowUpRight />
                </Link>
            </Button>
        </nav>
        <nav className="md:hidden">
        <Sheet>
            <SheetTrigger className='align-middle'>
                <AlignJustify/>
            </SheetTrigger>
            <SheetContent className='flex flex-col items-start'>
            <SheetTitle>Menu</SheetTitle>
                <ModeToggle />
                <Button asChild variant='ghost'>
                    <Link href='/cart'>
                    <ShoppingBag /> Cart
                    </Link>
                </Button>
                <UserButton />
            <Button asChild>
                <Link 
                href='https://igiftmit.com/' 
                target='_blank'
                rel='noopener noreferrer'>
                 DISTRIBUTOR&apos;S LOGIN<ArrowUpRight />
                </Link>
            </Button>
            <SheetDescription></SheetDescription>
            </SheetContent>
        </Sheet>
        </nav>
    </div>;
}
 
export default Menu;