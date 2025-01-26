import { Metadata } from "next";
import AddProductForm from "./product-form";

export const metadata: Metadata = {
    title: 'Add product'
};



const AdminCreateProductPage = () => {
    return <>
    <h2 className="h2-bold">Add Product</h2>
    <div className="my-8">
        <AddProductForm type='Add' />
    </div>
    
    </> ;
}
 
export default AdminCreateProductPage;