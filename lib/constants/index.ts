export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'iGift';
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Helping Busy Professionals Stay Healthy';
export const SERVER_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://localhost:3000';
export const LATEST_PRODUCTS_LIMIT = Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefaultValues = {
    email: '',
    password: '',
};

export const signUpDefaultValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
};

export const shippingAddressDefaultValues = {
    fullName: '',
    streetAddress: '',
    city: '',
    province: '',
    postalCode: '',
    country: ''
};

export const PAYMENT_METHODS = process.env.PAYMENT_METHODS ? process.env.
PAYMENT_METHODS.split(',') : ['COD'];

export const DEFAULT_PAYMENT_METHOD = process.env.DEFAULT_PAYMENT_METHOD || 'COD';

export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 12;