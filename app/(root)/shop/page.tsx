import ProductCard from "@/components/shared/product/product-card";
import { getAllProducts } from "@/lib/actions/product.actions";

const SearchPage = async(props: {searchParams: Promise<{
    q?:string,
    price?:string,
    rating?:string,
    sort?:string,
    page?:string
}>}) => {

    const {
        q= 'all',
        price = 'all',
        rating = 'all',
        sort = 'newest',
        page = '1'
    } = await props.searchParams;

    const products = await getAllProducts({
        query: q,
        price,
        rating,
        sort,
        page: Number(page)
    });

    return <div className="grid md:grid-cols-4 md:gap-5">
    <div className="md:col-span-4 space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.data.length === 0 && <div>No products found</div>}
        {products.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </div>
  ;
}
 
export default SearchPage;