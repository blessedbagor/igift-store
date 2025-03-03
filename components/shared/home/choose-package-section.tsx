'use client';

import { useEffect, useState } from "react";
import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "../product/product-list";
import LatestReviews from "./latest-reviews-section";


interface Product {
    rating: number;
    id: string;
    createdAt: Date;
    name: string;
    slug: string;
    category: string;
    images: string[];
    brand: string;
    description: string;
    stock: number;
    numReviews: number;
    isFeatured: boolean;
    banner: string | null;
    price: string;
}

export function PackageSection() {
    const [latestProducts, setLatestProducts] = useState<Product[]>([]);

    useEffect(() => {
        getLatestProducts().then((products) => setLatestProducts(products));
    }, []);

    return (
        <div className=" rounded-md md:px-8 px-2 flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden">
            <h2 className='mb-4 mt-20 text-4xl lg:text-6xl font-bold text-center'>
                Choose Your Package
            </h2>
            <p className='mb-20 text-xl text-center'>
            At iGift, we offer six flexible packages designed to meet your needs and help you succeed.
            </p>
            <ProductList 
                data={latestProducts} 
                limit={6}
            />
            
            <div className="my-12 mx-auto px-4"><LatestReviews /></div>
        </div>
    );
}

export default PackageSection;
