import { gql } from '../../lib/libs';

export const GET_ALL_PRODUCTS = gql`
  query($page: Int, $size: Int, $filter: ProductFilter) {
    getAllProducts(page: $page, size: $size, filter: $filter) {
      id
      name
      price
      discount
      mainImage
      trailer
    }
  }
`;

interface Filter {
  name: string
  minPrice: number
  maxPrice: number
  platform: number
  score: number
  genre: string[]
  discount: number
}

export interface GetAllProductsProps {
    page: number;
    size: number;
    filter?: Filter
}

export interface ProductHome {
    id: string;
    name: string;
    price: number;
    discount: number;
    mainImage: string;
    trailer: string;
}

export interface ProductsHome {
    getAllProducts: ProductHome[]
}