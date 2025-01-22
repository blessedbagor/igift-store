import CartTable from "@/app/(root)/cart/cart-table";
import { getMyCart } from "@/lib/actions/cart.actions";

const MyAccountCart = async () => {
    const cart = await getMyCart();

    return ( 
    <>
    <CartTable cart={cart} />
    </> 
    
    );
};
export default MyAccountCart;