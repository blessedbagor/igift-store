'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
    Dialog, 
    DialogContent,
    DialogTitle, 
    DialogTrigger 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, SearchIcon } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

const AdminSearch = () => {
    const pathname = usePathname();
    const formActionUrl = pathname.includes('/admin/orders') 
    ? '/admin/orders' 
    : pathname.includes('/admin/members') 
    ? '/admin/members' 
    : '/admin/products';

    const searchParams = useSearchParams();
    const [queryValue, setQueryValue] = useState(searchParams.get('query') || '');

    useEffect(() => {
        setQueryValue(searchParams.get('query') || '');
    }, [searchParams]);



    return ( <>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full">
            Search...<Search /> 
        </Button>
      </DialogTrigger>
      <DialogTitle className="sr-only">Search</DialogTitle>
      <DialogContent>
        <form action={formActionUrl} method="GET">
          <Input
            type="search"
            name="query"
            value={queryValue}
            onChange={(e) => setQueryValue(e.target.value)}
            placeholder="Search..."
            className="w-full"
          />
          <Button variant="ghost" type="submit" className="mt-2 w-full">
            <SearchIcon />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
    </> );
}
 
export default AdminSearch;