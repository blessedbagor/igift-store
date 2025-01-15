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

const Menu = () => {
    return <div className="flex justify-end gap-3">
        <nav className="hidden md:flex w-full max-w xs gap-1">
        <ModeToggle />
            <Button asChild variant='ghost'>
                <Link href='/cart'>
                    <ShoppingBag />
                </Link>
            </Button>
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