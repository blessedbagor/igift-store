import { getLatestProducts, getFeaturedProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/product/product-list";
import ProductCarousel from "@/components/shared/product/product-carousel";
import IconBoxes from "@/components/icon-boxes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DealCountdown from "@/components/deal-countdown";


const Homepage = async () => {
const latestProducts = await getLatestProducts();
const featuredProducts = await getFeaturedProducts();

  return ( 
  
  <>
  
  {featuredProducts.length > 0 && <ProductCarousel data={featuredProducts} />}
  
  <ProductList 
  data={latestProducts} 
  title="Popular Packages"
  limit={4}
   />
   <div className='text-center mb-4'>
   <Link href='/shop'>
   <Button variant='default'>View All Packages</Button>
   </Link>
   </div>

   <IconBoxes />
   
   <DealCountdown />
   
  </> 
  
  );
}
 
export default Homepage ;