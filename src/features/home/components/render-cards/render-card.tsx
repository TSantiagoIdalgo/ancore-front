import { GetAllProductsProps, ProductsHome, GET_ALL_PRODUCTS } from '#features/home/service/query/get-all-products';
import Style from './render-card.module.css';
import CardComponent from '../product-card/card';
import * as libs from '../../lib/libs';

interface RenderCadsProps {
    filter: GetAllProductsProps;
    tittle: string
}

export default function RenderCards ({ tittle, filter}: RenderCadsProps) {
  const { data, loading, error } = libs.useQuery<ProductsHome, GetAllProductsProps>(GET_ALL_PRODUCTS, {
    variables: filter
  });
  
  if (!data || !data.getAllProducts || loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section className={Style.trends}>
      <h2 className={Style.title}>{tittle}</h2>
      <div className={Style.trends_cards}>
        {data.getAllProducts.map(product => (
          <CardComponent 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            discount={product.discount}
            mainImage={product.mainImage}
            trailer={product.trailer}
          />
        ))}
      </div>
    </section>
  );
}