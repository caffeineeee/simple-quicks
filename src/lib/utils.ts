import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Lato } from 'next/font/google';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const latoRegular = Lato({ weight: "400", subsets: ['latin'] });
export const latoBold = Lato({ weight: "700", subsets: ['latin'] });