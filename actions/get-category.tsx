import { Category } from '@/definition';

const URI = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URI}/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
};
