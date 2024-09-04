import { getBillboard } from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import { Billboard } from '@/components/billboard';
import { ProductList } from '@/components/product-list';
import { Container } from '@/components/ui/container';

//no-store cache
export const revalidate = 0;

const Page = async () => {
  const billboard = await getBillboard('33190886-beb2-4129-80c6-54a247db8e72');
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};
export default Page;
