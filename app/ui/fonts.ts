import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

// Inter font configuration
export const inter = Inter({
  subsets: ['latin'],
});

// Lusitana font configuration
export const lusitana = Lusitana({
  subsets: ['latin'], // Specify subsets
  weight: '400',      // Ensure the weight is valid and available for Lusitana
});


