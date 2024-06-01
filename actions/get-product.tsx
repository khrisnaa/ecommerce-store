import { Product } from '@/definition';

const URI = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URI}/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
};
