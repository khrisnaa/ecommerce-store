import { NoResult } from '@/components/ui/no-result';
import { ProductCard } from '@/components/ui/product-card';
import { Product } from '@/definition';

interface ProductListProps {
  title: string;
  items: Product[];
}

export const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      {items.length == 0 && <NoResult />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
