import { Category } from '@/definition';

const URI = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URI, { cache: 'no-store' });

  return res.json();
};

export default getCategories;
