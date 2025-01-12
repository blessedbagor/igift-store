import { getLatestProducts } from "@/lib/actions/product.action";
import ProductList from "@/components/product/product-list";

const Homepage = async () => {
const latestProducts = await getLatestProducts();

  return ( <>
  <ProductList 
  data={latestProducts} 
  title="Our Product Packages"
  limit={4}
   />
  </> );
}
 
export default Homepage ;