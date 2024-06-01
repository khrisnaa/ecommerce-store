import { Product } from '@/definition';
import qs from 'query-string';

const URI = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  //filter products
  const url = qs.stringifyUrl({
    url: URI,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url, { cache: 'no-store' });

  return res.json();
};

export default getProducts;
