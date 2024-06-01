import { getBillboard } from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import { Billboard } from '@/components/billboard';
import { ProductList } from '@/components/product-list';
import { Container } from '@/components/ui/container';

//no-store cache
export const revalidate = 0;

const Page = async () => {
  const billboard = await getBillboard('8094790d-0b7a-419a-8ac8-1556649f9b2a');
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};
export default Page;
