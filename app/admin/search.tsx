import ModeToggle from "@/components/shared/header/mode-toggle";
import { Button } from "@/components/ui/button";
import { 
    Command, 
    CommandEmpty, 
    CommandGroup, 
    CommandInput, 
    CommandItem, 
    CommandList, 
    CommandSeparator
} from "@/components/ui/command";
import { 
    Dialog, 
    DialogContent,
    DialogTitle, 
    DialogTrigger 
} from "@/components/ui/dialog";
import { 
    Box, 
    LayoutDashboard, 
    ShoppingBasket, 
    Search,
    Users 
} from "lucide-react";
import Link from "next/link";

const AdminSearch = () => {
    return ( <>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full">
            Search...<Search /> 
        </Button>
      </DialogTrigger>
      <DialogTitle className="sr-only">Search</DialogTitle>
      <DialogContent>
      <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Dashboard">
        <CommandItem className="flex items-center">
          <LayoutDashboard className="mr-2" />
          <Link href="/admin" className="text-gray-700 hover:text-yellow-500">
            Overview
          </Link>
        </CommandItem>
        <CommandItem className="flex items-center">
          <ShoppingBasket className="mr-2" />
          <Link href="/admin/products" className="text-gray-700 hover:text-yellow-500">
            Products
          </Link>
        </CommandItem>
        <CommandItem className="flex items-center">
          <Box className="mr-2" />
          <Link href="/admin/orders" className="text-gray-700 hover:text-yellow-500">
            Orders
          </Link>
        </CommandItem>
        <CommandItem className="flex items-center">
          <Users className="mr-2" />
          <Link href="/admin/members" className="text-gray-700 hover:text-yellow-500">
            Members
          </Link>
        </CommandItem>
      </CommandGroup>

        <CommandSeparator />
        <CommandGroup heading="Appearance">
        <CommandItem asChild>
            <ModeToggle/>
        </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
      </DialogContent>
    </Dialog>
    </> );
}
 
export default AdminSearch;