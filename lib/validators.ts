import {z} from 'zod';
import { formatNumberWithDecimal } from './utils';
import { PAYMENT_METHODS } from './constants';

const currency = z
.string()
.refine(
    (value) => /^\d+(\.\d{2})?/.test(formatNumberWithDecimal(Number(value))),
'Price must have exactly two decimal places' );

// Schema for inserting products
export const insertProductSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    slug: z.string().min(3, 'Slug must be at least 3 characters'),
    category: z.string().min(3, 'Category must be at least 3 characters'),
    brand: z.string().min(3, 'Brand must be at least 3 characters'),
    description: z.string().min(3, 'Description must be at least 3 characters'),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, 'Product must have at least one image'),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    rating: z.coerce.number(),
    price: currency,
});

//Schema for updating products
export const updateProductSchema = insertProductSchema.extend({
  id: z.string().min(1, 'Id is required'),
});

// Schema for signing users in
export const signInFormSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

// Schema for signing up a user
export const signUpFormSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Password must match'),
}).refine((data) => data.password === data.confirmPassword, 
{
    message: "Password don't match",
    path: ['confirmPassword'],
} );

// Cart Schemas
export const cartItemSchema = z.object({
    productId: z.string().min(1, 'Product is required'),
    name: z.string().min(1, 'Name is required'),
    slug: z.string().min(1, 'Slug is required'),
    qty: z.number().int().nonnegative('Quantity must be a positive number'),
    image: z.string().min(1, 'Image is required'),
    price: currency,
});

//Schema for inserting item in the cart
export const insertCartSchema = z.object({
    items: z.array(cartItemSchema),
    itemsPrice: currency,
    totalPrice: currency,
    shippingPrice: currency,
    taxPrice: currency,
    sessionCartId: z.string().min(1, 'Session cart id is required'),
    userId: z.string().optional().nullable(),
  });

  // Schema for the shipping address
  export const shippingAddressSchema = z.object ({
    fullName: z.string().min(3, 'Name must be at least 3 characters'),
    streetAddress: z.string().min(3, "Street Address must be at least 3 characters"),
    city: z.string().min(3, 'Town or City must be at least 3 characters'),
    postalCode: z.string().min(3, 'Zip Code must be at least 3 characters'),
    province: z.string().min(3, 'State or province must be at least 3 characters'),
    country: z.string().min(3, 'Country must be at least 3 characters'),
    lat: z.number().optional(),
    lng: z.number().optional(),
  });


  // Schema for Payment Methods
  export const paymentMethodSchema = z.object({
    type: z.string().min(1, 'Payment method is required')
  }).refine((data) => PAYMENT_METHODS.includes(data.type), {
    path: ['type'],
    message: 'Invalid payment method'
  });

  //Schema for inserting order
  export const insertOrderSchema = z.object({
    userId: z.string().min(1, 'User is required'),
    itemsPrice: currency,
    shippingPrice: currency,
    taxPrice: currency,
    totalPrice: currency,
    paymentMethod: z.string().refine((data) => PAYMENT_METHODS.includes(data), {
      message: 'Invalid payment method'
    }),
    shippingAddress: shippingAddressSchema,
  });

  // Schema for Order items
  export const insertOrderItemsSchema = z.object({
    productId: z.string(),
    slug: z.string(),
    image: z.string(),
    name: z.string(),
    price: currency,
    qty: z.number(),
  });

  //Schema for updating the user profile
  export const updateProfileSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().min(3, 'Email must be at least 3 characters'),
  });

  //Schema for updating a member
export const updateMemberSchema = updateProfileSchema.extend({
  id: z.string().min(1, 'ID is required'),
  role: z.string().min(1, 'Role is required'),
});

//Schema to insert reviews
export const insertReviewSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(3, 'Description must be at least 3 characters'),
  productId: z.string().min(1, 'Product ID is required'),
  userId: z.string().min(1, 'User ID is required'),
  rating: z.coerce.number().int().min(1, 'Rating must be at least 1').max(5, 'Rating at most 5'),
});

//Schema to insert Affiliate Link
export const insertAffiliateLinkSchema = z.object({
  userId: z.string().min(1, 'User ID is required'),
  referralCode: z.string().min(3, 'Referral Code must be at least 3 characters'),
  affiliateLink: z.string()
    .url({ message: "Must be a valid URL" })
    .refine((value) => value.includes("igiftmit.com"), {
      message: "Affiliate link must be from the domain igiftmit.com",
    })
});