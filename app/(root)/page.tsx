import { getLatestProducts, getFeaturedProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/product/product-list";
import ProductCarousel from "@/components/shared/product/product-carousel";


const Homepage = async () => {
const latestProducts = await getLatestProducts();
const featuredProducts = await getFeaturedProducts();

  return ( <>
  {featuredProducts.length > 0 && <ProductCarousel data={featuredProducts} />}
  <ProductList 
  data={latestProducts} 
  title="Our Product Packages"
  limit={4}
   />
  </> );
}
 
export default Homepage ;