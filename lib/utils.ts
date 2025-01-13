import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert prisma object into a regular JS object

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// //Format number with decimal places
// export function formatNumberWithDecimal(num: number): string {
//   num.toString().split('.');
//   return decimal ? `${int}.${decimal}.padEnd(2, '0')` : `${int}.00`;
// }

export function formatNumberWithDecimal(num: number): string {
  const [int, decimal = ''] = num.toString().split('.');

  // Format the integer part with thousands separators
  const formattedInt = parseInt(int, 10).toLocaleString();

  // Ensure the decimal part has exactly two digits
  const formattedDecimal = decimal.padEnd(2, '0').slice(0, 2);

  return `${formattedInt}.${formattedDecimal}`;
}
