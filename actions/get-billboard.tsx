import { Billboard } from '@/definition';

const URI = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URI}/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
};
