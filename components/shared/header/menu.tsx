import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { 
    AlignJustify, 
    ShoppingBag, 
    UserIcon 
} from "lucide-react";
import { 
    Sheet, 
    SheetContent, 
    SheetTitle, 
    SheetTrigger 
} from "@/components/ui/sheet";

const Menu = () => {
    return <div className="flex justify-end gap-3">
        <nav className="hidden md:flex w-full max-w xs gap-1">
        <ModeToggle />
            <Button asChild variant='ghost'>
                <Link href='/cart'>
                    <ShoppingBag /> Cart
                </Link>
            </Button>
            <Button asChild>
                <Link href='/sign-in'>
                    <UserIcon /> Sign In
                </Link>
            </Button>
        </nav>
        <nav className="md:hidden">
        <Sheet>
            <SheetTrigger className='align-middle'>
                <AlignJustify/>
            </SheetTrigger>
            <SheetContent className='flex flex-col flex-start'>
            <SheetTitle>Menu</SheetTitle>
            </SheetContent>
        </Sheet>
        </nav>
    </div>;
}
 
export default Menu;