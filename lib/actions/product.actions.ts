'use server';
import {prisma} from '@/db/prisma';
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// Get latest products
export async function getLatestProducts() {
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt: 'desc' },
    });

    // Normalize the rating field to ensure it's a number
    const normalizedData = data.map(product => ({
        ...product,
        rating: typeof product.rating === "string" ? Number(product.rating) : product.rating,
    }));

    return convertToPlainObject(normalizedData);
}

//Get single product by it's slug

export async function getProductBySlug(slug: string) {
    return await prisma.product.findFirst({
        where: {slug: slug},
    });
}