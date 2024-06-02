import { Size } from '@/definition';

const URI = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URI, { cache: 'no-store' });

  return res.json();
};

export default getSizes;
