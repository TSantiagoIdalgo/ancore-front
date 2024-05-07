import { gql } from '../../lib/libs';

export const GET_ALL_BANNERS = gql`
    query {
      getAllBanners {
        id
        mainImage
        subImage
        price
        name
        discount
    }
}       
`;

export interface Banners {
    getAllBanners: {
        id: string;
        mainImage: string;
        subImage: string;
        price: number;
        name: string;
        discount: string
    }[]
}

export interface Banner {
    id: string;
    mainImage: string;
    subImage: string;
    price: number;
    name: string;
    discount: string
}